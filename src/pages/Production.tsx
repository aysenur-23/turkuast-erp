import { useEffect, useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import {
  Plus,
  Edit,
  Trash2,
  ArrowUp01,
  ArrowDown01,
  ChevronsUpDown,
  CalendarDays,
  Flag,
  UserCircle2,
  Package,
  Clock3,
  X,
  MoreVertical,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CreateProductionOrderDialog } from "@/components/Production/CreateProductionOrderDialog";
import { UnifiedOrderDetailModal } from "@/components/Orders/UnifiedOrderDetailModal";
import { LoadingState } from "@/components/ui/loading-state";
import { ResponsiveTable } from "@/components/shared/ResponsiveTable";
import { getOrders, deleteOrder, updateOrder, Order, subscribeToOrders, getOrderItems } from "@/services/firebase/orderService";
import { subscribeToRawMaterials, RawMaterial } from "@/services/firebase/materialService";
import { Timestamp } from "firebase/firestore";
import { UserProfile } from "@/services/firebase/authService";
import { canCreateResource, canUpdateResource, canDeleteResource } from "@/utils/permissions";
import { getPriorityMeta } from "@/utils/priority";

interface ProductionOrder {
  id: string;
  order_number?: string;
  orderNumber?: string;
  product_name?: string;
  productName?: string;
  quantity?: number;
  unit?: string;
  customer_name?: string | null;
  customerName?: string | null;
  customer_company?: string;
  status: string;
  due_date?: string;
  dueDate?: Date | string | Timestamp;
  priority?: number;
  created_at?: string;
  createdAt?: Date | Timestamp;
  rawMaterials?: Array<{
    materialId: string;
    material_id: string;
    materialName: string;
    material_name: string;
    quantity: number;
    unit: string;
  }>;
}

type SortKey = "order_number" | "customer_name" | "due_date" | "status" | "priority" | "created_at";
type SortOrder = "asc" | "desc";

const statusOptions: Array<{ value: ProductionOrder["status"]; label: string }> = [
  { value: "planned", label: "Planlanan" },
  { value: "in_production", label: "Üretimde" },
  { value: "quality_check", label: "Kalite Kontrol" },
  { value: "completed", label: "Tamamlandı" },
  { value: "on_hold", label: "Beklemede" },
];

const Production = () => {
  const { isAdmin, isTeamLeader, user } = useAuth();
  const [orders, setOrders] = useState<ProductionOrder[]>([]);
  const [rawMaterials, setRawMaterials] = useState<RawMaterial[]>([]);
  const [selectedRawMaterials, setSelectedRawMaterials] = useState<Map<string, { material: RawMaterial; quantity: number }>>(new Map());
  const [rawMaterialDialogOpen, setRawMaterialDialogOpen] = useState(false);
  const [currentOrderForMaterials, setCurrentOrderForMaterials] = useState<ProductionOrder | null>(null);
  const [loading, setLoading] = useState(false); // Başlangıçta false - placeholder data ile hızlı render
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<ProductionOrder | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("created_at");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };
  const [statusFilter, setStatusFilter] = useState<"all" | ProductionOrder["status"]>("all");
  const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [canCreate, setCanCreate] = useState(false);
  const [canUpdate, setCanUpdate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [ordersWithItems, setOrdersWithItems] = useState<Map<string, { productName?: string; quantity?: number; unit?: string }>>(new Map());

  // Reset to page 1 when filters change
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [statusFilter, sortBy, sortOrder]);

  // Yetki kontrolleri
  useEffect(() => {
    const checkPermissions = async () => {
      if (!user) {
        setCanCreate(false);
        setCanUpdate(false);
        setCanDelete(false);
        return;
      }
      try {
        const userProfile: UserProfile = {
          id: user.id,
          email: user.email,
          emailVerified: user.emailVerified,
          fullName: user.fullName,
          displayName: user.fullName,
          phone: user.phone,
          dateOfBirth: user.dateOfBirth,
          role: user.roles,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        };
        const [createAllowed, updateAllowed, deleteAllowed] = await Promise.all([
          canCreateResource(userProfile, "orders"),
          canUpdateResource(userProfile, "orders"),
          canDeleteResource(userProfile, "orders"),
        ]);
        setCanCreate(createAllowed || isAdmin || isTeamLeader);
        setCanUpdate(updateAllowed || isAdmin || isTeamLeader);
        setCanDelete(deleteAllowed || isAdmin || isTeamLeader);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Production permission check error:", error);
        }
        setCanCreate(false);
        setCanUpdate(false);
        setCanDelete(false);
      }
    };
    checkPermissions();
  }, [user]);

  // Hammadde verilerini çek
  useEffect(() => {
    const unsubscribe = subscribeToRawMaterials({}, (materials) => {
      setRawMaterials(materials);
    });
    return () => unsubscribe();
  }, []);

  // Gerçek zamanlı üretim güncellemeleri için subscribe
  useEffect(() => {
    // Defer subscription: İlk render'dan 100ms sonra başlat (non-blocking)
    const timer = setTimeout(() => {
      setLoading(true);

      const filters: { status?: string } = {};
      if (statusFilter !== 'all') {
        filters.status = statusFilter;
      }

      // Gerçek zamanlı dinleme başlat
      const unsubscribe = subscribeToOrders(filters, async (firebaseOrders) => {
        try {
          // Null/undefined kontrolü
          if (!Array.isArray(firebaseOrders)) {
            setOrders([]);
            setTotalPages(1);
            setLoading(false);
            return;
          }

          // Search ve sort işlemleri frontend'de yapılacak
          let filtered = firebaseOrders;

          // Sadece üretim siparişlerini (PROD- ile başlayanlar) göster
          filtered = filtered.filter((order: Order) => {
            const orderNum = order.order_number || order.orderNumber || '';
            return orderNum.startsWith('PROD-');
          });

          if (searchQuery) {
            const query = searchQuery.toLocaleLowerCase('tr-TR');
            filtered = filtered.filter((order: Order) => {
              const orderNum = (order.order_number || order.orderNumber || "").toLocaleLowerCase('tr-TR');
              const customerName = (order.customer_name || order.customerName || "").toLocaleLowerCase('tr-TR');
              // Order'da productName yok, items'da var - bu yüzden sadece orderNumber ve customerName ile arama yapıyoruz
              return orderNum.includes(query) || customerName.includes(query);
            });
          }

          // Sort
          filtered.sort((a, b) => {
            let aValue: unknown, bValue: unknown;
            if (sortBy === 'created_at') {
              aValue = a.createdAt;
              bValue = b.createdAt;
            } else if (sortBy === 'priority') {
              // Priority için order'da priority field'ı yok, şimdilik createdAt kullan
              aValue = a.createdAt;
              bValue = b.createdAt;
            } else if (sortBy === 'due_date') {
              aValue = a.dueDate || a.deliveryDate;
              bValue = b.dueDate || b.deliveryDate;
            } else {
              aValue = a.orderNumber || '';
              bValue = b.orderNumber || '';
            }

            if (aValue instanceof Timestamp) aValue = aValue.toMillis();
            if (bValue instanceof Timestamp) bValue = bValue.toMillis();
            if (aValue instanceof Date) aValue = aValue.getTime();
            if (bValue instanceof Date) bValue = bValue.getTime();

            return sortOrder === 'asc'
              ? (aValue > bValue ? 1 : -1)
              : (aValue < bValue ? 1 : -1);
          });

          // Pagination
          const startIndex = (page - 1) * 50;
          const endIndex = startIndex + 50;
          const paginatedOrders = filtered.slice(startIndex, endIndex);
          setOrders(paginatedOrders);
          setTotalPages(Math.ceil(filtered.length / 50));

          // İlk render için: items olmadan göster
          setOrdersWithItems(new Map());
          setLoading(false);

          // Defer items loading: İlk render'dan sonra yükle (200ms defer)
          setTimeout(async () => {
            const itemsMap = new Map<string, { productName?: string; quantity?: number; unit?: string }>();
            await Promise.all(
              paginatedOrders.map(async (order: Order) => {
                try {
                  const items = await getOrderItems(order.id);
                  if (items.length > 0) {
                    const firstItem = items[0];
                    itemsMap.set(order.id, {
                      productName: firstItem.productName || firstItem.product_name || undefined,
                      quantity: firstItem.quantity,
                      unit: "Adet", // OrderItem'da unit yok, varsayılan olarak "Adet"
                    });
                  }
                } catch (error: unknown) {
                  if (import.meta.env.DEV) {
                    console.error(`Error loading items for order ${order.id}:`, error);
                  }
                }
              })
            );
            setOrdersWithItems(itemsMap);
          }, 200);
        } catch (error: unknown) {
          if (import.meta.env.DEV) {
            console.error("Real-time production orders update error:", error);
          }
          setLoading(false);
        }
      });

      // Cleanup: Component unmount olduğunda unsubscribe et
      return () => {
        unsubscribe();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [statusFilter, sortBy, sortOrder, searchQuery, page]);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "in_production":
        return "secondary";
      case "planned":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      planned: "Planlanan",
      in_production: "Üretimde",
      quality_check: "Kalite Kontrol",
      completed: "Tamamlandı",
      on_hold: "Beklemede",
    };
    return labels[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      planned: "bg-indigo-100 text-indigo-800 border-indigo-300",
      in_production: "bg-orange-100 text-orange-800 border-orange-300",
      quality_check: "bg-cyan-100 text-cyan-800 border-cyan-300",
      completed: "bg-green-100 text-green-800 border-green-300",
      on_hold: "bg-amber-100 text-amber-800 border-amber-300",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  const formatDate = (value?: string | Date | Timestamp | null | undefined) => {
    if (!value) return "-";

    let date: Date | null = null;

    if (value instanceof Date) {
      date = value;
    } else if (typeof value === "string") {
      date = new Date(value);
    } else if (value && typeof value === "object") {
      if ("seconds" in value && typeof value.seconds === "number") {
        date = new Date(value.seconds * 1000);
      } else if ("toDate" in value && typeof value.toDate === "function") {
        try {
          date = value.toDate();
        } catch {
          return "-";
        }
      } else if ("_seconds" in value && typeof value._seconds === "number") {
        date = new Date(value._seconds * 1000);
      }
    }

    if (!date || isNaN(date.getTime())) return "-";

    try {
      return date.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "-";
    }
  };


  const priorityOptions = [
    { value: 0, label: "0 - Düşük" },
    { value: 1, label: "1" },
    { value: 2, label: "2 - Orta" },
    { value: 3, label: "3" },
    { value: 4, label: "4 - Yüksek" },
    { value: 5, label: "5 - Kritik" },
  ];

  const handleDelete = async () => {
    if (!selectedOrder) return;

    try {
      await deleteOrder(selectedOrder.id);
      toast.success("Üretim silindi");
      // Subscription otomatik güncelleyecek
      setDeleteDialogOpen(false);
      setSelectedOrder(null);
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("Delete production order error:", error);
      }
      toast.error(error instanceof Error ? error.message : "Üretim silinirken hata oluştu");
    }
  };

  const handleUpdateOrder = async (orderId: string, payload: Partial<ProductionOrder>) => {
    setUpdatingOrderId(orderId);
    try {
      // Yetki kontrolü
      if (!canUpdate && !isAdmin && !isTeamLeader) {
        toast.error("Üretim güncelleme yetkiniz yok.");
        setUpdatingOrderId(null);
        return;
      }
      // Üst yöneticiler için durum geçiş validasyonunu atla
      const skipValidation = isAdmin === true || isTeamLeader || canUpdate;
      await updateOrder(orderId, payload as Partial<Order>, user?.id, skipValidation);
      toast.success("Üretim güncellendi");
      // Subscription otomatik güncelleyecek
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("Update order error:", error);
      }
      toast.error(error instanceof Error ? error.message : "Üretim güncellenemedi");
    } finally {
      setUpdatingOrderId(null);
    }
  };


  if (loading) {
    return (
      <MainLayout>
        <LoadingState message="Üretimler yükleniyor..." />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-2 w-full sm:w-[95%] md:w-[90%] lg:max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-foreground">Üretim</h1>
            <p className="text-muted-foreground mt-0.5 text-xs sm:text-sm">Üretim süreçlerini yönetin</p>
          </div>
          {canCreate && (
            <Button className="gap-1 w-full sm:w-auto min-h-[36px] sm:min-h-8 text-xs sm:text-sm" onClick={() => setCreateDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Yeni Üretim</span>
              <span className="sm:hidden">Yeni</span>
            </Button>
          )}
        </div>

        <Card>
          <CardContent className="p-1.5">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2">
              {/* Arama Kutusu */}
              <div className="flex-1 min-w-0 w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px]">
                <SearchInput
                  placeholder="Üretim ara..."
                  className="w-full h-9 sm:h-10 text-xs sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Durum Filtresi */}
              <div className="w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px]">
                <Select value={statusFilter === "all" ? "all" : statusFilter} onValueChange={(value) => setStatusFilter(value as Order["status"] | "all")}>
                  <SelectTrigger className="w-full h-9 sm:h-10 text-xs sm:text-sm">
                    <SelectValue placeholder="Durum Filtrele" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Durumlar</SelectItem>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sıralama */}
              <div className="w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px]">
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortKey)}>
                  <SelectTrigger className="w-full h-9 sm:h-10 text-xs sm:text-sm">
                    <SelectValue placeholder="Sırala" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="created_at">Tarihe Göre</SelectItem>
                    <SelectItem value="priority">Önceliğe Göre</SelectItem>
                    <SelectItem value="due_date">Termin Tarihine Göre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sıralama Yönü */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="h-9 sm:h-10 text-xs sm:text-sm"
              >
                {sortOrder === "asc" ? <ArrowUp01 className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" /> : <ArrowDown01 className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-2" />}
                <span className="hidden sm:inline">{sortOrder === "asc" ? "Artan" : "Azalan"}</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Table View - Her zaman görünür */}
        <Card>
          <CardContent className="p-0">
            <div className="w-full overflow-hidden">
              <ResponsiveTable
                data={orders}
                columns={[
                  {
                    key: "order_number",
                    header: "Üretim No",
                    accessor: (order) => (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-medium whitespace-nowrap">{order.order_number || order.orderNumber || "-"}</span>
                        <span className="md:hidden text-xs text-muted-foreground">
                          {order.customer_name || order.customerName || "-"}
                        </span>
                        <span className="lg:hidden text-xs text-muted-foreground">
                          {formatDate(order.due_date || order.dueDate || order.created_at || order.createdAt)}
                        </span>
                      </div>
                    ),
                    priority: "high",
                    sticky: true,
                    minWidth: 160,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                  {
                    key: "customer",
                    header: "Müşteri",
                    accessor: (order) => (
                      <span className="text-xs font-medium truncate block w-full">
                        {order.customer_name || order.customerName || "-"}
                        {order.customer_company && (
                          <span className="text-muted-foreground"> - {order.customer_company}</span>
                        )}
                      </span>
                    ),
                    priority: "medium",
                    minWidth: 120,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                  {
                    key: "due_date",
                    header: "Termin",
                    accessor: (order) => (
                      <span className="text-xs font-medium">
                        {formatDate(order.due_date || order.dueDate || order.created_at || order.createdAt)}
                      </span>
                    ),
                    priority: "low",
                    minWidth: 120,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                  {
                    key: "status",
                    header: "Durum",
                    accessor: (order) => (
                      <Badge className={`${getStatusColor(order.status)} text-xs`}>
                        {getStatusLabel(order.status)}
                      </Badge>
                    ),
                    priority: "high",
                    minWidth: 120,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                  {
                    key: "priority",
                    header: "Öncelik",
                    accessor: (order) => {
                      const priorityMeta = getPriorityMeta(order.priority);
                      return (
                        <Badge className={`${priorityMeta.className} text-xs`}>
                          {priorityMeta.label}
                        </Badge>
                      );
                    },
                    priority: "low",
                    minWidth: 120,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                  {
                    key: "raw_materials",
                    header: "Hammaddeler",
                    accessor: (order) => (
                      <div className="flex flex-col gap-1">
                        {order.rawMaterials && order.rawMaterials.length > 0 ? (
                          order.rawMaterials.map((material, idx) => (
                            <span key={idx} className="text-xs text-muted-foreground">
                              {material.materialName}: {material.quantity} {material.unit}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground italic">Hammadde eklenmemiş</span>
                        )}
                      </div>
                    ),
                    priority: "medium",
                    minWidth: 150,
                    headerClassName: "text-left",
                    cellClassName: "text-left",
                  },
                ]}
                emptyMessage={searchQuery || statusFilter !== "all" ? "Arama sonucu bulunamadı" : "Henüz üretim kaydı bulunmuyor"}
                onRowClick={(order) => {
                  setSelectedOrder(order);
                  setDetailModalOpen(true);
                }}
                renderCard={(order) => {
                  const priorityMeta = getPriorityMeta(order.priority);
                  return (
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-all"
                      onClick={() => {
                        setSelectedOrder(order);
                        setDetailModalOpen(true);
                      }}
                    >
                      <CardContent className="p-3 sm:p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-xs sm:text-sm mb-1">
                              {order.order_number || order.orderNumber || "-"}
                            </h3>
                            {order.customer_name && (
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {order.customer_name || order.customerName || "-"}
                                {order.customer_company && ` - ${order.customer_company}`}
                              </p>
                            )}
                          </div>
                          <Badge className={`${getStatusColor(order.status)} text-xs`}>
                            {getStatusLabel(order.status)}
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-1.5 pt-2 border-t">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-muted-foreground">Termin:</span>
                            <span>
                              {formatDate(order.due_date || order.dueDate || order.created_at || order.createdAt)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-muted-foreground">Öncelik:</span>
                            <Badge className={`${priorityMeta.className} text-xs`}>
                              {priorityMeta.label}
                            </Badge>
                          </div>
                          <div className="flex items-start flex-col gap-1 text-xs sm:text-sm">
                            <span className="text-muted-foreground">Hammaddeler:</span>
                            <div className="flex flex-col gap-1">
                              {order.rawMaterials && order.rawMaterials.length > 0 ? (
                                order.rawMaterials.map((material, idx) => (
                                  <span key={idx} className="text-xs text-muted-foreground">
                                    {material.materialName}: {material.quantity} {material.unit}
                                  </span>
                                ))
                              ) : (
                                <span className="text-xs text-muted-foreground italic">Hammadde eklenmemiş</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                }}
              />
            </div>
            {totalPages > 1 && (
              <div className="flex flex-col gap-2 p-2 border-t md:flex-row md:items-center md:justify-between">
                <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
                  Sayfa {page} / {totalPages}
                </div>
                <div className="flex gap-2 justify-center md:justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 sm:h-9 text-xs sm:text-sm"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1 || loading}
                  >
                    Önceki
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 sm:h-9 text-xs sm:text-sm"
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages || loading}
                  >
                    Sonraki
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <CreateProductionOrderDialog
        open={createDialogOpen}
        onOpenChange={(open) => {
          setCreateDialogOpen(open);
          if (!open) {
            setSelectedOrder(null);
          }
        }}
        onSuccess={() => {
          setCreateDialogOpen(false);
          setSelectedOrder(null);
        }}
        order={selectedOrder as unknown as Order}
      />

      {selectedOrder && (
        <UnifiedOrderDetailModal
          open={detailModalOpen}
          onOpenChange={setDetailModalOpen}
          order={selectedOrder as unknown as Order}
          onEdit={() => {
            setDetailModalOpen(false);
            setCreateDialogOpen(true);
          }}
          onDelete={() => {
            setDetailModalOpen(false);
            setDeleteDialogOpen(true);
          }}
          onUpdate={() => {}}
        />
      )}

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Üretimi sil?</AlertDialogTitle>
            <AlertDialogDescription>
              Bu işlem geri alınamaz. Üretim kaydı kalıcı olarak silinecek.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Sil</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hammadde Seçim Dialogu */}
      <Dialog open={rawMaterialDialogOpen} onOpenChange={setRawMaterialDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Hammadde Seçimi
              {currentOrderForMaterials && (
                <span className="text-muted-foreground text-sm font-normal block mt-1">
                  {currentOrderForMaterials.order_number || currentOrderForMaterials.orderNumber}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Seçili Hammaddeler */}
            {selectedRawMaterials.size > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Seçili Hammaddeler</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(selectedRawMaterials.entries()).map(([materialId, { material, quantity }]) => (
                    <div key={materialId} className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md text-sm">
                      <span>{material.name}</span>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          const newQuantity = parseFloat(e.target.value) || 0;
                          setSelectedRawMaterials(prev => {
                            const newMap = new Map(prev);
                            const current = newMap.get(materialId);
                            if (current) {
                              newMap.set(materialId, { ...current, quantity: newQuantity });
                            }
                            return newMap;
                          });
                        }}
                        className="w-20 h-7 text-xs"
                        min={0}
                        step={0.01}
                      />
                      <span className="text-muted-foreground text-xs">{material.unit}</span>
                      <button
                        onClick={() => {
                          setSelectedRawMaterials(prev => {
                            const newMap = new Map(prev);
                            newMap.delete(materialId);
                            return newMap;
                          });
                        }}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mevcut Hammaddeler Listesi */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Mevcut Hammaddeler</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
                {rawMaterials.map((material) => {
                  const isSelected = selectedRawMaterials.has(material.id);
                  return (
                    <div
                      key={material.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedRawMaterials(prev => {
                            const newMap = new Map(prev);
                            newMap.delete(material.id);
                            return newMap;
                          });
                        } else {
                          setSelectedRawMaterials(prev => {
                            const newMap = new Map(prev);
                            newMap.set(material.id, { material, quantity: 1 });
                            return newMap;
                          });
                        }
                      }}
                    >
                      <Checkbox checked={isSelected} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{material.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Stok: {material.currentStock || 0} {material.unit}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {rawMaterials.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Henüz hammadde tanımlanmamış. Hammadde sayfasından hammadde ekleyebilirsiniz.
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setRawMaterialDialogOpen(false);
                setCurrentOrderForMaterials(null);
                setSelectedRawMaterials(new Map());
              }}
              className="w-full sm:w-auto"
            >
              İptal
            </Button>
            <Button
              onClick={() => {
                if (currentOrderForMaterials) {
                  const materials = Array.from(selectedRawMaterials.values()).map(({ material, quantity }) => ({
                    materialId: material.id,
                    material_id: material.id,
                    materialName: material.name,
                    material_name: material.name,
                    quantity,
                    unit: material.unit,
                  }));
                  handleUpdateOrder(currentOrderForMaterials.id, { rawMaterials: materials });
                }
                setRawMaterialDialogOpen(false);
                setCurrentOrderForMaterials(null);
                setSelectedRawMaterials(new Map());
              }}
              className="w-full sm:w-auto"
              disabled={selectedRawMaterials.size === 0}
            >
              <Check className="h-4 w-4 mr-2" />
              Kaydet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Production;
