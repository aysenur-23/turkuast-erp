import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { createCustomer } from "@/services/firebase/customerService";
import { createCustomerNote } from "@/services/firebase/customerNoteService";
import { normalizePhone } from "@/utils/phoneNormalizer";
import { useAuth } from "@/contexts/AuthContext";
import { User, Loader2, X, Save } from "lucide-react";

interface CreateCustomerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const CreateCustomerDialog = ({ open, onOpenChange, onSuccess }: CreateCustomerDialogProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    tax_number: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof typeof formData, boolean>>>({});

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      tax_number: "",
      notes: "",
    });
    setErrors({});
    setTouched({});
  };

  // Form açıldığında veya kapandığında reset yap
  useEffect(() => {
    if (open) {
      resetForm();
    }
  }, [open]);

  const setFieldValue = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Sadece daha önce submit edilmişse (touched) hataları göster
    if (touched[field] && errors[field]) {
      setErrors((prev) => {
        const { [field]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof typeof formData, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "İsim alanı zorunludur.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Geçerli bir email adresi girin.";
    }

    if (formData.phone && formData.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Geçerli bir telefon numarası girin.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Tüm alanları touched olarak işaretle (validasyon yapıldığını göster)
      const allFields: (keyof typeof formData)[] = ['name', 'email', 'phone', 'company', 'address', 'tax_number', 'notes'];
      const newTouched: Partial<Record<keyof typeof formData, boolean>> = {};
      allFields.forEach(field => {
        newTouched[field] = true;
      });
      setTouched(newTouched);
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      if (!user) {
        toast.error("Oturumunuz sona erdi. Lütfen tekrar giriş yapın.");
        setLoading(false);
        return;
      }

      const newCustomer = await createCustomer({
        name: formData.name,
        company: formData.company || null,
        email: formData.email || null,
        phone: normalizePhone(formData.phone),
        address: formData.address || null,
        taxId: formData.tax_number || null,
        notes: formData.notes || null,
        createdBy: user.id,
      });

      // Eğer not varsa, bunu ayrı bir CustomerNote olarak da oluştur
      if (formData.notes && formData.notes.trim()) {
        try {
          await createCustomerNote({
            customerId: newCustomer.id,
            type: "general",
            title: "Müşteri Oluşturulurken Eklenen Not",
            content: formData.notes.trim(),
            createdBy: user.id,
          });
        } catch (noteError) {
          // Not oluşturma hatası kritik değil, sadece logla
          if (import.meta.env.DEV) {
            console.warn("Müşteri notu oluşturulamadı:", noteError);
          }
        }
      }

      toast.success("Müşteri başarıyla oluşturuldu");
      onSuccess();
      onOpenChange(false);
      resetForm();
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("Create customer error:", error);
      }
      toast.error(error instanceof Error ? error.message : "Müşteri oluşturulurken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="app-dialog-shell">
        {/* DialogTitle ve DialogDescription DialogContent'in direkt child'ı olmalı (Radix UI gereksinimi) */}
        <DialogDescription className="sr-only">
          Yeni müşteri eklemek için formu doldurun
        </DialogDescription>

        <div className="flex flex-col h-full min-h-0">
          {/* Header */}
          <DialogHeader className="p-4 border-b bg-white flex-shrink-0 relative pr-16">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <DialogTitle>
                  Yeni Müşteri
                </DialogTitle>
              </div>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-primary/20 hover:bg-primary/5 rounded-lg px-4 font-medium text-sm flex-shrink-0"
                  onClick={() => onOpenChange(false)}
                  disabled={loading}
                >
                  <X className="h-4 w-4 mr-2 flex-shrink-0" />
                  İptal
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-9 bg-primary hover:bg-primary/90 rounded-lg px-4 font-medium text-sm flex-shrink-0 text-white"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 mr-2 flex-shrink-0 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4 mr-2 flex-shrink-0" />
                  )}
                  Kaydet
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-hidden bg-gray-50/50 min-h-0 flex flex-col">
            <div className="flex-1 min-h-0 app-dialog-scroll">
              <form onSubmit={handleSubmit} className="space-y-2">
                <Card>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">Müşteri Bilgileri</h3>
                      <p className="text-sm text-muted-foreground">Temel müşteri bilgilerini girin</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" showRequired className="text-sm">İsim</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFieldValue("name", e.target.value)}
                          className="h-10 text-sm"
                          required
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm">Şirket</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFieldValue("company", e.target.value)}
                          className="h-10 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFieldValue("email", e.target.value)}
                          className="h-10 text-sm"
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">Telefon</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFieldValue("phone", e.target.value)}
                          className="h-10 text-sm"
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-sm">Adres</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFieldValue("address", e.target.value)}
                          rows={3}
                          className="min-h-[80px] resize-none text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tax_number" className="text-sm">Vergi No</Label>
                        <Input
                          id="tax_number"
                          value={formData.tax_number}
                          onChange={(e) => setFieldValue("tax_number", e.target.value)}
                          className="h-10 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-sm">Notlar</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFieldValue("notes", e.target.value)}
                        rows={4}
                        className="min-h-[100px] resize-none text-sm"
                        placeholder="Müşteri hakkında notlar..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
