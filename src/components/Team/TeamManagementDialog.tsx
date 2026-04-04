import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Loader2, Save, Trash2 } from "lucide-react";
import { Department, createDepartment, updateDepartment, deleteDepartment } from "@/services/firebase/departmentService";
import { UserProfile } from "@/services/firebase/authService";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

interface TeamManagementDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    mode: "create" | "edit" | "manage";
    department?: Department | null;
    users?: UserProfile[];
    onSuccess?: () => void;
}

export const TeamManagementDialog = ({
    open,
    onOpenChange,
    mode: initialMode,
    department,
    users = [],
    onSuccess
}: TeamManagementDialogProps) => {
    const { user: currentUser } = useAuth();
    const [mode, setMode] = useState(initialMode);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        managerId: "none"
    });

    useEffect(() => {
        if (department && mode === "edit") {
            setFormData({
                name: department.name,
                description: department.description || "",
                managerId: department.managerId || "none"
            });
        } else {
            setFormData({
                name: "",
                description: "",
                managerId: "none"
            });
        }
    }, [department, mode]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error("Ekip adı zorunludur");
            return;
        }

        setLoading(true);
        try {
            if (mode === "create") {
                await createDepartment(
                    formData.name,
                    formData.description || null,
                    formData.managerId === "none" ? null : formData.managerId,
                    currentUser?.id || null
                );
                toast.success("Yeni ekip başarıyla oluşturuldu");
            } else if (mode === "edit" && department) {
                await updateDepartment(
                    department.id,
                    {
                        name: formData.name,
                        description: formData.description || null,
                        managerId: formData.managerId === "none" ? null : formData.managerId
                    },
                    currentUser?.id || null
                );
                toast.success("Ekip başarıyla güncellendi");
            }
            onSuccess?.();
            onOpenChange(false);
        } catch (error: any) {
            toast.error("İşlem başarısız: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!department) return;
        if (!confirm(`${department.name} ekibini silmek istediğinize emin misiniz?`)) return;

        setLoading(true);
        try {
            await deleteDepartment(department.id, currentUser?.id || null);
            toast.success("Ekip silindi");
            onSuccess?.();
            onOpenChange(false);
        } catch (error: any) {
            toast.error("Silme işlemi başarısız: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="app-dialog-shell !w-[95vw] sm:!w-[550px] !max-h-[90vh] flex flex-col p-0 overflow-hidden">
                <DialogHeader className="p-4 sm:p-6 border-b bg-white flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <DialogTitle className="text-lg">
                                {mode === "create" ? "Yeni Ekip Ekle" : "Ekibi Düzenle"}
                            </DialogTitle>
                            <DialogDescription className="text-xs sm:text-sm mt-1">
                                {mode === "create"
                                    ? "Sistemde yeni bir çalışma ekibi oluşturun."
                                    : "Ekip bilgilerini güncelleyin veya sorumlu yöneticiyi değiştirin."}
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto app-dialog-scroll bg-gray-50/30">
                    <form id="team-management-form" onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="team-name" className="text-sm font-medium">Ekip Adı</Label>
                            <Input
                                id="team-name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Örn: Yazılım Ekibi"
                                required
                                className="h-10"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="team-desc" className="text-sm font-medium">Açıklama (Opsiyonel)</Label>
                            <Textarea
                                id="team-desc"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Ekip hakkında kısa bilgi..."
                                rows={4}
                                className="resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="team-manager" className="text-sm font-medium">Ekip Yöneticisi</Label>
                            <Select
                                value={formData.managerId}
                                onValueChange={(value) => setFormData({ ...formData, managerId: value })}
                            >
                                <SelectTrigger id="team-manager" className="h-10">
                                    <SelectValue placeholder="Yönetici seçin" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">Yönetici Atanmadı</SelectItem>
                                    {users.filter(u => u.role?.includes("team_leader") || u.role?.includes("admin") || u.role?.includes("main_admin")).map((u) => (
                                        <SelectItem key={u.id} value={u.id}>
                                            {u.fullName || u.displayName || u.email}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <p className="text-[11px] text-muted-foreground bg-blue-50/50 p-2 rounded border border-blue-100/50">
                                Sadece yönetici veya ekip lideri yetkisi olan personeller seçilebilir.
                            </p>
                        </div>
                    </form>
                </div>

                <DialogFooter className="p-4 border-t bg-white flex-shrink-0 gap-2 sm:gap-0">
                    {mode === "edit" && (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={handleDelete}
                            disabled={loading}
                            className="mr-auto text-destructive hover:text-destructive hover:bg-destructive/10 h-10 px-4"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Ekibi Sil
                        </Button>
                    )}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={loading}
                            className="flex-1 sm:flex-none h-10"
                        >
                            İptal
                        </Button>
                        <Button
                            type="submit"
                            form="team-management-form"
                            disabled={loading}
                            className="flex-1 sm:flex-none h-10 gap-2 px-6"
                        >
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            {mode === "create" ? "Ekibi Oluştur" : "Değişiklikleri Kaydet"}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    );
};
