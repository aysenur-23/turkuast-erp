import { useEffect, useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";

import { Plus, Loader2, Edit, Trash2, Package, X, Save, ShieldCheck, User, MoreVertical, Building2 } from "lucide-react";
import { toast } from "sonner";
import {
  getWarrantyRecords,
  createWarrantyRecord,
  updateWarrantyRecord,
  deleteWarrantyRecord,
  WarrantyRecord,
} from "@/services/firebase/warrantyService";
import { useAuth } from "@/contexts/AuthContext";
import { canCreateResource, canUpdateResource, canDeleteResource } from "@/utils/permissions";
import { UserProfile } from "@/services/firebase/authService";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getCustomers, Customer } from "@/services/firebase/customerService";
import { getProducts, Product } from "@/services/firebase/productService";
import { getOrders, Order } from "@/services/firebase/orderService";
import { getAllUsers } from "@/services/firebase/authService";
import { Timestamp } from "firebase/firestore";
import { LoadingState } from "@/components/ui/loading-state";
import { ActivityCommentsPanel } from "@/components/shared/ActivityCommentsPanel";
import { cn } from "@/lib/utils";
import { addWarrantyComment, getWarrantyComments, getWarrantyActivities } from "@/services/firebase/warrantyService";

const Warranty = () => {
  const { user } = useAuth();
  const [records, setRecords] = useState<WarrantyRecord[]>([]);
  const [canCreate, setCanCreate] = useState(false);
  const [canUpdate, setCanUpdate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [usersMap, setUsersMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<WarrantyRecord | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    customerId: "",
    productId: "",
    orderId: "",
    reason: "",
    status: "received" as WarrantyRecord["status"],
    repairDescription: "",
    cost: 0,
    receivedDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    fetchData();
  }, []);

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
          createdAt: null,
          updatedAt: null,
        };
        const [canCreateWarranty, canUpdateWarranty, canDeleteWarranty] = await Promise.all([
          canCreateResource(userProfile, "warranty"),
          canUpdateResource(userProfile, "warranty"),
          canDeleteResource(userProfile, "warranty"),
        ]);
        setCanCreate(canCreateWarranty);
        setCanUpdate(canUpdateWarranty);
        setCanDelete(canDeleteWarranty);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Warranty permission check error:", error);
        }
        setCanCreate(false);
        setCanUpdate(false);
        setCanDelete(false);
      }
    };
    checkPermissions();
  }, [user]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [recordsData, customersData, productsData, ordersData, usersData] = await Promise.all([
        getWarrantyRecords(),
        getCustomers(),
        getProducts(),
        getOrders(),
        getAllUsers(),
      ]);
      setRecords(recordsData);
      setCustomers(customersData);
      setProducts(productsData);
      setOrders(ordersData);

      const userMap: Record<string, string> = {};
      usersData.forEach(u => {
        userMap[u.id] = u.fullName || u.displayName || u.email || "Bilinmeyen";
      });
      setUsersMap(userMap);
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("Fetch warranty records error:", error);
      }
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Kayıtlar yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!formData.customerId || !formData.productId || !formData.reason.trim()) {
      toast.error("Müşteri, ürün ve neden gereklidir");
      return;
    }

    // Yetki kontrolü
    if (!canCreate) {
      toast.error("Garanti kaydı oluşturma yetkiniz yok.");
      return;
    }

    if (!user?.id) {
      toast.error("Kullanıcı bilgisi bulunamadı");
      return;
    }

    try {
      await createWarrantyRecord({
        customerId: formData.customerId,
        productId: formData.productId,
        orderId: formData.orderId || null,
        reason: formData.reason.trim(),
        status: formData.status,
        repairDescription: formData.repairDescription.trim() || null,
        cost: formData.cost || 0,
        receivedDate: Timestamp.fromDate(new Date(formData.receivedDate)),
        createdBy: user.id,
      });
      toast.success("Garanti kaydı oluşturuldu");
      setCreateDialogOpen(false);
      resetForm();
      fetchData();
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("Create warranty record error:", error);
      }
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Kayıt oluşturulurken hata oluştu");
    }
  };

  const handleStatusChange = async (recordId: string, newStatus: WarrantyRecord["status"]) => {
    if (!user?.id) {
      toast.error("Kullanıcı bilgisi bulunamadı");
      return;
    }

    // Yetki kontrolü: Mühendisler, yöneticiler ve kaydı oluşturan kişi durum değiştirebilir
    const record = records.find(r => r.id === recordId);
    const isEngineer = user?.roles?.includes("engineer") || user?.roles?.includes("mühendis") || false;
    const isCreator = record?.createdBy === user.id;

    if (!canUpdate && !isEngineer && !isCreator) {
      toast.error("Garanti kaydı durumunu değiştirme yetkiniz yok.");
      return;
    }

    try {
      await updateWarrantyRecord(
        recordId,
        { status: newStatus },
        user.id
      );
      toast.success("Durum güncellendi");

      // Eğer detay dialog'u açıksa ve aynı kayıt seçiliyse, güncelle
      if (selectedRecord && selectedRecord.id === recordId) {
        setSelectedRecord({ ...selectedRecord, status: newStatus });
      }

      // Liste verilerini güncelle
      setRecords(prevRecords =>
        prevRecords.map(record =>
          record.id === recordId ? { ...record, status: newStatus } : record
        )
      );
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Update warranty status error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Durum güncellenirken hata oluştu");
    }
  };

  const handleEdit = async () => {
    if (!selectedRecord) {
      toast.error("Kayıt seçilmedi");
      return;
    }

    // Yetki kontrolü: Mühendisler, yöneticiler ve kaydı oluşturan kişi düzenleyebilir
    const isEngineer = user?.roles?.includes("engineer") || user?.roles?.includes("mühendis") || false;
    const isCreator = selectedRecord.createdBy === user?.id;

    if (!canUpdate && !isEngineer && !isCreator) {
      toast.error("Garanti kaydı düzenleme yetkiniz yok.");
      setEditDialogOpen(false);
      return;
    }

    const customerId = (formData.customerId || "").trim();
    const productId = (formData.productId || "").trim();
    const reason = (formData.reason || "").trim();

    if (!customerId) {
      toast.error("Müşteri seçimi gereklidir");
      return;
    }

    if (!productId) {
      toast.error("Ürün seçimi gereklidir");
      return;
    }

    if (!reason) {
      toast.error("Neden alanı gereklidir");
      return;
    }

    if (!user?.id) {
      toast.error("Kullanıcı bilgisi bulunamadı");
      return;
    }

    try {
      const updateData: Partial<WarrantyRecord> = {
        customerId: customerId,
        productId: productId,
        orderId: formData.orderId?.trim() || null,
        reason: reason,
        status: formData.status,
        repairDescription: formData.repairDescription?.trim() || null,
        cost: formData.cost || 0,
      };

      // Alınma tarihi değiştiyse güncelle
      if (selectedRecord.receivedDate.toDate().toISOString().split("T")[0] !== formData.receivedDate) {
        updateData.receivedDate = Timestamp.fromDate(new Date(formData.receivedDate));
      }

      await updateWarrantyRecord(
        selectedRecord.id,
        updateData,
        user.id
      );
      toast.success("Garanti kaydı güncellendi");
      setEditDialogOpen(false);
      setSelectedRecord(null);
      resetForm();
      fetchData();
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Update warranty record error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Kayıt güncellenirken hata oluştu");
    }
  };

  const handleDelete = async () => {
    if (!selectedRecord) return;

    if (!user?.id) {
      toast.error("Kullanıcı bilgisi bulunamadı");
      return;
    }

    try {
      await deleteWarrantyRecord(selectedRecord.id, user.id);
      toast.success("Garanti kaydı silindi");
      fetchData();
      setDeleteDialogOpen(false);
      setSelectedRecord(null);
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Delete warranty record error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Kayıt silinirken hata oluştu");
    }
  };

  const openDetailDialog = (record: WarrantyRecord) => {
    setSelectedRecord(record);
    setDetailDialogOpen(true);
  };

  const openEditDialog = (record: WarrantyRecord) => {
    setSelectedRecord(record);
    const customerId = (record.customerId || "").trim();
    const productId = (record.productId || "").trim();
    const reason = (record.reason || "").trim();

    setFormData({
      customerId: customerId,
      productId: productId,
      orderId: (record.orderId || "").trim(),
      reason: reason,
      status: record.status || "received",
      repairDescription: (record.repairDescription || "").trim(),
      cost: record.cost || 0,
      receivedDate: record.receivedDate?.toDate()?.toISOString().split("T")[0] || new Date().toISOString().split("T")[0],
    });
    setEditDialogOpen(true);
  };

  const openDeleteDialog = (record: WarrantyRecord) => {
    setSelectedRecord(record);
    setDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      customerId: "",
      productId: "",
      orderId: "",
      reason: "",
      status: "received",
      repairDescription: "",
      cost: 0,
      receivedDate: new Date().toISOString().split("T")[0],
    });
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "received": return "Alındı";
      case "inspecting": return "İncelemede";
      case "waiting_parts": return "Parça Bekliyor";
      case "repairing": return "Onarımda";
      case "quality_check": return "Kalite Kontrol";
      case "ready": return "Teslimata Hazır";
      case "completed": return "Tamamlandı";
      case "returned": return "İade Edildi";
      default: return status;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "received":
        return <Badge variant="default">Alındı</Badge>;
      case "inspecting":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">İncelemede</Badge>;
      case "waiting_parts":
        return <Badge variant="outline" className="border-amber-500 text-amber-600">Parça Bekliyor</Badge>;
      case "repairing":
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Onarımda</Badge>;
      case "quality_check":
        return <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">Kalite Kontrol</Badge>;
      case "ready":
        return <Badge variant="default" className="bg-emerald-500 text-white hover:bg-emerald-600">Teslimata Hazır</Badge>;
      case "completed":
        return <Badge variant="outline" className="border-emerald-600 text-emerald-700">Tamamlandı</Badge>;
      case "returned":
        return <Badge variant="secondary" className="bg-gray-100 text-gray-700">İade Edildi</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getCustomerName = (customerId: string) => {
    if (!customerId) return "Bilinmeyen Müşteri";
    const customer = customers.find((c) => c.id === customerId);
    return customer?.name || "Bilinmeyen Müşteri";
  };

  const getProductName = (productId: string) => {
    if (!productId) return "Bilinmeyen Ürün";
    const product = products.find((p) => p.id === productId);
    return product?.name || "Bilinmeyen Ürün";
  };

  const getUserName = (userId: string) => {
    if (!userId) return "Bilinmeyen Kullanıcı";
    return usersMap[userId] || "Bilinmeyen Kullanıcı";
  };

  const filteredRecords = records.filter((record) => {
    const customerName = getCustomerName(record.customerId).toLowerCase();
    const productName = getProductName(record.productId).toLowerCase();
    const reason = record.reason.toLowerCase();
    return (
      customerName.includes(searchTerm.toLowerCase()) ||
      productName.includes(searchTerm.toLowerCase()) ||
      reason.includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <MainLayout>
        <LoadingState message="Garanti kayıtları yükleniyor..." />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-2 w-full sm:w-[95%] md:w-[90%] lg:max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex-1 min-w-0">
            <h1 className="text-[16px] sm:text-[18px] font-semibold text-foreground leading-tight">Satış Sonrası Takip</h1>
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-snug">
              Garantiye gelen ürünleri takip edin
            </p>
          </div>
          {canCreate && (
            <Button className="gap-1 w-full sm:w-auto min-h-[36px] sm:min-h-8 text-[11px] sm:text-xs" onClick={() => {
              resetForm();
              setCreateDialogOpen(true);
            }}>
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Yeni Kayıt</span>
              <span className="sm:hidden">Yeni</span>
            </Button>
          )}
        </div>

        {/* Filtreler */}
        <Card>
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              <SearchInput
                placeholder="Müşteri, ürün veya neden ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                containerClassName="flex-1 min-w-0 w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px]"
                className="h-9 sm:h-10 text-[11px] sm:text-xs"
              />
            </div>
          </CardContent>
        </Card>

        {/* Kayıtlar */}
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 sm:p-4">
              {loading ? (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
                  <p className="text-[11px] sm:text-xs">Yükleniyor...</p>
                </div>
              ) : filteredRecords.length === 0 ? (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <Package className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p className="text-[11px] sm:text-xs">{searchTerm ? "Arama sonucu bulunamadı" : "Henüz kayıt yok"}</p>
                </div>
              ) : (
                filteredRecords.map((record) => {
                  const getStatusColor = (status: string) => {
                    switch (status) {
                      case "completed":
                        return "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-400";
                      case "ready":
                        return "bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-300";
                      case "repairing":
                        return "bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/20 dark:border-orange-800 dark:text-orange-400";
                      case "inspecting":
                        return "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-400";
                      case "waiting_parts":
                        return "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-400";
                      case "quality_check":
                        return "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/20 dark:border-purple-800 dark:text-purple-400";
                      case "returned":
                        return "bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-950/20 dark:border-gray-800 dark:text-gray-400";
                      default:
                        return "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-950/20 dark:border-slate-800 dark:text-slate-400";
                    }
                  };

                  return (
                    <Card
                      key={record.id}
                      className="group hover:shadow-md transition-all duration-200 cursor-pointer border border-border/60 hover:border-border bg-card flex flex-col h-full overflow-hidden"
                      onClick={() => openDetailDialog(record)}
                    >
                      <CardContent className="p-3 sm:p-4 flex flex-col flex-1 gap-3 sm:gap-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[14px] sm:text-[15px] leading-snug text-foreground mb-2 line-clamp-2" title={getProductName(record.productId)}>
                              {getProductName(record.productId)}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
                              <p className="text-[11px] sm:text-xs truncate" title={getCustomerName(record.customerId)}>
                                {getCustomerName(record.customerId)}
                              </p>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-[11px] sm:text-xs">
                              <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();
                                openDetailDialog(record);
                              }}>
                                <Edit className="mr-2 h-4 w-4" /> Detayları Görüntüle
                              </DropdownMenuItem>
                              {(canUpdate || record.createdBy === user?.id) && (
                                <DropdownMenuItem onClick={(e) => {
                                  e.stopPropagation();
                                  openEditDialog(record);
                                }}>
                                  <Edit className="mr-2 h-4 w-4" /> Düzenle
                                </DropdownMenuItem>
                              )}
                              {canDelete && (
                                <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={(e) => {
                                  e.stopPropagation();
                                  openDeleteDialog(record);
                                }}>
                                  <Trash2 className="mr-2 h-4 w-4" /> Sil
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[11px] sm:text-xs font-medium px-3 py-1",
                              getStatusColor(record.status)
                            )}
                          >
                            {getStatusLabel(record.status)}
                          </Badge>
                          <Select
                            value={record.status}
                            onValueChange={(value: WarrantyRecord["status"]) => {
                              handleStatusChange(record.id, value);
                            }}
                          >
                            <SelectTrigger
                              className="w-auto h-7 text-[11px] sm:text-xs border-0 bg-transparent p-0 focus:ring-0 hover:bg-transparent"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent onClick={(e) => e.stopPropagation()} className="text-[11px] sm:text-xs">
                              <SelectItem value="received">Alındı</SelectItem>
                              <SelectItem value="inspecting">İncelemede</SelectItem>
                              <SelectItem value="waiting_parts">Parça Bekliyor</SelectItem>
                              <SelectItem value="repairing">Onarımda</SelectItem>
                              <SelectItem value="quality_check">Kalite Kontrol</SelectItem>
                              <SelectItem value="ready">Teslimata Hazır</SelectItem>
                              <SelectItem value="completed">Tamamlandı</SelectItem>
                              <SelectItem value="returned">İade Edildi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Description */}
                        <div className="space-y-3 flex-1">
                          <div>
                            <p className="text-[10px] font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">Neden</p>
                            <p className="text-[11px] sm:text-xs text-foreground line-clamp-3 leading-relaxed">{record.reason || "-"}</p>
                          </div>
                          {record.repairDescription && (
                            <div>
                              <p className="text-[10px] font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">Yapılan İşlem</p>
                              <p className="text-[11px] sm:text-xs text-foreground line-clamp-3 leading-relaxed">{record.repairDescription}</p>
                            </div>
                          )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                          <div>
                            <p className="text-[10px] font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">Maliyet</p>
                            <p className="text-base font-semibold text-foreground">
                              ₺{new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(record.cost)}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">Tarih</p>
                            <p className="text-base font-semibold text-foreground">
                              {record.receivedDate.toDate().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit" })}
                            </p>
                          </div>
                        </div>

                        {/* Footer */}
                        {record.createdBy && (
                          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground pt-2 border-t">
                            <User className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate">{getUserName(record.createdBy)}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </CardContent>
        </Card>

        {/* Detail Dialog */}
        <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
          <DialogContent className="app-dialog-shell">
            <DialogHeader className="px-6 py-4 border-b">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <DialogTitle className="text-lg">{selectedRecord ? getProductName(selectedRecord.productId) : "Garanti Kaydı Detayı"}</DialogTitle>
                    <DialogDescription>Garanti kaydı detayları</DialogDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  {selectedRecord && (
                    <Button variant="outline" size="sm" onClick={() => { setDetailDialogOpen(false); if (selectedRecord) openEditDialog(selectedRecord); }}>
                      <Edit className="h-4 w-4 mr-1" /> Düzenle
                    </Button>
                  )}
                  <Button variant="default" size="sm" onClick={() => setDetailDialogOpen(false)}>Kapat</Button>
                </div>
              </div>
            </DialogHeader>

            <div className="app-dialog-scroll bg-gray-50/30">
              {selectedRecord && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card><CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20"><User className="h-5 w-5 text-primary" /></div>
                      <div className="min-w-0"><p className="text-xs text-muted-foreground uppercase">Müşteri</p><p className="font-semibold truncate">{getCustomerName(selectedRecord.customerId)}</p></div>
                    </CardContent></Card>
                    <Card><CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center border border-emerald-200"><Package className="h-5 w-5 text-emerald-700" /></div>
                      <div className="min-w-0"><p className="text-xs text-muted-foreground uppercase">Ürün</p><p className="font-semibold truncate">{getProductName(selectedRecord.productId)}</p></div>
                    </CardContent></Card>
                    <Card><CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center border border-blue-200"><Package className="h-5 w-5 text-blue-700" /></div>
                      <div className="min-w-0"><p className="text-xs text-muted-foreground uppercase">Maliyet</p><p className="font-semibold">₺{new Intl.NumberFormat("tr-TR").format(selectedRecord.cost)}</p></div>
                    </CardContent></Card>
                    <Card><CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center border border-amber-200"><ShieldCheck className="h-5 w-5 text-amber-700" /></div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground uppercase">Durum</p>
                        <Select value={selectedRecord.status} onValueChange={(v: any) => handleStatusChange(selectedRecord.id, v)}>
                          <SelectTrigger className="h-6 border-0 p-0 font-semibold focus:ring-0 bg-transparent"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="received">Alındı</SelectItem>
                            <SelectItem value="inspecting">İncelemede</SelectItem>
                            <SelectItem value="waiting_parts">Parça Bekliyor</SelectItem>
                            <SelectItem value="repairing">Onarımda</SelectItem>
                            <SelectItem value="quality_check">Kalite Kontrol</SelectItem>
                            <SelectItem value="ready">Teslimata Hazır</SelectItem>
                            <SelectItem value="completed">Tamamlandı</SelectItem>
                            <SelectItem value="returned">İade Edildi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent></Card>
                  </div>

                  <Card>
                    <CardHeader><CardTitle className="text-base">Detaylar</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1"><Label className="text-xs text-muted-foreground uppercase">Alınma Tarihi</Label><p className="font-medium bg-muted/30 p-2 rounded-lg">{selectedRecord.receivedDate.toDate().toLocaleDateString("tr-TR")}</p></div>
                        {selectedRecord.orderId && (<div className="space-y-1"><Label className="text-xs text-muted-foreground uppercase">İlgili Sipariş</Label><p className="font-medium bg-muted/30 p-2 rounded-lg">{orders.find(o => o.id === selectedRecord.orderId)?.orderNumber || "Bulunamadı"}</p></div>)}
                      </div>
                      <div className="space-y-1"><Label className="text-xs text-muted-foreground uppercase">Geliş Nedeni</Label><p className="bg-muted/30 p-3 rounded-lg text-sm">{selectedRecord.reason}</p></div>
                      {selectedRecord.repairDescription && (<div className="space-y-1"><Label className="text-xs text-muted-foreground uppercase">Yapılan İşlem</Label><p className="bg-muted/30 p-3 rounded-lg text-sm">{selectedRecord.repairDescription}</p></div>)}
                      {selectedRecord.createdBy && (<div className="space-y-1"><Label className="text-xs text-muted-foreground uppercase">Oluşturan</Label><div className="flex items-center gap-2 bg-muted/30 p-2 rounded-lg"><User className="h-4 w-4 text-muted-foreground" /><p className="font-medium text-sm">{getUserName(selectedRecord.createdBy)}</p></div></div>)}
                    </CardContent>
                  </Card>

                  {selectedRecord?.id && user && (
                    <ActivityCommentsPanel
                      entityId={selectedRecord.id}
                      entityType="warranty"
                      onAddComment={async (content: string) => { await addWarrantyComment(selectedRecord.id, user.id, content, user.fullName || "Kullanıcı", user.email); }}
                      onGetComments={async () => { return await getWarrantyComments(selectedRecord.id); }}
                      onGetActivities={async () => { return await getWarrantyActivities(selectedRecord.id); }}
                      currentUserId={user.id}
                      currentUserName={user.fullName || "Kullanıcı"}
                      currentUserEmail={user.email}
                    />
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Create Dialog */}
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogContent className="app-dialog-shell">
            <DialogHeader className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <DialogTitle>Yeni Garanti Kaydı</DialogTitle>
                    <DialogDescription>Yeni garanti kaydı oluşturun</DialogDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setCreateDialogOpen(false)}>İptal</Button>
                  <Button variant="default" size="sm" onClick={handleCreate}>Oluştur</Button>
                </div>
              </div>
            </DialogHeader>

            <div className="app-dialog-scroll bg-gray-50/30">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label showRequired>Müşteri</Label>
                    <Select value={formData.customerId} onValueChange={(v) => setFormData({ ...formData, customerId: v })}>
                      <SelectTrigger><SelectValue placeholder="Müşteri seçin" /></SelectTrigger>
                      <SelectContent>{customers.map((c) => (<SelectItem key={c.id} value={c.id}>{c.name} {c.company && `(${c.company})`}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label showRequired>Ürün</Label>
                    <Select value={formData.productId} onValueChange={(v) => setFormData({ ...formData, productId: v })}>
                      <SelectTrigger><SelectValue placeholder="Ürün seçin" /></SelectTrigger>
                      <SelectContent>{products.map((p) => (<SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Sipariş (Opsiyonel)</Label>
                  <Select value={formData.orderId || "none"} onValueChange={(v) => setFormData({ ...formData, orderId: v === "none" ? "" : v })}>
                    <SelectTrigger><SelectValue placeholder="Sipariş seçin" /></SelectTrigger>
                    <SelectContent><SelectItem value="none">Sipariş yok</SelectItem>{orders.map((o) => (<SelectItem key={o.id} value={o.id}>{o.orderNumber || o.order_number || o.id}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Alınma Tarihi</Label>
                    <Input type="date" value={formData.receivedDate} onChange={(e) => setFormData({ ...formData, receivedDate: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Durum</Label>
                    <Select value={formData.status} onValueChange={(v: any) => setFormData({ ...formData, status: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="received">Alındı</SelectItem>
                        <SelectItem value="inspecting">İncelemede</SelectItem>
                        <SelectItem value="waiting_parts">Parça Bekliyor</SelectItem>
                        <SelectItem value="repairing">Onarımda</SelectItem>
                        <SelectItem value="quality_check">Kalite Kontrol</SelectItem>
                        <SelectItem value="ready">Teslimata Hazır</SelectItem>
                        <SelectItem value="completed">Tamamlandı</SelectItem>
                        <SelectItem value="returned">İade Edildi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2"><Label showRequired>Neden Geldi</Label><Textarea value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} placeholder="Neden..." className="min-h-[100px]" /></div>
                <div className="space-y-2"><Label>Yapılan İşlem</Label><Textarea value={formData.repairDescription} onChange={(e) => setFormData({ ...formData, repairDescription: e.target.value })} placeholder="Yapılan işlem..." className="min-h-[100px]" /></div>
                <div className="space-y-2"><Label>Maliyet (₺)</Label><Input type="number" value={formData.cost} onChange={(e) => setFormData({ ...formData, cost: Number(e.target.value) || 0 })} placeholder="0" min="0" step="0.01" /></div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="app-dialog-shell">
            <DialogHeader className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <DialogTitle>Garanti Kaydı Düzenle</DialogTitle>
                    <DialogDescription>Garanti kaydını düzenleyin</DialogDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setEditDialogOpen(false)}>İptal</Button>
                  {(canUpdate || selectedRecord?.createdBy === user?.id) && (
                    <Button variant="default" size="sm" onClick={handleEdit}>Kaydet</Button>
                  )}
                </div>
              </div>
            </DialogHeader>

            <div className="app-dialog-scroll bg-gray-50/30">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label showRequired>Müşteri</Label>
                    <Select value={formData.customerId || ""} onValueChange={(v) => setFormData({ ...formData, customerId: v })}>
                      <SelectTrigger><SelectValue placeholder="Müşteri seçin" /></SelectTrigger>
                      <SelectContent>{customers.map((c) => (<SelectItem key={c.id} value={c.id}>{c.name} {c.company && `(${c.company})`}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label showRequired>Ürün</Label>
                    <Select value={formData.productId || ""} onValueChange={(v) => setFormData({ ...formData, productId: v })}>
                      <SelectTrigger><SelectValue placeholder="Ürün seçin" /></SelectTrigger>
                      <SelectContent>{products.map((p) => (<SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Sipariş (Opsiyonel)</Label>
                  <Select value={formData.orderId || "none"} onValueChange={(v) => setFormData({ ...formData, orderId: v === "none" ? "" : v })}>
                    <SelectTrigger><SelectValue placeholder="Sipariş seçin" /></SelectTrigger>
                    <SelectContent><SelectItem value="none">Sipariş yok</SelectItem>{orders.map((o) => (<SelectItem key={o.id} value={o.id}>{o.orderNumber || o.order_number || o.id}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Alınma Tarihi</Label>
                    <Input type="date" value={formData.receivedDate} onChange={(e) => setFormData({ ...formData, receivedDate: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Durum</Label>
                    <Select value={formData.status} onValueChange={(v: any) => setFormData({ ...formData, status: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="received">Alındı</SelectItem>
                        <SelectItem value="inspecting">İncelemede</SelectItem>
                        <SelectItem value="waiting_parts">Parça Bekliyor</SelectItem>
                        <SelectItem value="repairing">Onarımda</SelectItem>
                        <SelectItem value="quality_check">Kalite Kontrol</SelectItem>
                        <SelectItem value="ready">Teslimata Hazır</SelectItem>
                        <SelectItem value="completed">Tamamlandı</SelectItem>
                        <SelectItem value="returned">İade Edildi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2"><Label showRequired>Neden Geldi</Label><Textarea value={formData.reason || ""} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} placeholder="Neden..." className="min-h-[100px]" /></div>
                <div className="space-y-2"><Label>Yapılan İşlem</Label><Textarea value={formData.repairDescription} onChange={(e) => setFormData({ ...formData, repairDescription: e.target.value })} placeholder="Yapılan işlem..." className="min-h-[100px]" /></div>
                <div className="space-y-2"><Label>Maliyet (₺)</Label><Input type="number" value={formData.cost} onChange={(e) => setFormData({ ...formData, cost: Number(e.target.value) || 0 })} placeholder="0" min="0" step="0.01" /></div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-[16px] sm:text-[18px]">Garanti Kaydını Sil</AlertDialogTitle>
              <AlertDialogDescription className="text-[11px] sm:text-xs">
                {selectedRecord && (
                  <>
                    Bu garanti kaydını silmek istediğinizden emin misiniz?
                    Bu işlem geri alınamaz.
                  </>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-[11px] sm:text-xs">İptal</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="text-[11px] sm:text-xs bg-destructive text-destructive-foreground">
                Sil
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </MainLayout>
  );
};

export default Warranty;

