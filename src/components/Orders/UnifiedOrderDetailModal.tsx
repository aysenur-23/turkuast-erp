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
    FileDown,
    FileUp,
    CreditCard,
    Receipt,
    Wallet,
    Banknote,
    PackageCheck,
    XCircle,
    MessageSquare,
    Coins,
    ArrowRightLeft,
    Activity,
    Layers,
    Factory,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import {
    updateOrder,
    getOrderItems,
    updateOrderItem,
    addOrderComment,
    getOrderComments,
    getOrderActivities,
    approveOrderCompletion,
    rejectOrderCompletion,
    requestOrderCompletion,
    addOrderPayment,
    getOrderPayments,
    Order,
    OrderItem,
    Payment
} from "@/services/firebase/orderService";
import { getCustomerById, Customer } from "@/services/firebase/customerService";
import { formatPhoneForDisplay, formatPhoneForTelLink } from "@/utils/phoneNormalizer";
import { useAuth } from "@/contexts/AuthContext";
import { canUpdateResource, canDeleteResource } from "@/utils/permissions";
import { getAllUsers, UserProfile } from "@/services/firebase/authService";
import { getProducts, Product } from "@/services/firebase/productService";
import { Timestamp } from "firebase/firestore";
import { ActivityCommentsPanel } from "@/components/shared/ActivityCommentsPanel";
import { PRIORITY_OPTIONS } from "@/utils/priority";
import { uploadFile } from "@/services/firebase/storageService";
import { uploadFileToDrive } from "@/services/driveService";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CURRENCY_SYMBOLS, Currency } from "@/utils/currency";

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
    const date = resolveDateValue(dateInput);
    if (!date) return "-";

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

const formatCurrency = (value?: number | null, currency?: Currency | string) => {
    const numericValue = typeof value === "number" ? value : Number(value) || 0;
    const orderCurrency = (currency || "TRY") as Currency;
    const currencyCode = orderCurrency === "TRY" ? "TRY" : orderCurrency;
    const locale = orderCurrency === "TRY" ? "tr-TR" : "en-US";
    const symbol = CURRENCY_SYMBOLS[orderCurrency] || "₺";

    try {
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currencyCode,
            minimumFractionDigits: 2,
        }).format(numericValue);
    } catch {
        return `${symbol}${numericValue.toFixed(2)}`;
    }
};

type StatusItem = {
    value: string;
    label: string;
    icon: LucideIcon;
    color: string;
};

// Unified Status Workflow - Üretim odaklı akış
const unifiedStatusWorkflow: StatusItem[] = [
    { value: "draft", label: "Taslak", icon: ClipboardList, color: "text-muted-foreground" },
    { value: "confirmed", label: "Onaylandı", icon: CheckCircle2, color: "text-emerald-500" },
    { value: "planned", label: "Planlandı", icon: Calendar, color: "text-blue-500" },
    { value: "box_production", label: "Kutu Üretimi", icon: Package, color: "text-orange-500" },
    { value: "component_production", label: "Komponent Üretimi", icon: Factory, color: "text-amber-500" },
    { value: "assembly", label: "Birleştirme", icon: Layers, color: "text-blue-600" },
    { value: "completed", label: "Tamamlandı", icon: Check, color: "text-emerald-600" },
];

// Üretim siparişi olmayanlar için workflow (üretim aşamaları hariç)
const nonProductionWorkflow: StatusItem[] = [
    { value: "draft", label: "Taslak", icon: ClipboardList, color: "text-muted-foreground" },
    { value: "confirmed", label: "Onaylandı", icon: CheckCircle2, color: "text-emerald-500" },
    { value: "planned", label: "Planlandı", icon: Calendar, color: "text-blue-500" },
    { value: "completed", label: "Tamamlandı", icon: Check, color: "text-emerald-600" },
    { value: "shipped", label: "Kargoda", icon: Truck, color: "text-sky-500" },
    { value: "delivered", label: "Teslim Edildi", icon: PackageCheck, color: "text-primary" },
];

const normalizeStatusValue = (status?: string) => {
    if (!status) return "pending";
    // column_ prefix'ini kaldır
    let normalized = status;
    if (normalized.startsWith("column_")) {
        normalized = normalized.replace("column_", "");
    }
    // Sayısal ise pending'e düş
    if (/^\d+$/.test(normalized)) {
        return "pending";
    }
    if (normalized === "in_progress") return "in_production";
    return normalized;
};

interface UnifiedOrderDetailModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    order: Order;
    onEdit?: () => void;
    onDelete?: () => void;
    onUpdate?: () => void;
}

