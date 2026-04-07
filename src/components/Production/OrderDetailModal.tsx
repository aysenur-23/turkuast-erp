import { useEffect, useState, useCallback, useMemo, type FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Calendar,
  Package,
  User,
  Clock,
  ListChecks,
  ShoppingCart,
  Edit,
  Trash2,
  Building2,
  Phone,
  Mail,
  ClipboardList,
  CheckCircle2,
  Check,
  CircleDot,
  X,
  Save,
  Loader2,
  Truck,
  Factory,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { getTasks } from "@/services/firebase/taskService";
import { updateOrder, getOrderItems, updateOrderItem, getValidStatusTransitions, addOrderComment, getOrderComments, getOrderActivities, Order, OrderItem } from "@/services/firebase/orderService";
import { getCustomerById } from "@/services/firebase/customerService";
import { formatPhoneForDisplay, formatPhoneForTelLink } from "@/utils/phoneNormalizer";
import { useAuth } from "@/contexts/AuthContext";
import { canUpdateResource, canDeleteResource } from "@/utils/permissions";
import { getAllUsers, UserProfile } from "@/services/firebase/authService";
import { getProducts, Product } from "@/services/firebase/productService";
import { Timestamp } from "firebase/firestore";
import { ActivityCommentsPanel } from "@/components/shared/ActivityCommentsPanel";
import { PRIORITY_OPTIONS } from "@/utils/priority";
import { uploadFile } from "@/services/firebase/storageService";
import { Switch } from "@/components/ui/switch";
import { FileDown, FileUp, CreditCard, Receipt, Wallet, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper functions
const resolveDateValue = (value?: unknown): Date | null => {
  if (!value) return null;
  if (typeof value === "string") {
    const date = new Date(value);
    if (!isNaN(date.getTime())) return date;
    return null;
  }
  if (value instanceof Date) {
    if (!isNaN(value.getTime())) return value;
    return null;
  }
  if (value instanceof Timestamp) {
    return value.toDate();
  }
  if (value && typeof value === "object") {
    if ("seconds" in value && typeof (value as { seconds: unknown }).seconds === "number") {
      return new Date((value as { seconds: number }).seconds * 1000);
    }
    if ("toDate" in value && typeof (value as { toDate: unknown }).toDate === "function") {
      try {
        return (value as { toDate: () => Date }).toDate();
      } catch {
        return null;
      }
    }
    if ("_seconds" in value && typeof (value as { _seconds: unknown })._seconds === "number") {
      return new Date((value as { _seconds: number })._seconds * 1000);
    }
  }
  return null;
};

const formatDateSafe = (dateInput?: string | Date | null | Timestamp | unknown) => {
  if (!dateInput) return "-";
  let date: Date | null = null;

  if (dateInput instanceof Date) {
    date = dateInput;
  } else if (dateInput instanceof Timestamp) {
    date = dateInput.toDate();
  } else if (typeof dateInput === "string") {
    date = new Date(dateInput);
  } else if (dateInput && typeof dateInput === "object") {
    if ("seconds" in dateInput && typeof (dateInput as { seconds: unknown }).seconds === "number") {
      date = new Date((dateInput as { seconds: number }).seconds * 1000);
    } else if ("toDate" in dateInput && typeof (dateInput as { toDate: unknown }).toDate === "function") {
      try {
        date = (dateInput as { toDate: () => Date }).toDate();
      } catch {
        return "-";
      }
    } else if ("_seconds" in dateInput && typeof (dateInput as { _seconds: unknown })._seconds === "number") {
      date = new Date((dateInput as { _seconds: number })._seconds * 1000);
    }
  }

  if (!date || isNaN(date.getTime())) return "-";

  try {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  } catch {
    return "-";
  }
};

type StatusItem = {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
};

// Üretim siparişlerine özgü durum workflow'u - Üretim odaklı akış
const productionStatusWorkflow: StatusItem[] = [
  { value: "planned", label: "Planlanan", icon: ClipboardList, color: "text-muted-foreground" },
  { value: "box_production", label: "Kutu Üretimi", icon: Package, color: "text-orange-500" },
  { value: "component_production", label: "Komponent Üretimi", icon: Factory, color: "text-amber-500" },
  { value: "assembly", label: "Birleştirme", icon: Layers, color: "text-blue-600" },
  { value: "completed", label: "Tamamlandı", icon: Check, color: "text-emerald-600" },
];

const normalizeStatusValue = (status?: string) => {
  if (!status) return "planned";
  return status;
};

interface OrderDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: Order;
  onEdit?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
}

export const OrderDetailModal = ({ open, onOpenChange, order, onEdit, onDelete, onUpdate }: OrderDetailModalProps) => {

  const { user, isAdmin, isTeamLeader } = useAuth();
  const [tasks, setTasks] = useState<Awaited<ReturnType<typeof getTasks>>>([]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<Awaited<ReturnType<typeof getCustomerById>> | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<string>(normalizeStatusValue(order?.status));
  const [usersMap, setUsersMap] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [canUpdate, setCanUpdate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  if (!order) return null;
  const [formData, setFormData] = useState({
    order_number: "",
    product_name: "",
    product_id: "",
    quantity: "",
    unit: "Adet",
    customer_id: "",
    customer_name: "",
    due_date: "",
    priority: "0",
    status: "planned",
    notes: "",
    shipping_address: "",
    shipping_notes: "",
    total_amount: "0",
    paid_amount: "0",
    payment_status: "unpaid" as "paid" | "unpaid" | "partially_paid",
    payment_method: "",
    has_maturity: false,
    maturity_months: "0",
    maturity_date: "",
    invoice_status: "not_invoiced" as "invoiced" | "not_invoiced",
    invoice_url: "",
  });

  // Personel kontrolü - Personel üretim detayını görebilir ama düzenleyemez
  // Bu değişkeni en üste taşıyoruz çünkü diğer değişkenlerde kullanılıyor
  const isPersonnel = Boolean(user?.roles?.includes("personnel"));
  const isManager = Boolean(user?.roles?.includes('manager')) || isAdmin;
  const isCreator = user?.id === order?.createdBy;
  const canUpdateStatus = true; // Tüm giriş yapmış kullanıcılar durum güncelleyebilir

  const orderNumber = order?.order_number || order?.orderNumber || order?.id || "-";
  const dueDateValue = resolveDateValue(order?.due_date || order?.dueDate);
  const createdAtValue = resolveDateValue(order?.created_at || order?.createdAt);
  const updatedAtValue = resolveDateValue(order?.updated_at || order?.updatedAt);
  const shippingAddress = order?.delivery_address || order?.shippingAddress || order?.shipping_address;
  const shippingNotes = order?.delivery_notes || order?.shippingNotes || order?.shipping_notes;

  // Yetki kontrolleri - Firestore'dan kontrol et
  useEffect(() => {
    const checkPermissions = async () => {
      if (!user || !order) {
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
          phone: null,
          dateOfBirth: null,
          role: user.roles || [],
          createdAt: null,
          updatedAt: null,
        };
        const [canUpdateOrder, canDeleteOrder] = await Promise.all([
          canUpdateResource(userProfile, "orders"),
          canDeleteResource(userProfile, "orders"),
        ]);
        setCanUpdate(canUpdateOrder || isAdmin || isTeamLeader);
        setCanDelete(canDeleteOrder || isAdmin || isTeamLeader);
      } catch (error: unknown) {
        if (import.meta.env.DEV) {
          console.error("Error checking order permissions:", error);
        }
        setCanUpdate(false);
        setCanDelete(false);
      }
    };
    checkPermissions();
  }, [user, order]);

  const fetchProducts = useCallback(async () => {
    try {
      setProductsLoading(true);
      const productData = await getProducts();
      setProducts(productData);
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Fetch products error:", error);
      toast.error("Ürün listesi alınamadı.");
    } finally {
      setProductsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (open && order?.id) {
      fetchOrderDetails();
      setCurrentStatus(normalizeStatusValue(order?.status));
      fetchProducts();
    }
  }, [open, order?.id, order?.status]);

  useEffect(() => {
    if (order && !isEditing && orderItems.length > 0) {
      // Order items'dan product_id'yi bul
      const firstItem = orderItems[0];
      const productId = firstItem?.productId || "";
      const productName = firstItem?.productName || "";
      const dueDate = order.due_date
        ? (typeof order.due_date === 'string'
          ? new Date(order.due_date).toISOString().split("T")[0]
          : order.dueDate
            ? (order.dueDate instanceof Date
              ? order.dueDate.toISOString().split("T")[0]
              : typeof order.dueDate === 'string'
                ? new Date(order.dueDate).toISOString().split("T")[0]
                : "")
            : "")
        : "";

      setFormData({
        order_number: order.order_number || order.orderNumber || "",
        product_name: productName,
        product_id: productId,
        quantity: firstItem?.quantity?.toString() || "",
        unit: "Adet",
        customer_id: order.customer_id || order.customerId || "",
        customer_name: order.customer_name || order.customerName || "",
        due_date: dueDate,
        priority: order.priority?.toString() || "0",
        status: order.status || "planned",
        notes: order.notes || "",
        shipping_address: order.delivery_address || order.shippingAddress || order.shipping_address || "",
        shipping_notes: order.delivery_notes || order.shippingNotes || order.shipping_notes || "",
        total_amount: (order.total_amount || order.totalAmount || 0).toString(),
        paid_amount: (order.paidAmount || 0).toString(),
        payment_status: (order.paymentStatus || "unpaid") as "paid" | "unpaid" | "partially_paid",
        payment_method: order.paymentMethod || "",
        has_maturity: !!order.hasMaturity,
        maturity_months: (order.maturityMonths || 0).toString(),
        maturity_date: order.maturityDate ? (resolveDateValue(order.maturityDate)?.toISOString().split("T")[0] || "") : "",
        invoice_status: (order.invoiceStatus || "not_invoiced") as "invoiced" | "not_invoiced",
        invoice_url: order.invoiceUrl || "",
      });
    }
  }, [order, open, isEditing, orderItems]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        const userMap: Record<string, string> = {};
        allUsers.forEach((u) => {
          userMap[u.id] = u.fullName || u.displayName || u.email || "Bilinmeyen";
        });
        setUsersMap(userMap);
      } catch (error: unknown) {
        if (import.meta.env.DEV) console.error("Error loading users:", error);
      }
    };
    if (open) {
      loadUsers();
    }
  }, [open]);

  const fetchOrderDetails = async () => {
    setLoading(true);
    try {
      // Fetch customer details
      if (order.customer_id || order.customerId) {
        const customerId = order.customer_id || order.customerId;
        try {
          const customerData = await getCustomerById(customerId);
          setCustomer(customerData);
        } catch (error: unknown) {
          if (import.meta.env.DEV) console.error("Fetch customer error:", error);
          // Customer fetch hatası kritik değil, devam et
        }
      }

      // Fetch order items
      try {
        const items = await getOrderItems(order.id);
        setOrderItems(items);
      } catch (error: unknown) {
        if (import.meta.env.DEV) console.error("Fetch order items error:", error);
      }

      // Fetch tasks
      setTasksLoading(true);
      try {
        const tasks = await getTasks({ productionOrderId: order.id });
        setTasks(tasks);
      } catch (error: unknown) {
        if (import.meta.env.DEV) console.error("Fetch order tasks error:", error);
        const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
        toast.error(errorMessage || "Görevler yüklenirken hata oluştu");
      } finally {
        setTasksLoading(false);
      }
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Fetch order details error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error("Detaylar yüklenirken hata: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !order?.id) return;

    // Dosya boyutu kontrolü (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Dosya boyutu 10MB'dan küçük olmalıdır.");
      return;
    }

    setSaving(true);
    try {
      const path = `invoices/${order.id}/${Date.now()}_${file.name}`;
      const url = await uploadFile(file, path);
      setFormData(prev => ({ ...prev, invoice_url: url }));
      toast.success("Dosya başarıyla yüklendi.");
    } catch (error: any) {
      toast.error("Dosya yüklenemedi: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  const fetchOrderTasks = async () => {
    setTasksLoading(true);
    try {
      const tasks = await getTasks({ productionOrderId: order.id });
      setTasks(tasks);
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Fetch order tasks error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Görevler yüklenirken hata oluştu");
    } finally {
      setTasksLoading(false);
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      planned: "Planlanan",
      box_production: "Kutu Üretimi",
      component_production: "Komponent Üretimi",
      assembly: "Birleştirme",
      completed: "Tamamlandı",
    };
    return labels[status] || status;
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "completed":
        return "default";
      case "box_production":
        return "secondary";
      case "component_production":
        return "secondary";
      case "assembly":
        return "secondary";
      case "planned":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getCurrentStatusIndex = useCallback(() => {
    const normalized = normalizeStatusValue(currentStatus);
    const index = productionStatusWorkflow.findIndex((statusItem) => statusItem.value === normalized);
    return index === -1 ? 0 : index;
  }, [currentStatus, productionStatusWorkflow]);

  const getNextStatus = useMemo(() => {
    return () => {
      const currentIndex = getCurrentStatusIndex();
      if (currentIndex === -1 || currentIndex >= productionStatusWorkflow.length - 1) {
        return null;
      }
      // completed durumundan sonra geçiş yok, sipariş tamamlandı
      if (currentStatus === "completed") {
        return null;
      }
      return productionStatusWorkflow[currentIndex + 1];
    };
  }, [currentStatus, productionStatusWorkflow, getCurrentStatusIndex]);

  const handleStatusChange = async (nextStatus: string) => {
    if (!order?.id || !user?.id) {
      return;
    }

    setUpdatingStatus(true);
    try {
      await updateOrder(
        order.id,
        {
          status: nextStatus as Order["status"],
        },
        user.id,
        isAdmin // Üst yöneticiler için durum geçiş validasyonunu atla
      );
      setCurrentStatus(nextStatus);
      toast.success(`Sipariş durumu ${getStatusLabel(nextStatus)} olarak güncellendi.`);
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Order status update error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error("Durum güncellenemedi: " + errorMessage);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleRevertStatus = async (targetStatus: string) => {
    if (!order?.id || !user?.id) {
      return;
    }

    setUpdatingStatus(true);
    try {
      await updateOrder(
        order.id,
        {
          status: targetStatus as Order["status"],
        },
        user.id,
        isAdmin
      );
      setCurrentStatus(targetStatus);
      toast.success(`Sipariş durumu ${getStatusLabel(targetStatus)} olarak güncellendi.`);
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Order status revert error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error("Durum güncellenemedi: " + errorMessage);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleProductSelect = (value: string) => {
    if (value === "none" || value === "") {
      setFormData((prev) => ({ ...prev, product_id: "" }));
      return;
    }
    const selected = products.find((product) => product.id === value);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        product_id: value,
        product_name: selected.name,
      }));
    }
  };

  const handleProductNameChange = (value: string) => {
    setFormData((prev) => {
      const selectedProduct = products.find((p) => p.id === prev.product_id);
      const newProductId = selectedProduct && selectedProduct.name === value ? prev.product_id : "";

      return {
        ...prev,
        product_name: value,
        product_id: newProductId,
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!order?.id) return;

    setSaving(true);
    try {
      const dueDate = formData.due_date ? Timestamp.fromDate(new Date(formData.due_date)) : null;
      const quantityValue = Number(formData.quantity) || 0;

      // Order'ı güncelle
      await updateOrder(order.id, {
        orderNumber: formData.order_number,
        order_number: formData.order_number,
        customerId: formData.customer_id || null,
        customer_id: formData.customer_id || null,
        customerName: formData.customer_name || null,
        customer_name: formData.customer_name || null,
        dueDate,
        due_date: formData.due_date || null,
        status: formData.status as Order["status"],
        notes: formData.notes || null,
        deliveryAddress: formData.shipping_address || null,
        delivery_address: formData.shipping_address || null,
        shippingAddress: formData.shipping_address || null,
        shipping_address: formData.shipping_address || null,
        deliveryNotes: formData.shipping_notes || null,
        delivery_notes: formData.shipping_notes || null,
        shippingNotes: formData.shipping_notes || null,
        shipping_notes: formData.shipping_notes || null,
        totalQuantity: quantityValue,
        total_quantity: quantityValue,
        itemsCount: 1,
        items_count: 1,
        totalAmount: Number(formData.total_amount),
        total_amount: Number(formData.total_amount),
        price: Number(formData.total_amount),
        paidAmount: Number(formData.paid_amount),
        paymentMethod: formData.payment_method,
        paymentStatus: formData.payment_status,
        hasMaturity: formData.has_maturity,
        maturityMonths: Number(formData.maturity_months),
        maturityDate: formData.maturity_date ? Timestamp.fromDate(new Date(formData.maturity_date)) : null,
        invoiceUrl: formData.invoice_url,
        invoiceStatus: formData.invoice_status,
      }, user?.id);

      // Items'ı güncelle
      try {
        const items = await getOrderItems(order.id);
        if (items.length > 0) {
          await updateOrderItem(order.id, items[0].id, {
            productId: formData.product_id || null,
            product_id: formData.product_id || null,
            productName: formData.product_name,
            product_name: formData.product_name,
            quantity: quantityValue,
          }, user?.id);
        }
      } catch (itemsError) {
        console.warn("Order items güncellenemedi:", itemsError);
      }

      toast.success("Üretim başarıyla güncellendi");
      setIsEditing(false);
      setCurrentStatus(formData.status);
      onUpdate?.();
      // Verileri yeniden yükle
      fetchOrderDetails();
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Update production order error:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata";
      toast.error(errorMessage || "Üretim güncellenirken hata oluştu");
    } finally {
      setSaving(false);
    }
  };

  // Quick meta chips için veri
  const quickMetaChips = [
    orderNumber && { label: "Üretim No", value: orderNumber },
    createdAtValue && { label: "Oluşturulma", value: formatDateSafe(createdAtValue as Date | string | Timestamp | null) },
    dueDateValue && { label: "Termin", value: formatDateSafe(dueDateValue as Date | string | Timestamp | null) },
    order.priority !== undefined && { label: "Öncelik", value: `${order.priority || 0} / 5` },
  ].filter(Boolean) as { label: string; value: string }[];

  // Üretim özeti satırları
  const firstItem = orderItems[0];
  const orderSummaryRows = [
    { label: "Üretim No", value: orderNumber },
    { label: "Ürün", value: firstItem?.productName || "-" },
    { label: "Miktar", value: `${firstItem?.quantity || 0} Adet` },
    { label: "Termin Tarihi", value: formatDateSafe(dueDateValue as Date | string | Timestamp | null) },
    { label: "Öncelik", value: `${order.priority || 0} / 5` },
    { label: "Durum", value: getStatusLabel(order.status) },
    {
      label: "Oluşturan", value: order?.createdBy
        ? (usersMap[order.createdBy] || "-")
        : "-"
    },
    { label: "Oluşturma Tarihi", value: formatDateSafe(createdAtValue as Date | string | Timestamp | null) },
    { label: "Son Güncelleme", value: formatDateSafe(updatedAtValue as Date | string | Timestamp | null) },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="app-dialog-shell">
        <DialogTitle className="sr-only">
          Üretim - {orderNumber}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {firstItem?.productName ? `${firstItem.productName} - Üretim detayları` : "Üretim detayları"}
        </DialogDescription>

        <DialogHeader className="p-4 border-b bg-white flex-shrink-0 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full sm:w-auto">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                  Üretim - {orderNumber}
                </h2>
                {firstItem?.productName && (
                  <p className="text-sm text-muted-foreground truncate mt-0">
                    {firstItem.productName}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0 relative z-10 w-full sm:w-auto justify-start sm:justify-end">
              <Badge variant={getStatusVariant(currentStatus)} className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 relative z-10 w-full sm:w-auto justify-center sm:justify-start">
                {getStatusLabel(currentStatus)}
              </Badge>
              {!isEditing ? (
                <>
                  {!isPersonnel && (canUpdate || order.createdBy === user?.id) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                      className="h-9 px-4"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Düzenle
                    </Button>
                  )}
                  {!isPersonnel && canDelete && onDelete && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onDelete}
                      className="h-9 px-4 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Sil
                    </Button>
                  )}
                </>
              ) : (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsEditing(false);
                      // Form verilerini sıfırla
                      if (order && orderItems.length > 0) {
                        const firstItem = orderItems[0];
                        const productId = firstItem?.productId || "";
                        const productName = firstItem?.productName || "";
                        const dueDate = order.due_date
                          ? (typeof order.due_date === 'string'
                            ? new Date(order.due_date).toISOString().split("T")[0]
                            : "")
                          : "";
                        setFormData({
                          order_number: order.order_number || order.orderNumber || "",
                          product_name: productName,
                          product_id: productId,
                          quantity: firstItem?.quantity?.toString() || "",
                          unit: "Adet",
                          customer_id: order.customer_id || order.customerId || "",
                          customer_name: order.customer_name || order.customerName || "",
                          due_date: dueDate,
                          priority: order.priority?.toString() || "0",
                          status: order.status || "planned",
                          notes: order.notes || "",
                          shipping_address: order.delivery_address || order.shippingAddress || order.shipping_address || "",
                          shipping_notes: order.delivery_notes || order.shippingNotes || order.shipping_notes || "",
                          total_amount: (order.total_amount || order.totalAmount || 0).toString(),
                          paid_amount: (order.paidAmount || 0).toString(),
                          payment_status: (order.paymentStatus || "unpaid") as "paid" | "unpaid" | "partially_paid",
                          payment_method: order.paymentMethod || "",
                          has_maturity: !!order.hasMaturity,
                          maturity_months: (order.maturityMonths || 0).toString(),
                          maturity_date: order.maturityDate ? (resolveDateValue(order.maturityDate)?.toISOString().split("T")[0] || "") : "",
                          invoice_status: (order.invoiceStatus || "not_invoiced") as "invoiced" | "not_invoiced",
                          invoice_url: order.invoiceUrl || "",
                        });
                      }
                    }}
                    disabled={saving}
                    className="h-9 px-4"
                  >
                    <X className="h-4 w-4 mr-2" />
                    İptal
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = document.getElementById("production-order-edit-form") as HTMLFormElement;
                      if (form) {
                        form.requestSubmit();
                      } else {
                        handleSubmit(e);
                      }
                    }}
                    disabled={saving}
                    className="h-9 px-4"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Kaydediliyor...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Kaydet
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden bg-gray-50/50 p-4 sm:p-6 min-h-0">
          <div className="max-w-full mx-auto h-full app-dialog-scroll">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : isEditing ? (
              <form id="production-order-edit-form" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[14px] sm:text-[15px] font-semibold">Üretim Bilgileri</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="order_number" showRequired className="text-[11px] sm:text-xs">Üretim No</Label>
                        <Input
                          id="order_number"
                          value={formData.order_number}
                          onChange={(e) => setFormData({ ...formData, order_number: e.target.value })}
                          required
                          className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="status" className="text-[11px] sm:text-xs">Durum</Label>
                        <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                          <SelectTrigger className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="text-[11px] sm:text-xs">
                            {(() => {
                              const currentStatus = order?.status || "planned";
                              const validTransitions = getValidStatusTransitions(currentStatus);
                              const statusLabels: Record<string, string> = {
                                planned: "Planlanan",
                                box_production: "Kutu Üretimi",
                                component_production: "Komponent Üretimi",
                                assembly: "Birleştirme",
                                completed: "Tamamlandı",
                                cancelled: "İptal Edildi",
                              };

                              // Mevcut durumu da göster
                              const allOptions = [...new Set([currentStatus, ...validTransitions])];

                              return allOptions.map((status) => (
                                <SelectItem key={status} value={status} className="text-[11px] sm:text-xs">
                                  {statusLabels[status] || status}
                                </SelectItem>
                              ));
                            })()}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer_name" className="text-[11px] sm:text-xs">Müşteri Adı</Label>
                      <Input
                        id="customer_name"
                        value={formData.customer_name}
                        onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                        className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product_name" showRequired className="text-[11px] sm:text-xs">Ürün Adı</Label>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Select
                          value={formData.product_id || "none"}
                          onValueChange={handleProductSelect}
                          disabled={productsLoading}
                        >
                          <SelectTrigger className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0">
                            <SelectValue placeholder={productsLoading ? "Ürünler yükleniyor..." : "Ürün seçin (Opsiyonel)"} />
                          </SelectTrigger>
                          <SelectContent className="text-[11px] sm:text-xs">
                            <SelectItem value="none" className="text-[11px] sm:text-xs">Ürün seçmeden devam et</SelectItem>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id} className="text-[11px] sm:text-xs">
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {productsLoading && (
                          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" /> Ürünler yükleniyor...
                          </div>
                        )}
                        <Input
                          id="product_name"
                          placeholder="Ürün adı girin (dropdown'dan seçebilir veya elle yazabilirsiniz)"
                          value={formData.product_name}
                          onChange={(e) => handleProductNameChange(e.target.value)}
                          required
                          className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                        />
                        {formData.product_id && (
                          <p className="text-[11px] sm:text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Dropdown'dan seçili ürün: {products.find(p => p.id === formData.product_id)?.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="quantity" showRequired className="text-[11px] sm:text-xs">Miktar</Label>
                        <Input
                          id="quantity"
                          type="number"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          required
                          className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="unit" className="text-[11px] sm:text-xs">Birim</Label>
                        <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                          <SelectTrigger className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="text-[11px] sm:text-xs">
                            <SelectItem value="Adet" className="text-[11px] sm:text-xs">Adet</SelectItem>
                            <SelectItem value="Kg" className="text-[11px] sm:text-xs">Kg</SelectItem>
                            <SelectItem value="Lt" className="text-[11px] sm:text-xs">Lt</SelectItem>
                            <SelectItem value="Mt" className="text-[11px] sm:text-xs">Mt</SelectItem>
                            <SelectItem value="M2" className="text-[11px] sm:text-xs">M²</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="due_date" showRequired className="text-[11px] sm:text-xs">Termin Tarihi</Label>
                        <Input
                          id="due_date"
                          type="date"
                          value={formData.due_date}
                          onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                          required
                          className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="priority" className="text-[11px] sm:text-xs">Öncelik</Label>
                        <Select
                          value={formData.priority?.toString() || "0"}
                          onValueChange={(value) => setFormData({ ...formData, priority: value })}
                        >
                          <SelectTrigger className="h-10 sm:h-10 text-[11px] sm:text-xs min-h-[44px] sm:min-h-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {PRIORITY_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value.toString()}>
                                {option.label} ({option.value})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-[11px] sm:text-xs">Notlar</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="text-[11px] sm:text-xs min-h-[80px] sm:min-h-0"
                        placeholder="Üretim ile ilgili notlar..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[11px] sm:text-xs">Teslimat Bilgileri</Label>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="shipping_address" className="text-[11px] sm:text-xs text-muted-foreground">Teslimat Adresi</Label>
                          <Input
                            id="shipping_address"
                            value={formData.shipping_address}
                            onChange={(e) => setFormData({ ...formData, shipping_address: e.target.value })}
                            className="text-[11px] sm:text-xs h-10 sm:h-10 min-h-[44px] sm:min-h-0"
                            placeholder="Teslimat adresi..."
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="shipping_notes" className="text-[11px] sm:text-xs text-muted-foreground">Teslimat Notları</Label>
                          <Textarea
                            id="shipping_notes"
                            value={formData.shipping_notes}
                            onChange={(e) => setFormData({ ...formData, shipping_notes: e.target.value })}
                            rows={2}
                            className="text-[11px] sm:text-xs min-h-[60px] sm:min-h-0"
                            placeholder="Teslimat ile ilgili notlar..."
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </form>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {/* Highlight Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  <Card className="bg-gradient-to-br from-blue-50/50 via-white to-white border-blue-100/50 shadow-sm">
                    <CardHeader className="p-2 sm:p-3 pb-1">
                      <CardTitle className="text-[10px] sm:text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                        <Package className="h-3 w-3" />
                        Ürün
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-3 pt-0">
                      <p className="text-[12px] sm:text-[13px] font-semibold text-foreground truncate">
                        {firstItem?.productName || "-"}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">
                        {firstItem?.quantity || 0} Adet
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-indigo-50/50 via-white to-white border-indigo-100/50 shadow-sm">
                    <CardHeader className="p-2 sm:p-3 pb-1">
                      <CardTitle className="text-[10px] sm:text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                        <User className="h-3 w-3" />
                        Müşteri
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-3 pt-0">
                      <p className="text-[12px] sm:text-[13px] font-semibold text-foreground truncate">
                        {order.customer_name || order.customerName || "Belirtilmemiş"}
                      </p>
                      {order.customer_company && (
                        <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5 truncate">
                          {order.customer_company}
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-slate-50/50 via-white to-white border-slate-100/50 shadow-sm">
                    <CardHeader className="p-2 sm:p-3 pb-1">
                      <CardTitle className="text-[10px] sm:text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        Termin
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-3 pt-0">
                      <p className="text-[12px] sm:text-[13px] font-semibold text-foreground">
                        {formatDateSafe(dueDateValue as Date | string | Timestamp | null)}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-emerald-50/50 via-white to-white border-emerald-100/50 shadow-sm">
                    <CardHeader className="p-2 sm:p-3 pb-1">
                      <CardTitle className="text-[10px] sm:text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        Öncelik
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 sm:p-3 pt-0">
                      <p className="text-[12px] sm:text-[13px] font-semibold text-foreground">
                        {order.priority || 0} / 5
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Status Timeline */}
                <Card>
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <CardTitle className="text-base sm:text-lg font-semibold">Üretim Durumu</CardTitle>
                        <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                          {getNextStatus()
                            ? `${getStatusLabel(currentStatus)} aşamasındasınız. Sıradaki adım: ${getNextStatus()!.label}`
                            : currentStatus === "on_hold"
                              ? "Beklemede."
                              : currentStatus === "completed"
                                ? "Tamamlandı."
                                : "Workflow tamamlandı."}
                        </p>
                      </div>
                      <div className="text-[11px] sm:text-xs text-muted-foreground text-right">
                        Son güncelleyen: {order?.statusUpdatedBy
                          ? (usersMap[order.statusUpdatedBy] || order.statusUpdatedBy)
                          : (user?.fullName || "-")}
                        <br />
                        <span className="text-[11px] sm:text-xs">
                          {order?.statusUpdatedAt ? formatDateSafe(order.statusUpdatedAt as Timestamp | Date | string | null) : ""}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Status Timeline */}
                      <div className="flex items-center justify-between overflow-x-auto overflow-y-visible pt-2 pb-4">
                        {productionStatusWorkflow.map((statusItem, index) => {
                          const Icon = statusItem.icon;
                          const currentIndex = getCurrentStatusIndex();
                          const isActive = index === currentIndex;
                          const isCompleted = index < currentIndex;
                          const isClickable = canUpdateStatus && (isCompleted || isActive) && statusItem.value !== "on_hold";

                          return (
                            <div key={statusItem.value} className="flex items-center flex-1 min-w-0">
                              <div className="flex flex-col items-center flex-1 min-w-0">
                                <Tooltip delayDuration={150}>
                                  <TooltipTrigger asChild>
                                    <div
                                      className={`
                                        w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all relative z-10
                                        ${isActive ? "bg-primary text-primary-foreground border-primary scale-110" : ""}
                                        ${isCompleted ? "bg-green-500 text-white border-green-500" : ""}
                                        ${!isActive && !isCompleted ? "bg-muted border-muted-foreground/20" : ""}
                                        ${isClickable ? "cursor-pointer hover:scale-105" : ""}
                                      `}
                                      onClick={() => {
                                        if (isClickable && index < currentIndex) {
                                          handleRevertStatus(statusItem.value);
                                        }
                                      }}
                                    >
                                      <Icon className={`h-5 w-5 ${isActive || isCompleted ? "text-white" : statusItem.color}`} />
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    {isClickable && index < currentIndex
                                      ? `${statusItem.label} durumuna geri dönmek için tıklayın`
                                      : statusItem.label}
                                  </TooltipContent>
                                </Tooltip>
                                <p className={`text-[11px] sm:text-xs mt-2 text-center font-medium ${isActive ? "text-primary" : isCompleted ? "text-green-600" : "text-muted-foreground"}`}>
                                  {statusItem.label}
                                </p>
                              </div>
                              {index < productionStatusWorkflow.length - 1 && (
                                <div className={`flex-1 h-0.5 mx-2 ${isCompleted ? "bg-green-500" : "bg-muted"}`} />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Next Status Button */}
                      {getNextStatus() && currentStatus !== "on_hold" && (
                        <div className="flex justify-center pt-4 border-t">
                          <Button
                            onClick={() => handleStatusChange(getNextStatus()!.value)}
                            disabled={updatingStatus || !canUpdateStatus}
                            className="text-[11px] sm:text-xs gap-2 h-10 sm:h-10 min-h-[44px] sm:min-h-0 w-full sm:w-auto"
                          >
                            {updatingStatus ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                Güncelleniyor...
                              </>
                            ) : (
                              <>
                                {(() => {
                                  const NextIcon = getNextStatus()!.icon;
                                  return <NextIcon className="h-4 w-4" />;
                                })()}
                                İlerle
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Üretim Kalemleri (Eklemler) */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      Üretim Kalemleri ({orderItems.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {orderItems.map((item: any, idx) => (
                        <div key={item.id || idx} className="flex items-center justify-between p-3 rounded-lg border bg-white shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                              <Package className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-medium">{item.productName || "Bilinmeyen Ürün"}</p>
                              <p className="text-[11px] sm:text-xs text-muted-foreground">{item.quantity} {item.unit || "Adet"}</p>
                            </div>
                          </div>
                          {item.notes && (
                            <p className="text-[10px] sm:text-[11px] text-muted-foreground italic px-3 border-l ml-3 flex-1">
                              {item.notes}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
                  {/* Müşteri Bilgileri */}
                  <Card>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Müşteri Bilgileri</CardTitle>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">
                        İletişim detayları
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-[11px] sm:text-xs font-medium">{customer?.name || order?.customerName || order?.customer_name || "-"}</span>
                        </div>
                        {(customer?.company || order?.customerCompany || order?.customer_company) && (
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-[11px] sm:text-xs">{customer?.company || order?.customerCompany || order?.customer_company}</span>
                          </div>
                        )}
                        {(customer?.phone || order?.customerPhone || order?.customer_phone) && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-[11px] sm:text-xs">{formatPhoneForDisplay(customer?.phone || order?.customerPhone || order?.customer_phone)}</span>
                          </div>
                        )}
                        {(customer?.email || order?.customerEmail || order?.customer_email) && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-[11px] sm:text-xs">{customer?.email || order?.customerEmail || order?.customer_email}</span>
                          </div>
                        )}
                      </div>

                      {(customer?.phone || customer?.email || order?.customerPhone || order?.customerEmail) && (
                        <div className="flex flex-wrap gap-3 pt-1">
                          {(customer?.phone || order?.customerPhone || order?.customer_phone) && (
                            <Button variant="outline" size="sm" asChild className="text-[11px] sm:text-xs h-10 sm:h-8 min-h-[44px] sm:min-h-0 w-full sm:w-auto">
                              <a href={`tel:${formatPhoneForTelLink(customer?.phone || order?.customerPhone || order?.customer_phone)}`}>
                                Ara
                              </a>
                            </Button>
                          )}
                          {(customer?.email || order?.customerEmail || order?.customer_email) && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-[11px] sm:text-xs h-10 sm:h-8 min-h-[44px] sm:min-h-0 w-full sm:w-auto"
                              onClick={() => {
                                const email = customer?.email || order?.customerEmail || order?.customer_email;
                                if (email) {
                                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank');
                                }
                              }}
                            >
                              E-posta Gönder
                            </Button>
                          )}
                        </div>
                      )}

                      {(shippingAddress || shippingNotes) && (
                        <div className="space-y-2 rounded-lg border bg-muted/40 p-3 mt-3">
                          <p className="text-[11px] sm:text-xs font-medium text-muted-foreground flex items-center gap-2">
                            <Truck className="h-4 w-4" />
                            Teslimat Bilgileri
                          </p>
                          {shippingAddress && (
                            <p className="text-[11px] sm:text-xs">{shippingAddress}</p>
                          )}
                          {shippingNotes && (
                            <p className="text-[11px] sm:text-xs text-muted-foreground">{shippingNotes}</p>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Sipariş Bilgileri */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl font-semibold">Üretim Bilgileri</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {orderSummaryRows.map((row) => (
                          <div key={row.label} className="rounded-lg border bg-muted/30 px-3 py-2">
                            <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wide">{row.label}</p>
                            <p className="text-[11px] sm:text-xs font-medium mt-1">{row.value || "-"}</p>
                          </div>
                        ))}
                      </div>
                      {order?.notes && (
                        <div className="rounded-lg border bg-muted/20 p-3">
                          <p className="text-[11px] sm:text-xs text-muted-foreground mb-1 flex items-center gap-2">
                            <CircleDot className="h-4 w-4" />
                            İç Not
                          </p>
                          <p className="text-[11px] sm:text-xs leading-relaxed">{order.notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Bağlı Görevler */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                        <ListChecks className="h-4 w-4 sm:h-5 sm:w-5" />
                        Bağlı Görevler ({tasks.length})
                      </CardTitle>
                      <Button variant="outline" size="sm" onClick={fetchOrderTasks} disabled={tasksLoading} className="text-[11px] sm:text-xs h-10 sm:h-8 min-h-[44px] sm:min-h-0 w-full sm:w-auto">
                        Yenile
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tasksLoading && (
                        <p className="text-[11px] sm:text-xs text-muted-foreground">Görevler yükleniyor...</p>
                      )}
                      {!tasksLoading && tasks.length === 0 && (
                        <p className="text-[11px] sm:text-xs text-muted-foreground">Bu üretime bağlı görev bulunmuyor.</p>
                      )}
                      {!tasksLoading &&
                        tasks.map((task) => {
                          const taskDueDate = resolveDateValue(task.dueDate);
                          return (
                            <div key={task.id} className="p-3 rounded-md border border-border bg-muted/30">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-[11px] sm:text-xs font-semibold text-foreground">{task.title || "-"}</p>
                                  {taskDueDate && (
                                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                                      Termin: {formatDateSafe(taskDueDate as Date | string | Timestamp | null)}
                                    </p>
                                  )}
                                </div>
                                <Badge variant={task.status === "completed" ? "default" : "secondary"} className="text-[10px]">
                                  {task.status || "-"}
                                </Badge>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Activity Comments Panel */}
        {order?.id && user && (
          <ActivityCommentsPanel
            entityId={order.id}
            entityType="order"
            onAddComment={async (content: string) => {
              await addOrderComment(
                order.id,
                user.id,
                content,
                user.fullName || user.email?.split("@")[0] || "Kullanıcı",
                user.email || ""
              );
            }}
            onGetComments={async () => {
              return await getOrderComments(order.id);
            }}
            onGetActivities={async () => {
              return await getOrderActivities(order.id);
            }}
            currentUserId={user.id}
            currentUserName={user.fullName || user.email?.split("@")[0] || "Kullanıcı"}
            currentUserEmail={user.email || ""}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
