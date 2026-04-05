import { useState, useEffect, useCallback, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { createOrder, updateOrder, getOrderItems, OrderItem, Order as FirebaseOrder } from "@/services/firebase/orderService";
import { getCustomerById, Customer as FirebaseCustomer } from "@/services/firebase/customerService";
import { useAuth } from "@/contexts/AuthContext";
import { addDoc, updateDoc, deleteDoc, collection, Timestamp, doc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Loader2, Plus, Trash2, Package, ShoppingCart, User, CalendarIcon, ArrowLeft, ArrowRight, Save, RefreshCcw, ChevronsUpDown, Pencil, CheckCircle2 } from "lucide-react";
import { CustomerCombobox } from "@/components/Customers/CustomerCombobox";
import { cn } from "@/lib/utils";
import { getProducts, Product } from "@/services/firebase/productService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CustomerDetailModal } from "@/components/Customers/CustomerDetailModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PRIORITY_OPTIONS } from "@/utils/priority";

interface CreateProductionOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  order?: FirebaseOrder | null;
}

interface ProductItem {
  product_id: string | null;
  product_name: string;
  quantity: number;
  unit: string;
  is_manual?: boolean;
}

type CatalogProduct = {
  id: string;
  name: string;
  sku?: string | null;
  category?: string | null;
};

const MANUAL_PRODUCT_VALUE = "manual";

const createEmptyItem = (): ProductItem => ({
  product_id: null,
  product_name: "",
  quantity: 1,
  unit: "Adet",
  is_manual: false,
});

interface ProductSelectorProps {
  products: CatalogProduct[];
  value: string | null;
  onSelect: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  onRefreshProducts?: () => void;
}