export const UnifiedOrderDetailModal = ({
    open,
    onOpenChange,
    order,
    onEdit,
    onDelete,
    onUpdate
}: UnifiedOrderDetailModalProps) => {
    const { user, isAdmin, isTeamLeader } = useAuth();
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [updatingStatus, setUpdatingStatus] = useState(false);
    const [currentStatus, setCurrentStatus] = useState<string>(normalizeStatusValue(order?.status));
    const [approvalStatus, setApprovalStatus] = useState<string | undefined>(order?.approvalStatus);
    const [usersMap, setUsersMap] = useState<Record<string, string>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
    const [canUpdate, setCanUpdate] = useState(false);
    const [canDeleteState, setCanDeleteState] = useState(false);
    const [canApprove, setCanApprove] = useState(false);
    const [payments, setPayments] = useState<Payment[]>([]);
    const [fetchingPayments, setFetchingPayments] = useState(false);
    const [showAddPayment, setShowAddPayment] = useState(true);
    const [newPayment, setNewPayment] = useState({
        amount: 0,
        method: "bank_transfer",
        notes: "",
        date: new Date().toISOString().split("T")[0]
    });

    // Form State
    const [formData, setFormData] = useState({
        orderNumber: "",
        customerId: "",
        customerName: "",
        dueDate: "",
        priority: 0,
        status: "pending" as Order["status"],
        notes: "",
        deliveryAddress: "",
        deliveryNotes: "",
        trackingNumber: "",
        price: 0,
        paidAmount: 0,
        totalAmount: 0, // Fallback for UI
        paymentStatus: "unpaid" as Order["paymentStatus"],
        paymentMethod: "",
        hasMaturity: false,
        maturityMonths: 0,
        maturityDate: "",
        invoiceStatus: "not_invoiced" as Order["invoiceStatus"],
        invoiceUrl: "",
        currency: "TRY",
        taxRate: 20,
    });

    const isPersonnel = Boolean(user?.roles?.includes("personnel"));
    const isCreator = user?.id === order?.createdBy;
    
    // Üretim siparişi kontrolü - PROD- ile başlayan siparişler üretim siparişidir
    const isProductionOrder = order?.orderNumber?.startsWith("PROD-") || order?.order_number?.startsWith("PROD-");
    
    // Sipariş tipine göre doğru workflow'u seç
    const currentWorkflow = isProductionOrder ? unifiedStatusWorkflow : nonProductionWorkflow;

    // Initialize form when order changes
    useEffect(() => {
        if (order && !isEditing) {
            const maturityDateVal = resolveDateValue(order.maturityDate);
            const dueDateVal = resolveDateValue(order.dueDate || order.due_date);

            setFormData({
                orderNumber: order.orderNumber || order.order_number || "",
                customerId: order.customerId || order.customer_id || "",
                customerName: order.customerName || order.customer_name || "",
                dueDate: dueDateVal ? dueDateVal.toISOString().split("T")[0] : "",
                priority: order.priority || 0,
                status: order.status || "pending",
                notes: order.notes || "",
                deliveryAddress: order.deliveryAddress || order.delivery_address || order.shippingAddress || order.shipping_address || "",
                deliveryNotes: order.deliveryNotes || order.delivery_notes || order.shippingNotes || order.shipping_notes || "",
                trackingNumber: order.trackingNumber || order.tracking_number || "",
                price: order.price || order.totalAmount || order.total_amount || 0,
                totalAmount: order.totalAmount || order.total_amount || 0,
                paidAmount: order.paidAmount || 0,
                paymentStatus: order.paymentStatus || "unpaid",
                paymentMethod: order.paymentMethod || "bank_transfer",
                hasMaturity: !!order.hasMaturity,
                maturityMonths: order.maturityMonths || 0,
                maturityDate: maturityDateVal ? maturityDateVal.toISOString().split("T")[0] : "",
                invoiceStatus: order.invoiceStatus || "not_invoiced",
                invoiceUrl: order.invoiceUrl || "",
                currency: order.currency || "TRY",
                taxRate: order.taxRate || order.tax_rate || 20,
            });
            setCurrentStatus(normalizeStatusValue(order.status));
            setApprovalStatus(order.approvalStatus);
        }
    }, [order, open, isEditing]);

    // Permissions & Data Fetching
    useEffect(() => {
        const fetchData = async () => {
            if (!open || !order?.id) return;
            setLoading(true);
            try {
                const [items, users, fetchedProducts] = await Promise.all([
                    getOrderItems(order.id),
                    getAllUsers(),
                    getProducts(),
                ]);

                setOrderItems(items);
                setProducts(fetchedProducts);

                const uMap: Record<string, string> = {};
                users.forEach(u => uMap[u.id] = u.fullName || u.displayName || u.email || "-");
                setUsersMap(uMap);

                const custId = order.customerId || order.customer_id;
                if (custId) {
                    const custData = await getCustomerById(custId);
                    setCustomer(custData);
                }

                // Fetch payments
                setFetchingPayments(true);
                try {
                    const fetchedPayments = await getOrderPayments(order.id);
                    setPayments(fetchedPayments);
                } catch (err) {
                    console.error("Failed to fetch payments:", err);
                } finally {
                    setFetchingPayments(false);
                }

                // Permission check
                if (user) {
                    const userProfile: UserProfile = {
                        id: user.id,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        fullName: user.fullName,
                        displayName: user.fullName || "",
                        phone: null,
                        dateOfBirth: null,
                        role: user.roles || [],
                        createdAt: null,
                        updatedAt: null,
                    };
                    const [updateAllowed, deleteAllowed] = await Promise.all([
                        canUpdateResource(userProfile, "orders"),
                        canDeleteResource(userProfile, "orders"),
                    ]);
                    setCanUpdate(updateAllowed || isAdmin || isTeamLeader);
                    setCanDeleteState(deleteAllowed || isAdmin || isTeamLeader);
                    setCanApprove(updateAllowed || isAdmin || isTeamLeader || user.id === order.createdBy);
                }
            } catch (err) {
                console.error("Fetch Data Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [open, order?.id, user, isAdmin, isTeamLeader]);

    const getCurrentStatusIndex = () => {
        const index = currentWorkflow.findIndex(s => s.value === currentStatus);
        return index >= 0 ? index : 1; // Default to pending
    };

    const canUpdateStatus = isAdmin || isTeamLeader || isCreator;

    const remainingAmount = Math.max(formData.price - formData.paidAmount, 0);

    const handleStatusChange = async (nextStatus: string) => {
        if (!order?.id || !user?.id) return;
        setUpdatingStatus(true);
        try {
            if (nextStatus === "completed" && !isAdmin && !isTeamLeader && !isCreator) {
                await requestOrderCompletion(order.id, user.id);
                setApprovalStatus("pending");
                toast.success("Sipariş tamamlanma onayı için yöneticiye gönderildi.");
            } else {
                const updates: Partial<Order> = { status: nextStatus as Order["status"] };
                if (nextStatus === "completed") updates.approvalStatus = "approved";

                await updateOrder(order.id, updates, user.id, isAdmin || isTeamLeader);
                setCurrentStatus(nextStatus);
                if (nextStatus === "completed") setApprovalStatus("approved");
                toast.success(`Durum ${nextStatus} olarak güncellendi.`);
            }
        } catch (err: any) {
            toast.error("Durum güncellenemedi: " + err.message);
        } finally {
            setUpdatingStatus(false);
        }
    };

    const handleApproval = async (approve: boolean) => {
        if (!user || !order?.id) return;
        setSaving(true);
        try {
            if (approve) {
                await approveOrderCompletion(order.id, user.id);
                setCurrentStatus("completed");
                setApprovalStatus("approved");
                toast.success("Sipariş onaylandı.");
            } else {
                await rejectOrderCompletion(order.id, user.id);
                setCurrentStatus("in_production");
                setApprovalStatus("rejected");
                toast.success("Sipariş reddedildi.");
            }
        } catch (err: any) {
            toast.error("İşlem başarısız: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleAddPayment = async () => {
        if (!user || newPayment.amount <= 0 || !order?.id) return;
        setSaving(true);
        try {
            await addOrderPayment(
                order.id,
                {
                    amount: newPayment.amount,
                    currency: formData.currency || "TRY",
                    method: newPayment.method,
                    date: newPayment.date,
                    notes: newPayment.notes,
                    createdBy: user.id
                },
                user.id
            );

            // Refresh payments and order
            const updatedPayments = await getOrderPayments(order.id);
            setPayments(updatedPayments);

            // Reset form
            setNewPayment({
                amount: 0,
                method: "bank_transfer",
                notes: "",
                date: new Date().toISOString().split("T")[0]
            });
            setShowAddPayment(false);
            onUpdate?.();
            toast.success("Ödeme başarıyla eklendi");
        } catch (err: any) {
            toast.error("Ödeme eklenirken hata: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDirectUpdate = async (updates: Partial<Order>) => {
        if (!order?.id || !user?.id) return;
        setSaving(true);
        try {
            await updateOrder(order.id, updates, user.id, isAdmin || isTeamLeader);
            // Convert potential Timestamp fields in updates to string for formData compat
            const processedUpdates: any = { ...updates };
            if (updates.dueDate) {
                const d = resolveDateValue(updates.dueDate);
                if (d) processedUpdates.dueDate = d.toISOString().split("T")[0];
            }
            if (updates.maturityDate) {
                const d = resolveDateValue(updates.maturityDate);
                if (d) processedUpdates.maturityDate = d.toISOString().split("T")[0];
            }

            setFormData(prev => ({ ...prev, ...processedUpdates }));
            toast.success("Hızlı güncelleme başarılı");
            onUpdate?.();
        } catch (err: any) {
            toast.error("Güncelleme hatası: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();
        if (!order?.id || !user?.id) return;
        setSaving(true);
        try {
            const updates: Partial<Order> = {
                orderNumber: formData.orderNumber,
                order_number: formData.orderNumber,
                dueDate: formData.dueDate ? Timestamp.fromDate(new Date(formData.dueDate)) : null,
                due_date: formData.dueDate || null,
                priority: formData.priority,
                notes: formData.notes,
                deliveryAddress: formData.deliveryAddress,
                delivery_address: formData.deliveryAddress,
                deliveryNotes: formData.deliveryNotes,
                delivery_notes: formData.deliveryNotes,
                trackingNumber: formData.trackingNumber,
                tracking_number: formData.trackingNumber,
                price: formData.price,
                totalAmount: formData.price,
                total_amount: formData.price,
                paidAmount: formData.paidAmount,
                paymentStatus: formData.paymentStatus,
                paymentMethod: formData.paymentMethod,
                hasMaturity: formData.hasMaturity,
                maturityMonths: formData.maturityMonths,
                maturityDate: formData.maturityDate ? Timestamp.fromDate(new Date(formData.maturityDate)) : null,
                invoiceStatus: formData.invoiceStatus,
                invoiceUrl: formData.invoiceUrl,
            };

            await updateOrder(order.id, updates, user.id, true);
            toast.success("Sipariş güncellendi.");
            setIsEditing(false);
            onUpdate?.();
        } catch (err: any) {
            toast.error("Kaydetme hatası: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleInvoiceUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !order?.id) return;
        if (file.size > 10 * 1024 * 1024) {
            toast.error("Dosya 10MB'dan küçük olmalı.");
            return;
        }
        setSaving(true);
        try {
            // Önce Drive'a yüklemeyi dene, fallback olarak Firebase Storage
            let url = "";
            try {
                const driveResult = await uploadFileToDrive(file, {
                    fileName: `Invoice_${formData.orderNumber}_${Date.now()}`,
                });
                url = driveResult.webViewLink || driveResult.fileId;
            } catch (driveErr) {
                console.warn("Drive upload failed, using Firebase Storage:", driveErr);
                const path = `invoices/${order.id}/${Date.now()}_${file.name}`;
                url = await uploadFile(file, path);
            }
            setFormData(prev => ({ ...prev, invoiceUrl: url, invoiceStatus: "invoiced" }));
            toast.success("Fatura yüklendi.");
        } catch (err: any) {
            toast.error("Yükleme hatası: " + err.message);
        } finally {
            setSaving(false);
        }
    };

    const getStatusVariant = (status: string) => {
        const s = normalizeStatusValue(status);
        if (s === "completed" || s === "delivered") return "default";
        if (s === "cancelled") return "destructive";
        if (s === "shipped") return "secondary";
        return "outline";
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="app-dialog-shell max-w-5xl">
                {/* Erişilebilirlik için DialogTitle ve DialogDescription DialogContent'in direkt child'ı olmalı */}
                <DialogTitle className="sr-only">
                    {isProductionOrder ? "Üretim" : "Sipariş"} {formData.orderNumber}
                </DialogTitle>
                <DialogDescription className="sr-only">
                    {isProductionOrder ? "Üretim bilgileri ve süreç takibi." : "Sipariş bilgileri, ürünler ve finansal takip."}
                </DialogDescription>

                <DialogHeader className="p-3 sm:p-4 border-b bg-white flex-shrink-0 relative">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                {isProductionOrder ? <Package className="h-5 w-5 text-primary" /> : <ShoppingCart className="h-5 w-5 text-primary" />}
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                                    {isProductionOrder ? "Üretim" : "Sipariş"} {formData.orderNumber}
                                </h2>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant={getStatusVariant(currentStatus)} className="text-[10px] px-2 py-0.5">
                                        {currentWorkflow.find(s => s.value === currentStatus)?.label || currentStatus}
                                    </Badge>
                                    {approvalStatus === "pending" && (
                                        <Badge variant="outline" className="text-[10px] border-amber-500 text-amber-600 bg-amber-50">
                                            Onay Bekliyor
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            {!isEditing ? (
                                <>
                                    {(canUpdate || isCreator) && (
                                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="flex-1 md:flex-none h-9">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Düzenle
                                        </Button>
                                    )}
                                    {canDeleteState && onDelete && (
                                        <Button variant="outline" size="sm" onClick={onDelete} className="flex-1 md:flex-none h-9 text-destructive hover:text-destructive">
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Sil
                                        </Button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" size="sm" onClick={() => setIsEditing(false)} disabled={saving} className="flex-1 md:flex-none h-9">
                                        İptal
                                    </Button>
                                    <Button size="sm" onClick={handleSave} disabled={saving} className="flex-1 md:flex-none h-9">
                                        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                                        Kaydet
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-hidden bg-slate-50/30 p-2 sm:p-4 min-h-0">
                    <div className="max-w-full mx-auto h-full app-dialog-scroll space-y-4">
                        {/* Financial Summary Header - Only for non-production orders */}
                        {!isProductionOrder && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
                                <CardContent className="p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Toplam Tutar</p>
                                    <p className="text-lg font-bold text-slate-900">{formatCurrency(formData.price, formData.currency)}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-emerald-50/50 backdrop-blur-sm border-emerald-100">
                                <CardContent className="p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">Ödenen</p>
                                    <p className="text-lg font-bold text-emerald-700">{formatCurrency(formData.paidAmount, formData.currency)}</p>
                                </CardContent>
                            </Card>
                            <Card className={cn(
                                "backdrop-blur-sm border-slate-200",
                                remainingAmount > 0 ? "bg-amber-50/50 border-amber-100" : "bg-slate-50/50"
                            )}>
                                <CardContent className="p-3">
                                    <p className={cn("text-[10px] uppercase tracking-wider font-bold", remainingAmount > 0 ? "text-amber-600" : "text-slate-500")}>Kalan</p>
                                    <p className={cn("text-lg font-bold", remainingAmount > 0 ? "text-amber-700" : "text-slate-900")}>{formatCurrency(remainingAmount, formData.currency)}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
                                <CardContent className="p-3">
                                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Vade</p>
                                    <p className="text-lg font-bold text-slate-900">{formData.hasMaturity ? `${formData.maturityMonths} Ay` : "Yok"}</p>
                                </CardContent>
                            </Card>
                        </div>
                        )}

                        {/* Main Content Area */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                            {/* Left Column: Details & Items */}
                            <div className={cn("space-y-4", isProductionOrder ? "lg:col-span-12" : "lg:col-span-8")}>
                                {/* Status Timeline */}
                                <Card>
                                    <CardHeader className="py-3 px-4 flex flex-row items-center justify-between border-b bg-slate-50/50">
                                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                                            <Activity className="h-4 w-4 text-primary" />
                                            Süreç Takibi
                                        </CardTitle>
                                        <span className="text-[10px] text-slate-500">
                                            Sıradaki: {currentWorkflow[getCurrentStatusIndex() + 1]?.label || "Tamamlandı"}
                                        </span>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="overflow-x-auto pb-4 px-4 sm:px-6 hide-scrollbar">
                                            <div className="flex items-center justify-between relative min-w-[600px] px-4">
                                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                                                {currentWorkflow.map((step, idx) => {
                                                    const currentIndex = getCurrentStatusIndex();
                                                    const isDone = idx < currentIndex;
                                                    const isCurrent = idx === currentIndex;
                                                    const Icon = step.icon;

                                                    return (
                                                        <div key={step.value} className="relative z-10 flex flex-col items-center gap-2">
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <button
                                                                        disabled={!canUpdateStatus || isEditing || updatingStatus}
                                                                        onClick={() => handleStatusChange(step.value)}
                                                                        className={cn(
                                                                            "h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all",
                                                                            isDone ? "bg-emerald-500 border-emerald-500 text-white" :
                                                                                isCurrent ? "bg-primary border-primary text-white scale-125 ring-4 ring-primary/10" :
                                                                                    "bg-white border-slate-200 text-slate-400 hover:border-primary/50"
                                                                        )}
                                                                    >
                                                                        {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                                                                    </button>
                                                                </TooltipTrigger>
                                                                <TooltipContent>{step.label}</TooltipContent>
                                                            </Tooltip>
                                                            <span className={cn(
                                                                "text-[9px] font-bold uppercase",
                                                                isCurrent ? "text-primary" : "text-slate-400"
                                                            )}>
                                                                {step.label}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {canUpdateStatus && getCurrentStatusIndex() < currentWorkflow.length - 1 && (
                                            <div className="mt-6 flex justify-end">
                                                <Button
                                                    size="sm"
                                                    disabled={!canUpdateStatus || isEditing || updatingStatus}
                                                    onClick={() => handleStatusChange(currentWorkflow[getCurrentStatusIndex() + 1].value)}
                                                    className="gap-2 bg-slate-900 text-white hover:bg-slate-800"
                                                >
                                                    Sonraki Adıma Geç
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Info Grid or Editor */}
                                <Card>
                                    <CardHeader className="py-3 px-4 border-b bg-slate-50/50">
                                        <CardTitle className="text-sm font-bold">Genel Bilgiler</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        {isEditing ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Sipariş No</Label>
                                                    <Input value={formData.orderNumber} onChange={e => setFormData(p => ({ ...p, orderNumber: e.target.value }))} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Termin Tarihi</Label>
                                                    <Input type="date" value={formData.dueDate} onChange={e => setFormData(p => ({ ...p, dueDate: e.target.value }))} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Öncelik</Label>
                                                    <Select value={formData.priority.toString()} onValueChange={v => setFormData(p => ({ ...p, priority: Number(v) }))}>
                                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {PRIORITY_OPTIONS.map(o => <SelectItem key={o.value} value={o.value.toString()}>{o.label}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                {!isProductionOrder && (
                                                <div className="space-y-2">
                                                    <Label>Kargo Takip No</Label>
                                                    <Input value={formData.trackingNumber} onChange={e => setFormData(p => ({ ...p, trackingNumber: e.target.value }))} placeholder="Kargo firması / takip no" />
                                                </div>
                                                )}
                                                <div className="md:col-span-2 space-y-2">
                                                    <Label>Durum</Label>
                                                    <Select value={formData.status} onValueChange={v => setFormData(p => ({ ...p, status: v as Order["status"] }))}>
                                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {isProductionOrder ? unifiedStatusWorkflow.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>) : nonProductionWorkflow.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="md:col-span-2 space-y-2">
                                                    <Label>Notlar</Label>
                                                    <Textarea value={formData.notes} onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                <div>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Müşteri</p>
                                                    <p className="text-sm font-semibold">{formData.customerName || "-"}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Termin</p>
                                                    <p className="text-sm font-semibold">{formatDateSafe(formData.dueDate)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Tarih</p>
                                                    <p className="text-sm font-semibold">{formatDateSafe(order.createdAt)}</p>
                                                </div>
                                                <div className="col-span-full">
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Teslimat Adresi</p>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{formData.deliveryAddress || "-"}</p>
                                                </div>
                                                {!isProductionOrder && formData.trackingNumber && (
                                                    <div className="col-span-full bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                                        <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Kargo Takip No</p>
                                                        <p className="text-sm font-bold text-blue-900">{formData.trackingNumber}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Items Table */}
                                <Card>
                                    <CardHeader className="py-3 px-4 border-b bg-slate-50/50">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-sm font-bold">Sipariş Kalemleri</CardTitle>
                                            <Badge variant="secondary" className="text-[10px]">{orderItems.length} Kalem</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-xs">
                                                <thead className="bg-slate-50 border-b text-slate-500 font-bold uppercase">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left">Ürün / Açıklama</th>
                                                        <th className="px-4 py-3 text-center">Miktar</th>
                                                        <th className="px-4 py-3 text-right">Birim Fiyat</th>
                                                        <th className="px-4 py-3 text-right">Toplam</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {orderItems.map((item, id) => (
                                                        <tr key={id} className="hover:bg-slate-50/50">
                                                            <td className="px-4 py-3 font-semibold">{item.productName || item.product_name}</td>
                                                            <td className="px-4 py-3 text-center">{item.quantity} Adet</td>
                                                            <td className="px-4 py-3 text-right font-medium">{formatCurrency(item.unitPrice || item.unit_price, formData.currency)}</td>
                                                            <td className="px-4 py-3 text-right font-bold text-slate-900">{formatCurrency(item.total, formData.currency)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column: Financials & Activity */}
                            <div className="lg:col-span-4 space-y-4">
                                {/* Financial Editor / Display - Only for non-production orders */}
                                {!isProductionOrder && (
                                <Card className="border-primary/20 shadow-sm overflow-hidden">
                                    <CardHeader className="bg-primary/5 py-3 px-4 border-b border-primary/10">
                                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                                            <Banknote className="h-4 w-4 text-primary" />
                                            Finansal Durum
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-white p-4 rounded-xl border-2 border-slate-200 shadow-sm">
                                                <Label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">Toplam Tutar</Label>
                                                <div className="text-xl font-black text-slate-900">
                                                    {(formData.price || formData.totalAmount || 0).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} <span className="text-sm font-semibold text-slate-500">{formData.currency}</span>
                                                </div>
                                            </div>
                                            <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-200 shadow-sm">
                                                <Label className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block mb-1.5">Ödenen</Label>
                                                <div className="text-xl font-black text-emerald-700">
                                                    {(formData.paidAmount || 0).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} <span className="text-sm font-semibold text-emerald-500">{formData.currency}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-xl border-2 border-orange-200 bg-orange-50 shadow-sm">
                                            <div>
                                                <Label className="text-[10px] text-orange-600 font-bold uppercase tracking-wider block mb-1">Kalan Bakiye</Label>
                                                <div className="text-2xl font-black text-orange-700">
                                                    {Math.max(0, (formData.price || formData.totalAmount || 0) - (formData.paidAmount || 0)).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} <span className="text-sm font-semibold text-orange-500">{formData.currency}</span>
                                                </div>
                                            </div>
                                            <Badge className={cn(
                                                "text-sm px-3 py-1.5 font-bold rounded-lg",
                                                formData.paymentStatus === 'paid' ? 'bg-emerald-500 hover:bg-emerald-500' :
                                                    formData.paymentStatus === 'partially_paid' ? 'bg-orange-500 hover:bg-orange-500' : 'bg-slate-400 hover:bg-slate-400'
                                            )}>
                                                {formData.paymentStatus === 'paid' ? 'Ödendi' :
                                                    formData.paymentStatus === 'partially_paid' ? 'Kısmi Ödeme' : 'Ödenmedi'}
                                            </Badge>
                                        </div>

                                        <Separator />

                                        {/* Payment History */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label className="text-sm font-bold text-slate-800">Ödeme Geçmişi</Label>
                                                <button
                                                    type="button"
                                                    className="text-xs font-semibold text-primary hover:text-primary/80 hover:underline transition-colors"
                                                    onClick={() => setShowAddPayment(!showAddPayment)}
                                                >
                                                    {showAddPayment ? "Kapat" : "Ödeme Ekle"}
                                                </button>
                                            </div>

                                            {showAddPayment && (
                                                <div className="p-4 border-2 rounded-xl bg-white space-y-4 anim-fade-in shadow-sm">
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="space-y-1.5">
                                                            <Label className="text-xs font-semibold text-slate-700">Tutar</Label>
                                                            <Input
                                                                type="number"
                                                                value={newPayment.amount}
                                                                onChange={e => setNewPayment(p => ({ ...p, amount: Number(e.target.value) }))}
                                                                className="h-10 text-sm border-2 focus:border-primary"
                                                                placeholder="0"
                                                            />
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <Label className="text-xs font-semibold text-slate-700">Tarih</Label>
                                                            <Input
                                                                type="date"
                                                                value={newPayment.date}
                                                                onChange={e => setNewPayment(p => ({ ...p, date: e.target.value }))}
                                                                className="h-10 text-sm border-2 focus:border-primary"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label className="text-xs font-semibold text-slate-700">Yöntem</Label>
                                                        <Select value={newPayment.method} onValueChange={v => setNewPayment(p => ({ ...p, method: v }))}>
                                                            <SelectTrigger className="h-10 text-sm border-2"><SelectValue /></SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="cash">Nakit</SelectItem>
                                                                <SelectItem value="credit_card">Kredi Kartı</SelectItem>
                                                                <SelectItem value="bank_transfer">Banka Havalesi</SelectItem>
                                                                <SelectItem value="other">Diğer</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label className="text-xs font-semibold text-slate-700">Not (Opsiyonel)</Label>
                                                        <Input
                                                            value={newPayment.notes}
                                                            onChange={e => setNewPayment(p => ({ ...p, notes: e.target.value }))}
                                                            className="h-10 text-sm border-2 focus:border-primary"
                                                            placeholder="Örn: Dekont no..."
                                                        />
                                                    </div>
                                                    <Button
                                                        className="w-full h-10 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 rounded-lg"
                                                        disabled={saving || newPayment.amount <= 0}
                                                        onClick={handleAddPayment}
                                                    >
                                                        {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Ödemeyi Kaydet"}
                                                    </Button>
                                                </div>
                                            )}

                                            <div className="space-y-2">
                                                {fetchingPayments ? (
                                                    <div className="flex justify-center p-4"><Loader2 className="h-4 w-4 animate-spin text-slate-300" /></div>
                                                ) : payments.length === 0 ? (
                                                    <div className="text-center p-6 border-2 border-dashed rounded-lg text-slate-400">
                                                        <Banknote className="h-8 w-8 mx-auto mb-2 opacity-20" />
                                                        <p className="text-[10px]">Henüz ödeme kaydı bulunmuyor.</p>
                                                    </div>
                                                ) : (
                                                    payments.map((payment) => (
                                                        <div key={payment.id} className="flex items-center justify-between p-2 rounded border bg-white text-xs hover:border-primary/30 transition-colors group">
                                                            <div className="flex items-center gap-2">
                                                                <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                                                    {payment.method === 'cash' ? <Coins className="h-3.5 w-3.5" /> :
                                                                        payment.method === 'bank_transfer' ? <ArrowRightLeft className="h-3.5 w-3.5" /> :
                                                                            <CreditCard className="h-3.5 w-3.5" />}
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold text-slate-800">{payment.amount.toLocaleString('tr-TR')} {payment.currency}</div>
                                                                    <div className="text-[9px] text-slate-500 flex items-center gap-1">
                                                                        <span>{formatDateSafe(payment.date)}</span>
                                                                        <span>•</span>
                                                                        <span className="capitalize">{payment.method === 'bank_transfer' ? 'Havale' :
                                                                            payment.method === 'cash' ? 'Nakit' :
                                                                                payment.method === 'credit_card' ? 'Kart' : 'Diğer'}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {payment.notes && (
                                                                <div className="max-w-[100px] truncate text-[9px] text-slate-400 italic" title={payment.notes}>
                                                                    {payment.notes}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Invoice Section */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label className="text-xs font-bold text-slate-700">Fatura Durumu</Label>
                                                <Select
                                                    disabled={saving}
                                                    value={formData.invoiceStatus}
                                                    onValueChange={v => handleDirectUpdate({ invoiceStatus: v as Order["invoiceStatus"] })}
                                                >
                                                    <SelectTrigger className="h-7 text-[10px] w-[100px] px-2 font-bold bg-slate-50">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="not_invoiced" className="text-[10px]">Kesilmedi</SelectItem>
                                                        <SelectItem value="invoiced" className="text-[10px]">Kesildi</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            {formData.invoiceUrl ? (
                                                <div className="flex gap-2">
                                                    <Button variant="outline" className="flex-1 h-8 text-[10px] border-primary/20 hover:bg-primary/5" onClick={() => window.open(formData.invoiceUrl, "_blank")}>
                                                        <FileDown className="h-3 w-3 mr-1.5 text-primary" />
                                                        Faturayı Gör
                                                    </Button>
                                                    <input type="file" id="invoice-upload-replace" className="hidden" onChange={handleInvoiceUpload} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                                                    <Button variant="secondary" size="sm" className="h-8 w-8 p-0" disabled={saving} asChild title="Faturayı Güncelle">
                                                        <label htmlFor="invoice-upload-replace" className="cursor-pointer">
                                                            <FileUp className="h-3 w-3" />
                                                        </label>
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                    <input type="file" id="invoice-upload-direct" className="hidden" onChange={handleInvoiceUpload} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                                                    <Button variant="outline" className="w-full h-8 text-[10px] border-dashed border-2 group" disabled={saving} asChild>
                                                        <label htmlFor="invoice-upload-direct" className="cursor-pointer">
                                                            {saving ? <Loader2 className="h-3 w-3 animate-spin mr-2" /> : <FileUp className="h-3 w-3 mr-1.5 group-hover:-translate-y-0.5 transition-transform" />}
                                                            Fatura Yükle
                                                        </label>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        {formData.hasMaturity && formData.maturityDate && (
                                            <div className="p-2 rounded-lg bg-amber-50 border border-amber-100 space-y-1">
                                                <div className="flex items-center gap-1.5 text-amber-700">
                                                    <Clock className="h-3 w-3" />
                                                    <span className="text-[9px] font-bold uppercase">Vade Bilgisi</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px]">
                                                    <span className="text-amber-600 font-medium">{formData.maturityMonths} Ay Vade</span>
                                                    <span className="text-amber-800 font-bold">{formatDateSafe(formData.maturityDate)}</span>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Approval Banner */}
                {approvalStatus === "pending" && canApprove && (
                    <div className="p-3 bg-amber-50 border-t border-amber-200 flex items-center justify-between animate-in slide-in-from-bottom-2">
                        <div className="flex items-center gap-2 text-amber-800">
                            <Clock className="h-5 w-5" />
                            <span className="text-sm font-bold">{isProductionOrder ? "Bu üretim tamamlanma onayı bekliyor." : "Bu sipariş tamamlanma onayı bekliyor."}</span>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-100" onClick={() => handleApproval(false)}>Reddet</Button>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => handleApproval(true)}>Onayla</Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
