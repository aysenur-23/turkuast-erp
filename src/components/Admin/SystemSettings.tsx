import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Database, Bell, Lock, Activity, Loader2, Tag, Pencil, Trash2, Plus, Check, X as XIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  getAdminSettings,
  updateAdminSettings,
  AdminSettings,
} from "@/services/firebase/adminSettingsService";
import {
  getProductCategories,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
  seedDefaultProductCategories,
  ProductCategory,
} from "@/services/firebase/productCategoryService";
import { Timestamp } from "firebase/firestore";

import { downloadDatabaseBackup } from "@/utils/backupUtils";

export const SystemSettings = () => {
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [actionLoading, setActionLoading] = useState({
    backup: false,
    restore: false,
    cleanup: false,
  });

  // Category CRUD state
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [addingCategory, setAddingCategory] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [savingCategoryId, setSavingCategoryId] = useState<string | null>(null);
  const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getAdminSettings();
        setSettings(data);
      } catch (error: unknown) {
        toast.error("Sistem ayarları yüklenemedi: " + (error instanceof Error ? error.message : String(error)));
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        if (user?.id) await seedDefaultProductCategories(user.id);
        const cats = await getProductCategories();
        setCategories(cats);
      } catch {
        toast.error("Kategoriler yüklenemedi");
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, [user?.id]);

  const handleAddCategory = async () => {
    if (!newCategoryName.trim() || !user?.id) return;
    setAddingCategory(true);
    try {
      const created = await createProductCategory(newCategoryName.trim(), user.id);
      setCategories((prev) => [...prev, created].sort((a, b) => a.name.localeCompare(b.name)));
      setNewCategoryName("");
      toast.success("Kategori eklendi");
    } catch {
      toast.error("Kategori eklenemedi");
    } finally {
      setAddingCategory(false);
    }
  };

  const handleEditSave = async (id: string) => {
    if (!editingName.trim()) return;
    setSavingCategoryId(id);
    try {
      await updateProductCategory(id, editingName.trim());
      setCategories((prev) =>
        prev.map((c) => (c.id === id ? { ...c, name: editingName.trim() } : c)).sort((a, b) => a.name.localeCompare(b.name))
      );
      setEditingId(null);
      toast.success("Kategori güncellendi");
    } catch {
      toast.error("Kategori güncellenemedi");
    } finally {
      setSavingCategoryId(null);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingCategoryId(id);
    try {
      await deleteProductCategory(id);
      setCategories((prev) => prev.filter((c) => c.id !== id));
      toast.success("Kategori silindi");
    } catch {
      toast.error("Kategori silinemedi");
    } finally {
      setDeletingCategoryId(null);
    }
  };

  const handleSaveAll = async () => {
    if (!user?.id || !settings) {
      toast.error("Oturumunuz sona erdi. Lütfen tekrar giriş yapın.");
      return;
    }

    setSaving(true);
    try {
      await updateAdminSettings(settings, user.id);
      toast.success("Sistem ayarları kaydedildi");
    } catch (error: unknown) {
      toast.error("Sistem ayarları kaydedilemedi: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setSaving(false);
    }
  };

  const handleBackupAction = async (
    type: "backup" | "restore" | "cleanup"
  ) => {
    if (!user?.id || !settings) return;

    setActionLoading((prev) => ({ ...prev, [type]: true }));
    try {
      if (type === "backup") {
        await downloadDatabaseBackup();
        
        // Update timestamp
        const updates: Partial<AdminSettings> = { lastBackupAt: Timestamp.now() };
        await updateAdminSettings(updates, user.id);
        setSettings((prev) => prev ? { ...prev, ...updates } : null);
      } else {
        const updates: Partial<AdminSettings> = {};
        
        if (type === "restore") {
          updates.lastRestoreRequest = Timestamp.now();
        } else if (type === "cleanup") {
          updates.lastCleanupRequest = Timestamp.now();
        }
        
        await updateAdminSettings(updates, user.id);
        setSettings((prev) => prev ? { ...prev, ...updates } : null);
        
        const messages = {
          restore: "Geri yükleme isteği kaydedildi",
          cleanup: "Temizleme isteği kaydedildi",
        };
        toast.success(messages[type as "restore" | "cleanup"]);
      }
    } catch (error: unknown) {
      // Error handled in downloadDatabaseBackup or here
      if (type !== "backup") { // backup has its own toast
         toast.error("İşlem başarısız: " + (error instanceof Error ? error.message : String(error)));
      }
    } finally {
      setActionLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  if (!settings) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Genel Ayarlar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px] sm:text-[15px] leading-tight">
            <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Genel Ayarlar
          </CardTitle>
          <CardDescription className="text-[11px] sm:text-xs leading-snug">Sistem genelindeki temel yapılandırmalar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Bakım Modu</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Sistemi geçici olarak devre dışı bırak</p>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, maintenanceMode: checked } : null)}
            />
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Yeni Kayıtlar</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Yeni kullanıcı kayıtlarına izin ver</p>
            </div>
            <Switch
              checked={settings.allowNewRegistrations}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, allowNewRegistrations: checked } : null)}
            />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label className="text-[11px] sm:text-xs">Şirket Adı</Label>
            <Input
              value={settings.companyName}
              onChange={(e) => setSettings((prev) => prev ? { ...prev, companyName: e.target.value } : null)}
              className="min-h-[44px] sm:min-h-0 text-[14px] sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[11px] sm:text-xs">Destek Email</Label>
            <Input
              type="email"
              value={settings.supportEmail}
              onChange={(e) => setSettings((prev) => prev ? { ...prev, supportEmail: e.target.value } : null)}
              className="min-h-[44px] sm:min-h-0 text-[14px] sm:text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Bildirim Ayarları */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px] sm:text-[15px] leading-tight">
            <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Bildirim Ayarları
          </CardTitle>
          <CardDescription className="text-[11px] sm:text-xs leading-snug">Sistem bildirimleri ve uyarı yapılandırması</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Email Bildirimleri</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Önemli olaylarda email gönder</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, emailNotifications: checked } : null)}
            />
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Görev Bildirimleri</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Yeni görev atandığında bildir</p>
            </div>
            <Switch
              checked={settings.notifyTasks}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, notifyTasks: checked } : null)}
            />
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Üretim Bildirimleri</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Üretim durumu değişikliklerinde bildir</p>
            </div>
            <Switch
              checked={settings.notifyProduction}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, notifyProduction: checked } : null)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Güvenlik Ayarları */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px] sm:text-[15px] leading-tight">
            <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Güvenlik Ayarları
          </CardTitle>
          <CardDescription className="text-[11px] sm:text-xs leading-snug">Kimlik doğrulama ve güvenlik yapılandırması</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">İki Faktörlü Doğrulama</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Tüm kullanıcılar için zorunlu kıl</p>
            </div>
            <Switch
              checked={settings.twoFactorRequired}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, twoFactorRequired: checked } : null)}
            />
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Şifre Yenileme</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Şifrelerin düzenli olarak değiştirilmesini zorunlu kıl</p>
            </div>
            <Switch
              checked={settings.passwordRotationDays > 0}
              onCheckedChange={(checked) =>
                setSettings((prev) => prev ? { ...prev, passwordRotationDays: checked ? 90 : 0 } : null)
              }
            />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label className="text-[11px] sm:text-xs">Oturum Süresi (dakika)</Label>
            <Input
              type="number"
              min={60}
              value={settings.sessionTimeoutMinutes}
              onChange={(e) =>
                setSettings((prev) => prev ? { ...prev, sessionTimeoutMinutes: Number(e.target.value) || 0 } : null)
              }
              className="min-h-[44px] sm:min-h-0 text-[14px] sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[11px] sm:text-xs">Minimum Şifre Uzunluğu</Label>
            <Input
              type="number"
              min={6}
              value={settings.minPasswordLength}
              onChange={(e) =>
                setSettings((prev) => prev ? { ...prev, minPasswordLength: Number(e.target.value) || 0 } : null)
              }
              className="min-h-[44px] sm:min-h-0 text-[14px] sm:text-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Veritabanı Yönetimi */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px] sm:text-[15px] leading-tight">
            <Database className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Veritabanı Yönetimi
          </CardTitle>
          <CardDescription className="text-[11px] sm:text-xs leading-snug">Veri yedekleme ve bakım işlemleri</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="space-y-0.5 flex-1">
              <Label className="text-[11px] sm:text-xs">Otomatik Yedekleme</Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug">Günlük otomatik yedekleme yap</p>
            </div>
            <Switch
              checked={settings.autoBackup}
              onCheckedChange={(checked) => setSettings((prev) => prev ? { ...prev, autoBackup: checked } : null)}
            />
          </div>
          {settings.lastBackupAt && (
            <p className="text-xs text-muted-foreground">
              Son manuel yedek: {settings.lastBackupAt.toDate().toLocaleString("tr-TR")}
            </p>
          )}
          <Separator />
          <div className="flex flex-col sm:flex-row gap-2 sm:flex-wrap">
            <Button
              variant="outline"
              className="flex-1 sm:min-w-[150px] min-h-[44px] sm:min-h-0"
              onClick={() => handleBackupAction("backup")}
              disabled={actionLoading.backup}
            >
              <span className="text-xs sm:text-sm">{actionLoading.backup ? "Yedekleniyor..." : "Yedek Al"}</span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:min-w-[150px] min-h-[44px] sm:min-h-0"
              onClick={() => handleBackupAction("restore")}
              disabled={actionLoading.restore}
            >
              <span className="text-xs sm:text-sm">{actionLoading.restore ? "Talep Gönderiliyor..." : "Geri Yükle"}</span>
            </Button>
          </div>
          <Button
            variant="destructive"
            className="w-full min-h-[44px] sm:min-h-0"
            onClick={() => handleBackupAction("cleanup")}
            disabled={actionLoading.cleanup}
          >
            <span className="text-xs sm:text-sm">{actionLoading.cleanup ? "Temizleniyor..." : "Veritabanını Temizle"}</span>
          </Button>
        </CardContent>
      </Card>

      {/* Ürün Kategorileri */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px] sm:text-[15px] leading-tight">
            <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Ürün Kategorileri
          </CardTitle>
          <CardDescription className="text-[11px] sm:text-xs leading-snug">Ürünlerde kullanılan kategorileri yönetin</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Add new category */}
          <div className="flex gap-2">
            <Input
              placeholder="Yeni kategori adı..."
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleAddCategory(); }}
              className="min-h-[44px] sm:min-h-0 text-[14px] sm:text-sm flex-1"
            />
            <Button
              onClick={handleAddCategory}
              disabled={addingCategory || !newCategoryName.trim()}
              className="min-h-[44px] sm:min-h-0 shrink-0"
            >
              {addingCategory ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
              <span className="ml-1 hidden sm:inline text-xs">Ekle</span>
            </Button>
          </div>
          <Separator />
          {loadingCategories ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : categories.length === 0 ? (
            <p className="text-xs text-muted-foreground text-center py-4">Henüz kategori yok</p>
          ) : (
            <div className="space-y-1.5">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-2 rounded-md border px-3 py-2">
                  {editingId === cat.id ? (
                    <>
                      <Input
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleEditSave(cat.id);
                          if (e.key === "Escape") setEditingId(null);
                        }}
                        className="h-8 text-sm flex-1"
                        autoFocus
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-green-600 hover:text-green-700"
                        onClick={() => handleEditSave(cat.id)}
                        disabled={savingCategoryId === cat.id}
                      >
                        {savingCategoryId === cat.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => setEditingId(null)}
                      >
                        <XIcon className="h-3.5 w-3.5" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-sm truncate">{cat.name}</span>
                      {cat.isDefault && (
                        <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">varsayılan</span>
                      )}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 shrink-0"
                        onClick={() => { setEditingId(cat.id); setEditingName(cat.name); }}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 shrink-0 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(cat.id)}
                        disabled={deletingCategoryId === cat.id}
                      >
                        {deletingCategoryId === cat.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Trash2 className="h-3.5 w-3.5" />}
                      </Button>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg" onClick={handleSaveAll} disabled={saving} className="w-full sm:w-auto min-h-[44px] sm:min-h-0">
          <span className="text-xs sm:text-sm">{saving ? "Kaydediliyor..." : "Tüm Ayarları Kaydet"}</span>
        </Button>
      </div>
    </div>
  );
};
