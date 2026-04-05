import { useState, useEffect, useMemo, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
    createOrder,
    updateOrder,
    getOrderItems,
    OrderItem as FirebaseOrderItem,
    Order as FirebaseOrder
} from "@/services/firebase/orderService";
import { getProducts, Product as FirebaseProduct } from "@/services/firebase/productService";
import { getCustomerById, Customer as FirebaseCustomer } from "@/services/firebase/customerService";
import { useAuth } from "@/contexts/AuthContext";
import { Timestamp, writeBatch, doc, collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import {
    Plus,
    Trash2,
    Save,
    Loader2,
    ChevronsUpDown,
    ShoppingCart,
    User,
    CreditCard,
    Package,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    X,
    PlusCircle,
    FileText,
    Banknote,
    CalendarDays,
    Edit
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerCombobox } from "@/components/Customers/CustomerCombobox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CURRENCY_OPTIONS, CURRENCY_SYMBOLS } from "@/utils/currency";
import { PRIORITY_OPTIONS } from "@/utils/priority";
import { Switch } from "@/components/ui/switch";
import { uploadFile } from "@/services/firebase/storageService";
import { uploadFileToDrive } from "@/services/driveService";

interface UnifiedCreateOrderDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: () => void;
    order?: FirebaseOrder | null;
}

interface OrderItem {
    productId: string | null;
    productName: string;
    quantity: number;
    unitPrice: number;
    discount: number;
    discountType: "amount" | "percentage";
    total: number;
}

