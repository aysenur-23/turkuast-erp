import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
    getRawMaterialCategories,
    createRawMaterialCategory,
    updateRawMaterialCategory,
    deleteRawMaterialCategory,
    initializeRawMaterialCategories,
    RawMaterialCategory,
} from "@/services/firebase/materialCategoryService";
import { Plus, Pencil, Trash2, Tag, Loader2, RefreshCw } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/contexts/AuthContext";
import { collection, onSnapshot, Unsubscribe } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export const CategoryManagement = () => {
    const { user } = useAuth();
    const [categories, setCategories] = useState<RawMaterialCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [editingCat, setEditingCat] = useState<RawMaterialCategory | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [initializing, setInitializing] = useState(false);

    useEffect(() => {
        fetchCategories();

        // Real-time listener for categories
        let unsubscribe: Unsubscribe | null = null;
        if (firestore) {
            const categoriesRef = collection(firestore, "rawMaterialCategories");
            unsubscribe = onSnapshot(
                categoriesRef,
                () => {
                    fetchCategories();
                },
                (error) => {
                    if (import.meta.env.DEV) {
                        console.error("Categories snapshot error:", error);
                    }
                }
            );
        }

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    const fetchCategories = async () => {
        try {
            const data = await getRawMaterialCategories();
            setCategories(data);
        } catch (error: unknown) {
            toast.error("Kategoriler yüklenirken hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            if (editingCat) {
                await updateRawMaterialCategory(editingCat.id, name, user?.id);
                toast.success("Kategori güncellendi");
            } else {
                await createRawMaterialCategory(name, user?.id);
                toast.success("Kategori olusturuldu");
            }

            setOpen(false);
            setEditingCat(null);
            setName("");
            fetchCategories();
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : "Islem sirasinda hata olustu");
        }
    };

    const handleDelete = async (id: string) => {
        setDeletingId(id);
        try {
            await deleteRawMaterialCategory(id, user?.id);
            toast.success("Kategori silindi");
            fetchCategories();
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : "Silme hatasi olustu");
        } finally {
            setDeletingId(null);
        }
    };

    const handleInitialize = async () => {
        setInitializing(true);
        try {
            await initializeRawMaterialCategories(user?.id);
            toast.success("Varsayilan kategoriler senkronize edildi");
            fetchCategories();
        } catch (error: unknown) {
            toast.error("Senkronizasyon hatasi");
        } finally {
            setInitializing(false);
        }
    };

    const openEditDialog = (cat: RawMaterialCategory) => {
        setEditingCat(cat);
        setName(cat.name);
        setOpen(true);
    };

    const resetForm = () => {
        setEditingCat(null);
        setName("");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <span>Hammadde Kategorileri ({categories.length})</span>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <Button variant="outline" size="sm" onClick={handleInitialize} disabled={initializing}>
                                {initializing ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                                Varsayılanları Yükle
                            </Button>
                            <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) resetForm(); }}>
                                <DialogTrigger asChild>
                                    <Button size="sm">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Yeni Kategori
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="app-dialog-shell max-w-xl">
                                    <DialogHeader>
                                        <DialogTitle>
                                            {editingCat ? "Kategori Düzenle" : "Yeni Kategori"}
                                        </DialogTitle>
                                        <DialogDescription>
                                            Hammadde kategorisi bilgilerini girin.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="cat-name">Kategori Adi *</Label>
                                            <Input
                                                id="cat-name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="örn: Metal, Kimyasal"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                                Iptal
                                            </Button>
                                            <Button type="submit">
                                                {editingCat ? "Güncelle" : "Oluştur"}
                                            </Button>
                                        </div>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Kategori Adi</TableHead>
                                    <TableHead>Sistem Degeri</TableHead>
                                    <TableHead className="text-right">Islemler</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {categories.map((cat) => (
                                    <TableRow key={cat.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Tag className="h-4 w-4 text-muted-foreground" />
                                                <span className="font-medium">{cat.name}</span>
                                                {cat.id.startsWith("default_") && (
                                                    <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground ml-2">
                                                        Varsayilan (Salt Okunur)
                                                    </span>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                                                {cat.value}
                                            </code>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                {!cat.id.startsWith("default_") && (
                                                    <>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => openEditDialog(cat)}
                                                        >
                                                            <Pencil className="h-4 w-4" />
                                                        </Button>
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="text-destructive hover:bg-destructive/10"
                                                                    disabled={deletingId === cat.id}
                                                                >
                                                                    {deletingId === cat.id ? (
                                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                                    ) : (
                                                                        <Trash2 className="h-4 w-4" />
                                                                    )}
                                                                </Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Kategoriyi Sil</AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        "{cat.name}" kategorisini silmek istediginizden emin misiniz? Bu islem geri alinamaz.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Iptal</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() => handleDelete(cat.id)}
                                                                        className="bg-destructive hover:bg-destructive/90 text-white"
                                                                    >
                                                                        Sil
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {categories.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                                            Kategori bulunamadi
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};