const ProductSelector = ({
  products,
  value,
  onSelect,
  disabled,
  placeholder = "Ürün seçin veya arayın",
  onRefreshProducts,
}: ProductSelectorProps) => {
  const [open, setOpen] = useState(false);
  const selectedProduct = value ? products.find((p) => p.id === value) : null;

  useEffect(() => {
    if (open && onRefreshProducts && products.length === 0) {
      onRefreshProducts();
    }
  }, [open, onRefreshProducts, products.length]);

  return (
    <Popover open={open} onOpenChange={(isOpen) => !disabled && setOpen(isOpen)}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className="w-full justify-between h-10 pointer-events-auto cursor-pointer min-h-[44px] sm:min-h-0 text-[11px] sm:text-xs"
        >
          <span className="truncate text-left">
            {selectedProduct ? selectedProduct.name : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50 flex-shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] sm:w-[400px] p-0 !max-h-[400px] !h-auto"
        align="start"
        side="bottom"
        sideOffset={4}
        avoidCollisions={true}
      >
        <Command>
          <CommandInput placeholder="Ürün ara..." className="text-[11px] sm:text-xs" />
          <CommandList className="!max-h-[350px] !h-auto" style={{ maxHeight: '350px', height: 'auto' }}>
            <CommandEmpty>Ürün bulunamadı. Manuel ürün eklemek için aşağıdaki seçeneği kullanın.</CommandEmpty>
            {products.length > 0 && (
              <CommandGroup heading="Kayıtlı ürünler">
                {products.map((product) => (
                  <CommandItem
                    key={product.id}
                    value={product.name}
                    onSelect={() => {
                      onSelect(product.id);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col w-full">
                      <span className="font-medium">{product.name}</span>
                      {(product.sku || product.category) && (
                        <span className="text-[11px] sm:text-xs text-muted-foreground">
                          {product.sku || product.category}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {products.length > 0 && <CommandSeparator />}
            <CommandGroup>
              <CommandItem
                className="text-primary cursor-pointer"
                onSelect={() => {
                  onSelect(MANUAL_PRODUCT_VALUE);
                  setOpen(false);
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Manuel Ürün/Hizmet Ekle
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

// Step indicator component
const StepIndicator = ({ currentStep, steps }: { currentStep: number; steps: { label: string; icon: React.ReactNode }[] }) => (
  <div className="flex items-center justify-center gap-1 sm:gap-2 py-3 px-2">
    {steps.map((s, idx) => {
      const stepNum = idx + 1;
      const isActive = stepNum === currentStep;
      const isCompleted = stepNum < currentStep;
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
);

export const CreateProductionOrderDialog = ({ open, onOpenChange, onSuccess, order }: CreateProductionOrderDialogProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [orderNumberTouched, setOrderNumberTouched] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<FirebaseCustomer | null>(null);
  const [customerDetailsLoading, setCustomerDetailsLoading] = useState(false);
  const [customerDetailsError, setCustomerDetailsError] = useState<string | null>(null);
  const [customerDetailModalOpen, setCustomerDetailModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    order_number: "",
    customer_id: "",
    customer_name: "",
    due_date: "",
    priority: 0,
    status: "planned" as FirebaseOrder["status"],
    notes: "",
    deductMaterials: true,
  });

  const [productItems, setProductItems] = useState<ProductItem[]>([createEmptyItem()]);
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const STEPS = [
    { label: "Sipariş Bilgileri", icon: <Package className="h-4 w-4" /> },
    { label: "Ürünler", icon: <ShoppingCart className="h-4 w-4" /> },
    { label: "Tamamlama", icon: <CheckCircle2 className="h-4 w-4" /> },
  ];

  const generateOrderNumber = useCallback(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const randomSegment = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return `PROD-${year}${month}${day}-${randomSegment}`;
  }, []);

  const assignOrderNumber = useCallback(
    (force = false) => {
      setFormData((prev) => {
        if (!force && prev.order_number) return prev;
        return { ...prev, order_number: generateOrderNumber() };
      });
    },
    [generateOrderNumber]
  );

  const resetForm = useCallback(() => {
    setFormData({
      order_number: generateOrderNumber(),
      customer_id: "",
      customer_name: "",
      due_date: "",
      priority: 0,
      status: "planned",
      notes: "",
      deductMaterials: true,
    });
    setProductItems([createEmptyItem()]);
    setOrderNumberTouched(false);
    setCustomerDetails(null);
    setCustomerDetailsError(null);
    setStep(1);
  }, [generateOrderNumber]);

  const fetchProducts = useCallback(async () => {
    try {
      setProductsLoading(true);
      const fetched = await getProducts();
      setProducts(fetched.map((p) => ({
        id: p.id,
        name: p.name,
        sku: p.sku || "",
        category: p.category || "",
      })));
    } catch {
      toast.error("Ürünler yüklenirken hata oluştu");
    } finally {
      setProductsLoading(false);
    }
  }, []);

  // Edit mode: load existing order
  useEffect(() => {
    if (!open) return;

    if (order) {
      const loadOrderData = async () => {
        try {
          const dueDate = order.due_date || order.dueDate;
          setFormData({
            order_number: order.order_number || order.orderNumber || "",
            customer_id: order.customer_id || order.customerId || "",
            customer_name: order.customer_name || order.customerName || "",
            due_date: dueDate instanceof Date
              ? format(dueDate, "yyyy-MM-dd")
              : dueDate instanceof Timestamp
                ? format(dueDate.toDate(), "yyyy-MM-dd")
                : typeof dueDate === "string" ? dueDate : "",
            priority: order.priority ?? 0,
            status: order.status || "planned",
            notes: order.notes || "",
            deductMaterials: order.deductMaterials ?? true,
          });

          const items = await getOrderItems(order.id);
          if (items.length > 0) {
            setProductItems(items.map((item) => ({
              product_id: item.product_id || item.productId || null,
              product_name: item.product_name || item.productName || "",
              quantity: item.quantity || 0,
              unit: "Adet",
              is_manual: !item.product_id && !item.productId,
            })));
          } else {
            setProductItems([createEmptyItem()]);
          }

          if (order.customer_id || order.customerId) {
            try {
              setCustomerDetailsLoading(true);
              const customer = await getCustomerById(order.customer_id || order.customerId || "");
              setCustomerDetails(customer);
            } catch {
              // silently continue
            } finally {
              setCustomerDetailsLoading(false);
            }
          }
        } catch {
          toast.error("Sipariş bilgileri yüklenirken hata oluştu");
        }
      };
      loadOrderData();
    } else {
      resetForm();
      assignOrderNumber();
    }
  }, [open, order, assignOrderNumber, resetForm]);

  const fetchCustomerDetails = useCallback(async (customerId: string) => {
    setCustomerDetailsLoading(true);
    setCustomerDetailsError(null);
    try {
      const customer = await getCustomerById(customerId);
      setCustomerDetails(customer);
    } catch (error: unknown) {
      setCustomerDetails(null);
      setCustomerDetailsError(error instanceof Error ? error.message : "Müşteri bilgileri alınamadı");
    } finally {
      setCustomerDetailsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!formData.customer_id) {
      setCustomerDetails(null);
      setCustomerDetailsError(null);
      return;
    }
    fetchCustomerDetails(formData.customer_id);
  }, [formData.customer_id, fetchCustomerDetails]);

  const validItems = useMemo(
    () => productItems.filter(
      (item) => (item.product_id || (item.is_manual && item.product_name.trim())) && item.quantity > 0
    ),
    [productItems]
  );

  const totalQuantity = validItems.reduce((sum, item) => sum + item.quantity, 0);
  const lineItemCount = validItems.length;

  const handleAddItem = () => {
    setProductItems((prev) => [...prev, createEmptyItem()]);
  };

  const handleRemoveItem = (index: number) => {
    setProductItems((prev) => {
      if (prev.length === 1) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  const updateItem = (index: number, field: keyof ProductItem, value: string | number | null) => {
    setProductItems((prev) => {
      const updated = [...prev];
      const current = { ...updated[index] };

      if (field === "product_id") {
        if (value === MANUAL_PRODUCT_VALUE) {
          current.is_manual = true;
          current.product_id = null;
          current.product_name = "";
        } else if (value) {
          const product = products.find((p) => p.id === value);
          current.is_manual = false;
          current.product_id = String(value);
          current.product_name = product?.name || "";
        } else {
          current.is_manual = false;
          current.product_id = null;
          current.product_name = "";
        }
      } else if (field === "quantity") {
        const numericValue = parseInt(String(value));
        current[field] = Number.isFinite(numericValue) && numericValue > 0 ? numericValue : 0;
      } else {
        (current as Record<string, unknown>)[field] = value;
      }

      updated[index] = current;
      return updated;
    });
  };

  const handleCustomerChange = useCallback((customerId: string, customerName: string) => {
    setFormData((prev) => ({ ...prev, customer_id: customerId, customer_name: customerName }));
    setCustomerDetails(null);
    setCustomerDetailsError(null);
  }, []);

  const handleCustomerUpdate = () => {
    if (formData.customer_id) fetchCustomerDetails(formData.customer_id);
  };

  const handleRegenerateOrderNumber = () => {
    assignOrderNumber(true);
    setOrderNumberTouched(false);
    toast.success("Yeni sipariş numarası oluşturuldu");
  };

  // Step validation
  const canGoToStep2 = formData.order_number && formData.customer_id;
  const canGoToStep3 = canGoToStep2 && validItems.length > 0;

  const handleNext = () => {
    if (step === 1) {
      if (!formData.order_number) {
        setOrderNumberTouched(true);
        toast.error("Sipariş numarası gereklidir");
        return;
      }
      if (!formData.customer_id) {
        toast.error("Lütfen müşteri seçin");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (validItems.length === 0) {
        toast.error("Lütfen en az bir geçerli ürün ekleyin");
        return;
      }
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!user?.id) {
      toast.error("Oturumunuz sona erdi. Lütfen tekrar giriş yapın.");
      return;
    }

    setLoading(true);
    try {
      const dueDate = formData.due_date ? Timestamp.fromDate(new Date(formData.due_date)) : null;

      const orderItems: Omit<OrderItem, "id">[] = validItems.map((item) => ({
        productId: item.product_id || null,
        product_id: item.product_id || null,
        productName: item.product_name || null,
        product_name: item.product_name || null,
        quantity: item.quantity,
        unitPrice: 0,
        unit_price: 0,
        total: 0,
      }));

      if (order) {
        await updateOrder(
          order.id,
          {
            orderNumber: formData.order_number,
            order_number: formData.order_number,
            customerId: formData.customer_id || null,
            customer_id: formData.customer_id || null,
            customerName: formData.customer_name || null,
            customer_name: formData.customer_name || null,
            status: formData.status || "planned",
            totalAmount: 0,
            total_amount: 0,
            itemsCount: orderItems.length,
            items_count: orderItems.length,
            totalQuantity,
            total_quantity: totalQuantity,
            currency: "TRY",
            dueDate,
            due_date: formData.due_date || null,
            notes: formData.notes || null,
            deductMaterials: formData.deductMaterials,
            priority: formData.priority,
          },
          user.id,
          true
        );

        const existingItems = await getOrderItems(order.id);
        for (const existingItem of existingItems) {
          await deleteDoc(doc(firestore, "orders", order.id, "items", existingItem.id));
        }
        const itemsCollection = collection(firestore, "orders", order.id, "items");
        for (const item of orderItems) {
          await addDoc(itemsCollection, {
            productId: item.product_id || null,
            product_id: item.product_id || null,
            productName: item.product_name || null,
            product_name: item.product_name || null,
            quantity: item.quantity,
            unitPrice: 0,
            unit_price: 0,
            total: 0,
          });
        }

        toast.success("Üretim siparişi başarıyla güncellendi");
      } else {
        await createOrder({
          orderNumber: formData.order_number,
          order_number: formData.order_number,
          customerId: formData.customer_id || null,
          customer_id: formData.customer_id || null,
          customerName: formData.customer_name || null,
          customer_name: formData.customer_name || null,
          status: formData.status || "planned",
          totalAmount: 0,
          total_amount: 0,
          currency: "TRY",
          dueDate,
          due_date: formData.due_date || null,
          notes: formData.notes || null,
          itemsCount: orderItems.length,
          items_count: orderItems.length,
          totalQuantity,
          total_quantity: totalQuantity,
          createdBy: user.id,
          created_by: user.id,
          deductMaterials: formData.deductMaterials,
          priority: formData.priority,
        }, orderItems);

        toast.success("Üretim siparişi oluşturuldu");
      }

      onSuccess();
      onOpenChange(false);
      if (!order) resetForm();
    } catch (error: unknown) {
      toast.error("Hata: " + (error instanceof Error ? error.message : "Bilinmeyen hata"));
    } finally {
      setLoading(false);
    }
  };

  const statusLabel = (status: string) => {
    const map: Record<string, string> = {
      planned: "Planlanan",
      in_production: "Üretimde",
      quality_check: "Kalite Kontrol",
      completed: "Tamamlandı",
      on_hold: "Beklemede",
    };
    return map[status] || status;
  };

  const priorityLabel = (priority: number) => {
    const found = PRIORITY_OPTIONS.find((p) => p.value === priority);
    return found ? found.label : "Belirtilmemiş";
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="app-dialog-shell max-w-3xl">
          <DialogTitle className="sr-only">
            {order ? "Üretim Siparişi Düzenle" : "Yeni Üretim Siparişi"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {order ? "Üretim siparişi bilgilerini düzenleyin" : "Üretim için yeni bir sipariş oluşturun"}
          </DialogDescription>

          <div className="flex flex-col flex-1 min-h-0">
            {/* Header */}
            <DialogHeader className="p-3 sm:p-4 pr-10 sm:pr-12 border-b bg-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-[15px] sm:text-[17px] font-semibold text-foreground truncate">
                    {order ? "Üretim Siparişi Düzenle" : "Yeni Üretim Siparişi"}
                  </h2>
                </div>
              </div>
              {/* Step Indicator */}
              <StepIndicator currentStep={step} steps={STEPS} />
            </DialogHeader>

            {/* Content */}
            <div className="app-dialog-scroll bg-gray-50/30">
              <div className="p-3 sm:p-5">

                {/* STEP 1: Order Details */}
                {step === 1 && (
                  <div className="space-y-4">
                    <Card className="rounded-xl shadow-sm border bg-white">
                      <CardHeader className="p-4 sm:p-5 border-b">
                        <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                          <Package className="h-4 w-4 text-primary" />
                          Sipariş Bilgileri
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-5 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Order Number */}
                          <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm font-medium" showRequired>
                              Sipariş Numarası
                            </Label>
                            <div className="flex gap-2">
                              <Input
                                value={formData.order_number}
                                onChange={(e) => {
                                  setOrderNumberTouched(true);
                                  setFormData((prev) => ({ ...prev, order_number: e.target.value }));
                                }}
                                placeholder="PROD-20240101-0001"
                                className={cn(
                                  "h-10 text-sm",
                                  !formData.order_number && orderNumberTouched && "border-destructive"
                                )}
                                required
                              />
                              <Button
                                type="button" variant="outline" size="icon"
                                onClick={handleRegenerateOrderNumber}
                                title="Numarayı yenile"
                                className="h-10 w-10 hover:bg-primary/5"
                              >
                                <RefreshCcw className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* Customer */}
                          <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm font-medium" showRequired>
                              Müşteri
                            </Label>
                            <CustomerCombobox
                              value={formData.customer_id}
                              onChange={handleCustomerChange}
                              placeholder="Müşteri seçin veya ekleyin"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Due Date */}
                          <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm font-medium">
                              Termin Tarihi
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal h-10 text-xs sm:text-sm",
                                    !formData.due_date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {formData.due_date
                                    ? format(new Date(formData.due_date), "d MMMM yyyy", { locale: tr })
                                    : "Tarih seçin"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={formData.due_date ? new Date(formData.due_date) : undefined}
                                  onSelect={(date) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      due_date: date ? date.toISOString().split("T")[0] : "",
                                    }))
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Priority */}
                          <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm font-medium">Öncelik</Label>
                            <Select
                              value={formData.priority?.toString() || "0"}
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, priority: parseInt(value) || 0 }))}
                            >
                              <SelectTrigger className="h-10 text-xs sm:text-sm">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {PRIORITY_OPTIONS.map((option) => (
                                  <SelectItem key={option.value} value={option.value.toString()}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label className="text-xs sm:text-sm font-medium">Durum</Label>
                            <Select
                              value={formData.status}
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value as FirebaseOrder["status"] }))}
                            >
                              <SelectTrigger className="h-10 text-xs sm:text-sm">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="planned">Planlanan</SelectItem>
                                <SelectItem value="in_production">Üretimde</SelectItem>
                                <SelectItem value="quality_check">Kalite Kontrol</SelectItem>
                                <SelectItem value="completed">Tamamlandı</SelectItem>
                                <SelectItem value="on_hold">Beklemede</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="space-y-1.5">
                          <Label className="text-xs sm:text-sm font-medium">Notlar</Label>
                          <Textarea
                            value={formData.notes}
                            onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                            rows={3}
                            placeholder="Sipariş ile ilgili notlarınızı yazabilirsiniz..."
                            className="text-sm resize-none"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Customer Summary */}
                    {customerDetails && (
                      <Card className="rounded-xl shadow-sm border bg-white">
                        <CardHeader className="p-4 sm:p-5 border-b">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                              <User className="h-4 w-4 text-primary" />
                              Müşteri Özeti
                            </CardTitle>
                            <Button
                              type="button" variant="outline" size="sm"
                              className="gap-1.5 h-8 text-xs"
                              onClick={() => setCustomerDetailModalOpen(true)}
                            >
                              <Pencil className="h-3 w-3" />
                              Düzenle
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-5">
                          {customerDetailsLoading ? (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground py-4 justify-center">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Yükleniyor...
                            </div>
                          ) : (
                            <div className="grid gap-3 text-sm sm:grid-cols-2">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Müşteri</p>
                                <p className="font-medium">{customerDetails.name}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Şirket</p>
                                <p className="font-medium">{customerDetails.company || "—"}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">E-posta</p>
                                <p className="font-medium">{customerDetails.email || "—"}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Telefon</p>
                                <p className="font-medium">{customerDetails.phone || "—"}</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* STEP 2: Products */}
                {step === 2 && (
                  <div className="space-y-4">
                    <Card className="rounded-xl shadow-sm border bg-white">
                      <CardHeader className="p-4 sm:p-5 border-b flex flex-row items-center justify-between">
                        <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4 text-primary" />
                          Ürünler
                        </CardTitle>
                        <Button variant="outline" onClick={handleAddItem} size="sm" className="gap-1.5 h-8 text-xs">
                          <Plus className="h-3.5 w-3.5" />
                          Ürün Ekle
                        </Button>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-5">
                        <div className="space-y-3">
                          {productItems.map((item, index) => (
                            <div
                              key={index}
                              className={cn(
                                "p-3 sm:p-4 rounded-lg border transition-all hover:shadow-sm",
                                item.is_manual && "border-primary/40 bg-primary/5",
                                !item.is_manual && item.product_id && "border-emerald-500/30 bg-emerald-50/50",
                                !item.product_id && !item.is_manual && "border-gray-200 bg-gray-50/50"
                              )}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                                    {index + 1}
                                  </div>
                                  {item.is_manual && (
                                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 text-[10px]">
                                      Manuel
                                    </Badge>
                                  )}
                                  {!item.is_manual && item.product_id && (
                                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-700 bg-emerald-50 text-[10px]">
                                      Kayıtlı
                                    </Badge>
                                  )}
                                </div>
                                {productItems.length > 1 && (
                                  <Button
                                    type="button" variant="ghost" size="icon"
                                    onClick={() => handleRemoveItem(index)}
                                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                                <div className="col-span-1 sm:col-span-5 space-y-1.5">
                                  <Label className="text-xs font-medium" showRequired>Ürün/Hizmet</Label>
                                  {item.is_manual ? (
                                    <Input
                                      placeholder="Ürün/Hizmet adı girin"
                                      value={item.product_name}
                                      onChange={(e) => updateItem(index, "product_name", e.target.value)}
                                      className="h-10 text-xs sm:text-sm"
                                    />
                                  ) : (
                                    <ProductSelector
                                      products={products}
                                      value={item.product_id}
                                      onSelect={(value) => updateItem(index, "product_id", value)}
                                      onRefreshProducts={fetchProducts}
                                    />
                                  )}
                                </div>

                                <div className="col-span-1 sm:col-span-3 space-y-1.5">
                                  <Label className="text-xs font-medium" showRequired>Miktar</Label>
                                  <Input
                                    type="number"
                                    min={1}
                                    value={item.quantity || ""}
                                    onChange={(e) => updateItem(index, "quantity", e.target.value)}
                                    className="h-10 text-xs sm:text-sm"
                                    placeholder="1"
                                  />
                                </div>

                                <div className="col-span-1 sm:col-span-4 space-y-1.5">
                                  <Label className="text-xs font-medium">Birim</Label>
                                  <Select
                                    value={item.unit}
                                    onValueChange={(value) => updateItem(index, "unit", value)}
                                  >
                                    <SelectTrigger className="h-10 text-xs sm:text-sm">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Adet">Adet</SelectItem>
                                      <SelectItem value="Kg">Kg</SelectItem>
                                      <SelectItem value="Lt">Lt</SelectItem>
                                      <SelectItem value="Mt">Mt</SelectItem>
                                      <SelectItem value="M²">M²</SelectItem>
                                      <SelectItem value="Paket">Paket</SelectItem>
                                      <SelectItem value="Kutu">Kutu</SelectItem>
                                      <SelectItem value="Takım">Takım</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Summary */}
                        <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-muted-foreground">
                          <span>{lineItemCount} ürün</span>
                          <span>Toplam: {totalQuantity} adet</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* STEP 3: Review & Confirm */}
                {step === 3 && (
                  <div className="space-y-4">
                    <Card className="rounded-xl shadow-sm border bg-white">
                      <CardHeader className="p-4 sm:p-5 border-b">
                        <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Sipariş Özeti
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-5 space-y-5">
                        {/* Order Info */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sipariş Bilgileri</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground text-xs">Sipariş No</span>
                              <p className="font-medium">{formData.order_number}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground text-xs">Müşteri</span>
                              <p className="font-medium">{formData.customer_name || "—"}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground text-xs">Termin Tarihi</span>
                              <p className="font-medium">
                                {formData.due_date
                                  ? format(new Date(formData.due_date), "d MMMM yyyy", { locale: tr })
                                  : "Belirtilmemiş"}
                              </p>
                            </div>
                            <div>
                              <span className="text-muted-foreground text-xs">Öncelik</span>
                              <p className="font-medium">{priorityLabel(formData.priority)}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground text-xs">Durum</span>
                              <p className="font-medium">{statusLabel(formData.status)}</p>
                            </div>
                          </div>
                          {formData.notes && (
                            <div>
                              <span className="text-muted-foreground text-xs">Notlar</span>
                              <p className="text-sm mt-1 bg-gray-50 p-2 rounded-md">{formData.notes}</p>
                            </div>
                          )}
                        </div>

                        {/* Products */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ürünler ({lineItemCount})</h4>
                          <div className="divide-y rounded-lg border">
                            {validItems.map((item, index) => (
                              <div key={index} className="flex items-center justify-between p-3 text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                                    {index + 1}
                                  </div>
                                  <span className="font-medium">{item.product_name}</span>
                                  {item.is_manual && (
                                    <Badge variant="outline" className="text-[9px] px-1.5 py-0">Manuel</Badge>
                                  )}
                                </div>
                                <span className="text-muted-foreground">
                                  {item.quantity} {item.unit}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-end text-sm font-medium pt-1">
                            Toplam: {totalQuantity} adet
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
                onClick={handleBack}
                disabled={step === 1}
                className="gap-1.5 h-9 text-xs sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Geri
              </Button>

              <div className="flex gap-2">
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
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
                        <Save className="h-4 w-4" />
                        {order ? "Güncelle" : "Sipariş Oluştur"}
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Customer Detail Modal */}
      {customerDetailModalOpen && customerDetails && (
        <CustomerDetailModal
          customer={customerDetails}
          open={customerDetailModalOpen}
          onOpenChange={setCustomerDetailModalOpen}
          onUpdate={handleCustomerUpdate}
        />
      )}
    </>
  );
};