export const UnifiedCreateOrderDialog = ({ open, onOpenChange, onSuccess, order }: UnifiedCreateOrderDialogProps) => {
    const { user, isAdmin } = useAuth();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [products, setProducts] = useState<any[]>([]);
    const [customer, setCustomer] = useState<FirebaseCustomer | null>(null);

    const [orderData, setOrderData] = useState({
        orderNumber: "",
        customerId: "",
        customerName: "",
        orderDate: new Date().toISOString().split("T")[0],
        dueDate: "",
        priority: 0,
        notes: "",
        deliveryAddress: "",
        currency: "TRY",
        price: 0,
        paidAmount: 0,
        paymentStatus: "unpaid" as FirebaseOrder["paymentStatus"],
        paymentMethod: "bank_transfer",
        hasMaturity: false,
        maturityMonths: 0,
        maturityDate: "",
        taxRate: 20,
        invoiceStatus: "not_invoiced" as FirebaseOrder["invoiceStatus"],
        invoiceUrl: "",
        status: "pending" as FirebaseOrder["status"],
    });

    const [items, setItems] = useState<OrderItem[]>([{
        productId: null,
        productName: "",
        quantity: 1,
        unitPrice: 0,
        discount: 0,
        discountType: "amount",
        total: 0
    }]);

    // Generate unique order number
    const generateOrderNumber = useCallback(() => {
        const date = new Date().toISOString().split("T")[0].replace(/-/g, "");
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
        return `ORD-${date}-${random}`;
    }, []);

    // Initialize
    useEffect(() => {
        if (open) {
            if (order) {
                // Edit mode
                const dDate = order.deliveryDate instanceof Timestamp ? order.deliveryDate.toDate() :
                    (order.deliveryDate ? new Date(order.deliveryDate as any) : null);
                const oDate = order.orderDate instanceof Timestamp ? order.orderDate.toDate() :
                    (order.orderDate ? new Date(order.orderDate as any) : null);
                const mDate = order.maturityDate instanceof Timestamp ? order.maturityDate.toDate() :
                    (order.maturityDate ? new Date(order.maturityDate as any) : null);

                setOrderData({
                    orderNumber: order.orderNumber || order.order_number || "",
                    customerId: order.customerId || order.customer_id || "",
                    customerName: order.customerName || order.customer_name || "",
                    orderDate: oDate ? oDate.toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
                    dueDate: dDate ? dDate.toISOString().split("T")[0] : "",
                    priority: order.priority || 0,
                    notes: order.notes || "",
                    deliveryAddress: order.deliveryAddress || order.delivery_address || "",
                    currency: order.currency || "TRY",
                    price: order.price || order.totalAmount || 0,
                    paidAmount: order.paidAmount || 0,
                    paymentStatus: order.paymentStatus || "unpaid",
                    paymentMethod: order.paymentMethod || "bank_transfer",
                    hasMaturity: !!order.hasMaturity,
                    maturityMonths: order.maturityMonths || 0,
                    maturityDate: mDate ? mDate.toISOString().split("T")[0] : "",
                    taxRate: order.taxRate || 20,
                    invoiceStatus: order.invoiceStatus || "not_invoiced",
                    status: order.status || "pending",
                    invoiceUrl: order.invoiceUrl || "",
                });

                getOrderItems(order.id).then(fetchedItems => {
                    setItems(fetchedItems.map(i => ({
                        productId: i.productId || i.product_id || null,
                        productName: i.productName || i.product_name || "",
                        quantity: i.quantity || 1,
                        unitPrice: i.unitPrice || i.unit_price || 0,
                        discount: i.discount || 0,
                        discountType: i.discountType || "amount",
                        total: i.total || 0,
                    })));
                });
            } else {
                // Create mode
                setOrderData(prev => ({ ...prev, orderNumber: generateOrderNumber() }));
                setStep(1);
            }
            getProducts().then(setProducts);
        }
    }, [open, order, generateOrderNumber]);

    // Calculations
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    const totalDiscount = items.reduce((sum, item) => {
        if (item.discountType === "percentage") return sum + (item.quantity * item.unitPrice * (item.discount / 100));
        return sum + item.discount;
    }, 0);
    const grandTotal = (subtotal - totalDiscount) * (1 + orderData.taxRate / 100);

    useEffect(() => {
        setOrderData(prev => ({ ...prev, price: grandTotal }));
    }, [grandTotal]);

    const handleAddItem = () => {
        setItems(prev => [...prev, {
            productId: null,
            productName: "",
            quantity: 1,
            unitPrice: 0,
            discount: 0,
            discountType: "amount",
            total: 0
        }]);
    };

    const removeItem = (idx: number) => {
        if (items.length > 1) setItems(prev => prev.filter((_, i) => i !== idx));
    };

    const updateItem = (idx: number, updates: Partial<OrderItem>) => {
        setItems(prev => {
            const newItems = [...prev];
            newItems[idx] = { ...newItems[idx], ...updates };

            const item = newItems[idx];
            const lineSubtotal = item.quantity * item.unitPrice;
            const lineDiscount = item.discountType === "percentage" ? (lineSubtotal * (item.discount / 100)) : item.discount;
            item.total = Math.max(lineSubtotal - lineDiscount, 0);

            return newItems;
        });
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setLoading(true);
        try {
            let url = "";
            try {
                const drive = await uploadFileToDrive(file, { fileName: `Invoice_${orderData.orderNumber}_${Date.now()}` });
                url = drive.webViewLink || drive.fileId;
            } catch {
                url = await uploadFile(file, `invoices/${Date.now()}_${file.name}`);
            }
            setOrderData(prev => ({ ...prev, invoiceUrl: url, invoiceStatus: "invoiced" }));
            toast.success("Fatura yüklendi.");
        } catch {
            toast.error("Dosya yüklenemedi.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        if (!user?.id) return;
        setLoading(true);
        try {
            const payload: any = {
                ...orderData,
                orderDate: Timestamp.fromDate(new Date(orderData.orderDate)),
                dueDate: orderData.dueDate ? Timestamp.fromDate(new Date(orderData.dueDate)) : null,
                maturityDate: orderData.maturityDate ? Timestamp.fromDate(new Date(orderData.maturityDate)) : null,
                totalAmount: grandTotal,
                subtotal,
                discountTotal: totalDiscount,
                itemsCount: items.length,
                status: orderData.status,
                createdBy: order ? (order.createdBy || (order as any).created_at_user_id || user.id) : user.id
            };

            if (order) {
                await updateOrder(order.id, payload, user.id, isAdmin);
                const batch = writeBatch(firestore);
                const existingItems = await getOrderItems(order.id);
                existingItems.forEach(i => batch.delete(doc(firestore, "orders", order.id, "items", i.id)));
                items.forEach(i => batch.set(doc(collection(firestore, "orders", order.id, "items")), i));
                await batch.commit();
                toast.success("Sipariş güncellendi.");
            } else {
                const created = await createOrder(payload, items);
                toast.success(`Sipariş oluşturuldu: ${created.orderNumber}`);
            }
            onSuccess();
            onOpenChange(false);
        } catch (err: any) {
            toast.error("Hata: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const STEPS = [
        { label: "Temel Bilgiler", icon: <User className="h-4 w-4" /> },
        { label: "Ürün Kalemleri", icon: <Package className="h-4 w-4" /> },
        { label: "Finansal Detaylar", icon: <CreditCard className="h-4 w-4" /> },
        { label: "Özet & Onay", icon: <CheckCircle2 className="h-4 w-4" /> },
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="app-dialog-shell max-w-4xl">
                <DialogTitle className="sr-only">
                    {order ? "Siparişi Düzenle" : "Yeni Sipariş Oluştur"}
                </DialogTitle>
                <DialogDescription className="sr-only">
                    {order ? "Sipariş bilgilerini düzenleyin" : "Yeni bir sipariş oluşturun"}
                </DialogDescription>

                <div className="flex flex-col flex-1 min-h-0">
                    {/* Header */}
                    <DialogHeader className="p-3 sm:p-4 pr-10 sm:pr-12 border-b bg-white flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                                <ShoppingCart className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-[15px] sm:text-[17px] font-semibold text-foreground truncate">
                                    {order ? "Siparişi Düzenle" : "Yeni Sipariş Oluştur"}
                                </h2>
                            </div>
                        </div>
                        {/* Step Indicator */}
                        <div className="flex items-center justify-center gap-1 sm:gap-2 py-3 px-2">
                            {STEPS.map((s, idx) => {
                                const stepNum = idx + 1;
                                const isActive = stepNum === step;
                                const isCompleted = stepNum < step;
                                return (
                                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                                        {idx > 0 && (
                                            <div className={cn(
                                                "h-[2px] w-4 sm:w-8 rounded-full transition-colors",
                                                isCompleted ? "bg-primary" : "bg-muted"
                                            )} />
                                        )}
                                        <div className={cn(
                                            "flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all",
                                            isActive && "bg-primary text-white shadow-sm",
                                            isCompleted && "bg-primary/10 text-primary",
                                            !isActive && !isCompleted && "bg-muted/50 text-muted-foreground"
                                        )}>
                                            {isCompleted ? (
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                            ) : (
                                                <span className="flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold">
                                                    {stepNum}
                                                </span>
                                            )}
                                            <span className="hidden sm:inline">{s.label}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </DialogHeader>

                    {/* Content */}
                    <div className="app-dialog-scroll bg-gray-50/30">
                        <div className="p-3 sm:p-5">

                            {/* STEP 1: Temel Bilgiler */}
                            {step === 1 && (
                                <div className="space-y-4">
                                    <Card className="rounded-xl shadow-sm border bg-white">
                                        <CardHeader className="p-4 sm:p-5 border-b">
                                            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                                                <User className="h-4 w-4 text-primary" />
                                                Müşteri & Temel Bilgiler
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 sm:p-5 space-y-4">
                                            <div className="space-y-1.5">
                                                <Label className="text-xs sm:text-sm font-medium" showRequired>Müşteri</Label>
                                                <CustomerCombobox
                                                    value={orderData.customerId}
                                                    onChange={(id, name) => setOrderData(p => ({ ...p, customerId: id, customerName: name }))}
                                                    placeholder="Müşteri seçin veya ekleyin"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium" showRequired>Sipariş No</Label>
                                                    <Input
                                                        value={orderData.orderNumber}
                                                        onChange={e => setOrderData(p => ({ ...p, orderNumber: e.target.value }))}
                                                        className="h-10 text-sm"
                                                        placeholder="ORD-20240101-001"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium">Öncelik</Label>
                                                    <Select value={orderData.priority.toString()} onValueChange={v => setOrderData(p => ({ ...p, priority: Number(v) }))}>
                                                        <SelectTrigger className="h-10 text-xs sm:text-sm"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {PRIORITY_OPTIONS.map(o => <SelectItem key={o.value} value={o.value.toString()}>{o.label}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium">Sipariş Tarihi</Label>
                                                    <Input type="date" className="h-10 text-sm" value={orderData.orderDate} onChange={e => setOrderData(p => ({ ...p, orderDate: e.target.value }))} />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium">Termin Tarihi</Label>
                                                    <Input type="date" className="h-10 text-sm" value={orderData.dueDate} onChange={e => setOrderData(p => ({ ...p, dueDate: e.target.value }))} />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs sm:text-sm font-medium">Teslimat Adresi</Label>
                                                <Input
                                                    value={orderData.deliveryAddress}
                                                    onChange={e => setOrderData(p => ({ ...p, deliveryAddress: e.target.value }))}
                                                    className="h-10 text-sm"
                                                    placeholder="Teslimat adresi (opsiyonel)"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs sm:text-sm font-medium">Notlar</Label>
                                                <textarea
                                                    value={orderData.notes}
                                                    onChange={e => setOrderData(p => ({ ...p, notes: e.target.value }))}
                                                    rows={2}
                                                    placeholder="Sipariş ile ilgili notlarınızı yazabilirsiniz..."
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* STEP 2: Ürün Kalemleri */}
                            {step === 2 && (
                                <div className="space-y-4">
                                    <Card className="rounded-xl shadow-sm border bg-white">
                                        <CardHeader className="p-4 sm:p-5 border-b flex flex-row items-center justify-between">
                                            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                                                <Package className="h-4 w-4 text-primary" />
                                                Sipariş Kalemleri
                                            </CardTitle>
                                            <div className="flex items-center gap-2">
                                                <Select value={orderData.currency} onValueChange={v => setOrderData(p => ({ ...p, currency: v }))}>
                                                    <SelectTrigger className="h-8 text-xs w-24"><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        {CURRENCY_OPTIONS.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                                <Button variant="outline" size="sm" onClick={handleAddItem} className="gap-1.5 h-8 text-xs">
                                                    <Plus className="h-3.5 w-3.5" />
                                                    Kalem Ekle
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4 sm:p-5 space-y-3">
                                            {items.map((item, idx) => (
                                                <div key={idx} className="p-3 sm:p-4 rounded-lg border bg-gray-50/50 hover:shadow-sm transition-all relative group">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                                                            {idx + 1}
                                                        </div>
                                                        {items.length > 1 && (
                                                            <Button
                                                                variant="ghost" size="icon"
                                                                className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                                                                onClick={() => removeItem(idx)}
                                                            >
                                                                <Trash2 className="h-3.5 w-3.5" />
                                                            </Button>
                                                        )}
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                                                        <div className="col-span-1 sm:col-span-5 space-y-1.5">
                                                            <Label className="text-xs font-medium">Ürün</Label>
                                                            <Select value={item.productId || ""} onValueChange={v => {
                                                                const p = products.find((x: any) => x.id === v);
                                                                updateItem(idx, { productId: v, productName: (p as any)?.name, unitPrice: (p as any)?.price || 0 });
                                                            }}>
                                                                <SelectTrigger className="h-10 text-xs sm:text-sm"><SelectValue placeholder="Ürün seçin" /></SelectTrigger>
                                                                <SelectContent>
                                                                    {products.map((p: any) => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="col-span-1 sm:col-span-2 space-y-1.5">
                                                            <Label className="text-xs font-medium">Miktar</Label>
                                                            <Input type="number" min="1" className="h-10 text-xs sm:text-sm" value={item.quantity} onChange={e => updateItem(idx, { quantity: Number(e.target.value) })} />
                                                        </div>
                                                        <div className="col-span-1 sm:col-span-3 space-y-1.5">
                                                            <Label className="text-xs font-medium">Birim Fiyat</Label>
                                                            <Input type="number" className="h-10 text-xs sm:text-sm" value={item.unitPrice} onChange={e => updateItem(idx, { unitPrice: Number(e.target.value) })} />
                                                        </div>
                                                        <div className="col-span-1 sm:col-span-2 space-y-1.5">
                                                            <Label className="text-xs font-medium">Toplam</Label>
                                                            <div className="h-10 px-3 flex items-center bg-white border rounded-md font-semibold text-sm text-foreground">
                                                                {CURRENCY_SYMBOLS[orderData.currency]}{item.total.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="flex items-center justify-between pt-3 border-t text-sm font-medium">
                                                <span className="text-muted-foreground">{items.length} kalem</span>
                                                <span>Ara Toplam: <span className="text-primary font-semibold">{CURRENCY_SYMBOLS[orderData.currency]}{subtotal.toLocaleString()}</span></span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* STEP 3: Finansal Detaylar */}
                            {step === 3 && (
                                <div className="space-y-4">
                                    <Card className="rounded-xl shadow-sm border bg-white">
                                        <CardHeader className="p-4 sm:p-5 border-b">
                                            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                                                <CreditCard className="h-4 w-4 text-primary" />
                                                Finansal Detaylar
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 sm:p-5 space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium">Ödeme Durumu</Label>
                                                    <Select value={orderData.paymentStatus} onValueChange={v => setOrderData(p => ({ ...p, paymentStatus: v as any }))}>
                                                        <SelectTrigger className="h-10 text-xs sm:text-sm"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="unpaid">Ödenmedi</SelectItem>
                                                            <SelectItem value="partially_paid">Kısmi Ödeme</SelectItem>
                                                            <SelectItem value="paid">Ödendi</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label className="text-xs sm:text-sm font-medium">Ödeme Yöntemi</Label>
                                                    <Select value={orderData.paymentMethod} onValueChange={v => setOrderData(p => ({ ...p, paymentMethod: v }))}>
                                                        <SelectTrigger className="h-10 text-xs sm:text-sm"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cash">Nakit</SelectItem>
                                                            <SelectItem value="credit_card">Kredi Kartı</SelectItem>
                                                            <SelectItem value="bank_transfer">Banka Havalesi</SelectItem>
                                                            <SelectItem value="other">Diğer</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                                                <div>
                                                    <Label className="text-xs sm:text-sm font-medium cursor-pointer">Vadeli Satış</Label>
                                                    <p className="text-xs text-muted-foreground mt-0.5">Vadeli ödeme planı oluşturun</p>
                                                </div>
                                                <Switch checked={orderData.hasMaturity} onCheckedChange={c => setOrderData(p => ({ ...p, hasMaturity: c }))} />
                                            </div>
                                            {orderData.hasMaturity && (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label className="text-xs sm:text-sm font-medium">Vade (Ay)</Label>
                                                        <Input type="number" className="h-10 text-sm" value={orderData.maturityMonths} onChange={e => setOrderData(p => ({ ...p, maturityMonths: Number(e.target.value) }))} />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label className="text-xs sm:text-sm font-medium">Vade Tarihi</Label>
                                                        <Input type="date" className="h-10 text-sm" value={orderData.maturityDate} onChange={e => setOrderData(p => ({ ...p, maturityDate: e.target.value }))} />
                                                    </div>
                                                </div>
                                            )}
                                            <div className="space-y-1.5">
                                                <Label className="text-xs sm:text-sm font-medium">Fatura (Dosya)</Label>
                                                <div className="flex gap-2 items-center">
                                                    <Input type="file" className="flex-1 h-10 text-sm" onChange={handleFileUpload} />
                                                    {orderData.invoiceUrl && (
                                                        <Badge className="h-10 px-3 bg-emerald-500 shrink-0">
                                                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                                                            Yüklendi
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* STEP 4: Özet & Onay */}
                            {step === 4 && (
                                <div className="space-y-4">
                                    <Card className="rounded-xl shadow-sm border bg-white">
                                        <CardHeader className="p-4 sm:p-5 border-b">
                                            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                                Sipariş Özeti
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 sm:p-5 space-y-5">
                                            <div className="space-y-3">
                                                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sipariş Bilgileri</h4>
                                                <div className="grid grid-cols-2 gap-3 text-sm">
                                                    <div>
                                                        <span className="text-muted-foreground text-xs">Müşteri</span>
                                                        <p className="font-medium">{orderData.customerName || "—"}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted-foreground text-xs">Sipariş No</span>
                                                        <p className="font-medium">{orderData.orderNumber}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted-foreground text-xs">Sipariş Tarihi</span>
                                                        <p className="font-medium">{orderData.orderDate || "—"}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted-foreground text-xs">Termin Tarihi</span>
                                                        <p className="font-medium">{orderData.dueDate || "Belirtilmemiş"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Kalemler ({items.length})</h4>
                                                <div className="divide-y rounded-lg border">
                                                    {items.map((item, idx) => (
                                                        <div key={idx} className="flex items-center justify-between p-3 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                                                                    {idx + 1}
                                                                </div>
                                                                <span className="font-medium">{item.productName || "—"}</span>
                                                            </div>
                                                            <span className="text-muted-foreground">
                                                                {item.quantity} × {CURRENCY_SYMBOLS[orderData.currency]}{item.unitPrice.toLocaleString()}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-2 pt-2 border-t">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Ara Toplam</span>
                                                    <span>{CURRENCY_SYMBOLS[orderData.currency]}{subtotal.toLocaleString()}</span>
                                                </div>
                                                {totalDiscount > 0 && (
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">İndirim</span>
                                                        <span className="text-rose-500">-{CURRENCY_SYMBOLS[orderData.currency]}{totalDiscount.toLocaleString()}</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between text-base font-bold pt-1 border-t">
                                                    <span>Genel Toplam</span>
                                                    <span className="text-primary">{CURRENCY_SYMBOLS[orderData.currency]}{grandTotal.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between p-3 sm:p-4 border-t bg-white flex-shrink-0 gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => step > 1 ? setStep(s => s - 1) : onOpenChange(false)}
                            className="gap-1.5 h-9 text-xs sm:text-sm"
                        >
                            {step === 1 ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <ArrowLeft className="h-4 w-4" />
                            )}
                            {step === 1 ? "Vazgeç" : "Geri"}
                        </Button>

                        <div className="flex gap-2">
                            {step < 4 ? (
                                <Button
                                    type="button"
                                    onClick={() => setStep(s => s + 1)}
                                    disabled={step === 1 && !orderData.customerId}
                                    className="gap-1.5 h-9 text-xs sm:text-sm"
                                >
                                    İleri
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="gap-1.5 h-9 text-xs sm:text-sm bg-primary hover:bg-primary/90"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Kaydediliyor...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="h-4 w-4" />
                                            {order ? "Güncelle" : "Siparişi Onayla"}
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
