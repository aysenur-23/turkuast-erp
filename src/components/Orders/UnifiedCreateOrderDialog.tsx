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
import { Card, CardContent } from "@/components/ui/card";
import { CustomerCombobox } from "@/components/Customers/CustomerCombobox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="app-dialog-shell max-w-4xl">
                <DialogHeader className="p-4 border-b">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {order ? <Edit className="h-5 w-5" /> : <PlusCircle className="h-5 w-5" />}
                        </div>
                        <div>
                            <DialogTitle>{order ? "Siparişi Düzenle" : "Yeni Sipariş Oluştur"}</DialogTitle>
                            <DialogDescription>Adım {step}/4: {
                                step === 1 ? "Müşteri & Temel Bilgiler" :
                                    step === 2 ? "Ürün Kalemleri" :
                                        step === 3 ? "Finansal Detaylar" : "Özet & Onay"
                            }</DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-hidden bg-slate-50/30 p-4">
                    <div className="app-dialog-scroll h-full">
                        {step === 1 && (
                            <div className="space-y-4 max-w-2xl mx-auto anim-fade-in">
                                <Card>
                                    <CardContent className="p-6 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-2 space-y-2">
                                                <Label>Müşteri Seçimi</Label>
                                                <CustomerCombobox
                                                    value={orderData.customerId}
                                                    onChange={(id, name) => setOrderData(p => ({ ...p, customerId: id, customerName: name }))}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Sipariş No</Label>
                                                <Input value={orderData.orderNumber} onChange={e => setOrderData(p => ({ ...p, orderNumber: e.target.value }))} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Öncelik</Label>
                                                <Select value={orderData.priority.toString()} onValueChange={v => setOrderData(p => ({ ...p, priority: Number(v) }))}>
                                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        {PRIORITY_OPTIONS.map(o => <SelectItem key={o.value} value={o.value.toString()}>{o.label}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Sipariş Tarihi</Label>
                                                <Input type="date" value={orderData.orderDate} onChange={e => setOrderData(p => ({ ...p, orderDate: e.target.value }))} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Termin Tarihi</Label>
                                                <Input type="date" value={orderData.dueDate} onChange={e => setOrderData(p => ({ ...p, dueDate: e.target.value }))} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4 anim-fade-in">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-bold flex items-center gap-2"><Package className="h-4 w-4" /> Sipariş Kalemleri</h3>
                                    <Button variant="outline" size="sm" onClick={handleAddItem}><Plus className="h-4 w-4 mr-2" /> Kalem Ekle</Button>
                                </div>
                                {items.map((item, idx) => (
                                    <Card key={idx} className="relative group">
                                        <CardContent className="p-4 grid grid-cols-12 gap-3 items-end">
                                            <div className="col-span-12 md:col-span-4 space-y-1.5">
                                                <Label className="text-[10px] uppercase font-bold text-slate-400">Ürün</Label>
                                                <Select value={item.productId || ""} onValueChange={v => {
                                                    const p = products.find(x => x.id === v);
                                                    updateItem(idx, { productId: v, productName: p?.name, unitPrice: p?.price || 0 });
                                                }}>
                                                    <SelectTrigger><SelectValue placeholder="Ürün Seçin" /></SelectTrigger>
                                                    <SelectContent>
                                                        {products.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="col-span-4 md:col-span-2 space-y-1.5">
                                                <Label className="text-[10px] uppercase font-bold text-slate-400">Miktar</Label>
                                                <Input type="number" min="1" value={item.quantity} onChange={e => updateItem(idx, { quantity: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-span-4 md:col-span-2 space-y-1.5">
                                                <Label className="text-[10px] uppercase font-bold text-slate-400">Birim Fiyat</Label>
                                                <Input type="number" value={item.unitPrice} onChange={e => updateItem(idx, { unitPrice: Number(e.target.value) })} />
                                            </div>
                                            <div className="col-span-4 md:col-span-3 space-y-1.5">
                                                <Label className="text-[10px] uppercase font-bold text-slate-400">Toplam</Label>
                                                <div className="h-10 px-3 flex items-center bg-slate-50 border rounded-md font-bold text-slate-700">
                                                    {CURRENCY_SYMBOLS[orderData.currency]}{item.total.toLocaleString()}
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white shadow-sm border opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeItem(idx)}>
                                                <Trash2 className="h-3.5 w-3.5 text-destructive" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4 max-w-2xl mx-auto anim-fade-in">
                                <Card className="border-primary/20 bg-primary/5">
                                    <CardContent className="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Ödeme Durumu</Label>
                                                <Select value={orderData.paymentStatus} onValueChange={v => setOrderData(p => ({ ...p, paymentStatus: v as any }))}>
                                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="unpaid">Ödenmedi</SelectItem>
                                                        <SelectItem value="partially_paid">Kısmi Ödeme</SelectItem>
                                                        <SelectItem value="paid">Ödendi</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Ödeme Yöntemi</Label>
                                                <Select value={orderData.paymentMethod} onValueChange={v => setOrderData(p => ({ ...p, paymentMethod: v }))}>
                                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="cash">Nakit</SelectItem>
                                                        <SelectItem value="credit_card">Kredi Kartı</SelectItem>
                                                        <SelectItem value="bank_transfer">Banka Havalesi</SelectItem>
                                                        <SelectItem value="other">Diğer</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="col-span-1 flex items-center justify-between p-3 bg-white rounded-lg border">
                                                <Label className="font-bold cursor-pointer">Vadeli Satış</Label>
                                                <Switch checked={orderData.hasMaturity} onCheckedChange={c => setOrderData(p => ({ ...p, hasMaturity: c }))} />
                                            </div>
                                            {orderData.hasMaturity && (
                                                <div className="grid grid-cols-2 gap-2 anim-fade-in col-span-2">
                                                    <div className="space-y-1.5">
                                                        <Label>Vade (Ay)</Label>
                                                        <Input type="number" value={orderData.maturityMonths} onChange={e => setOrderData(p => ({ ...p, maturityMonths: Number(e.target.value) }))} />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label>Vade Tarihi</Label>
                                                        <Input type="date" value={orderData.maturityDate} onChange={e => setOrderData(p => ({ ...p, maturityDate: e.target.value }))} />
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-span-2 space-y-2">
                                                <Label>Fatura (Dosya)</Label>
                                                <div className="flex gap-2">
                                                    <Input type="file" className="flex-1" onChange={handleFileUpload} />
                                                    {orderData.invoiceUrl && <Badge className="h-10 bg-emerald-500">Yüklendi</Badge>}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-4 max-w-2xl mx-auto anim-fade-in">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="text-center space-y-2 mb-6">
                                            <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
                                            <h3 className="text-lg font-bold">Son İnceleme</h3>
                                            <p className="text-sm text-slate-500">Lütfen siparişi onaylamadan önce bilgileri kontrol edin.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Müşteri:</span><span className="font-bold">{orderData.customerName}</span></div>
                                            <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Sipariş No:</span><span className="font-bold">{orderData.orderNumber}</span></div>
                                            <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Kalem Sayısı:</span><span className="font-bold">{items.length} Kalem</span></div>
                                            <Separator className="my-2" />
                                            <div className="flex justify-between py-2"><span className="text-slate-500">Ara Toplam:</span><span>{CURRENCY_SYMBOLS[orderData.currency]}{subtotal.toLocaleString()}</span></div>
                                            <div className="flex justify-between py-2"><span className="text-slate-500">İndirim:</span><span className="text-rose-500">-{CURRENCY_SYMBOLS[orderData.currency]}{totalDiscount.toLocaleString()}</span></div>
                                            <div className="flex justify-between py-2 text-lg font-bold"><span className="text-slate-900">Genel Toplam:</span><span className="text-primary">{CURRENCY_SYMBOLS[orderData.currency]}{grandTotal.toLocaleString()}</span></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>

                <Separator />
                <div className="p-4 flex items-center justify-between bg-white border-t rounded-b-xl">
                    <Button variant="ghost" onClick={() => step > 1 ? setStep(s => s - 1) : onOpenChange(false)}>
                        {step === 1 ? "Vazgeç" : <><ArrowLeft className="h-4 w-4 mr-2" />Geri</>}
                    </Button>

                    <div className="flex gap-2">
                        {step < 4 ? (
                            <Button onClick={() => setStep(s => s + 1)} disabled={step === 1 && !orderData.customerId}>
                                İleri <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={loading}>
                                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 mr-2" />}
                                {order ? "Güncelle" : "Siparişi Onayla"}
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
