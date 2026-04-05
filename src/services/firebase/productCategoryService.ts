import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
  doc,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export interface ProductCategory {
  id: string;
  name: string;
  isDefault: boolean;
  createdAt: Timestamp;
  createdBy: string;
}

const COLLECTION = "productCategories";

const DEFAULT_CATEGORIES = [
  "Taşınabilir Güç Paketleri",
  "Kabin Tipi Güç Paketleri",
  "Araç Tipi Güç Paketleri",
  "Endüstriyel Güç Paketleri",
  "Güneş Enerji Sistemleri",
];

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  try {
    const ref = collection(firestore, COLLECTION);
    const snap = await getDocs(query(ref, orderBy("name", "asc")));

    const firestoreCategories: ProductCategory[] = snap.docs.map((d) => ({
      id: d.id,
      name: d.data().name || "",
      isDefault: d.data().isDefault ?? false,
      createdAt: d.data().createdAt || Timestamp.now(),
      createdBy: d.data().createdBy || "",
    }));

    if (firestoreCategories.length > 0) {
      return firestoreCategories;
    }

    // Firestore boşsa varsayılanları döndür (henüz seed edilmemiş)
    return DEFAULT_CATEGORIES.map((name, i) => ({
      id: `default_${i}`,
      name,
      isDefault: true,
      createdAt: Timestamp.now(),
      createdBy: "system",
    }));
  } catch {
    return DEFAULT_CATEGORIES.map((name, i) => ({
      id: `default_${i}`,
      name,
      isDefault: true,
      createdAt: Timestamp.now(),
      createdBy: "system",
    }));
  }
};

export const createProductCategory = async (
  name: string,
  userId: string
): Promise<ProductCategory> => {
  const ref = collection(firestore, COLLECTION);
  const docRef = await addDoc(ref, {
    name: name.trim(),
    isDefault: false,
    createdAt: serverTimestamp(),
    createdBy: userId,
  });
  return {
    id: docRef.id,
    name: name.trim(),
    isDefault: false,
    createdAt: Timestamp.now(),
    createdBy: userId,
  };
};

export const updateProductCategory = async (
  id: string,
  name: string
): Promise<void> => {
  await updateDoc(doc(firestore, COLLECTION, id), {
    name: name.trim(),
    updatedAt: serverTimestamp(),
  });
};

export const deleteProductCategory = async (id: string): Promise<void> => {
  await deleteDoc(doc(firestore, COLLECTION, id));
};

/** İlk çalışmada varsayılan kategorileri Firestore'a yaz */
export const seedDefaultProductCategories = async (userId: string): Promise<void> => {
  const ref = collection(firestore, COLLECTION);
  const snap = await getDocs(ref);
  if (snap.empty) {
    for (const name of DEFAULT_CATEGORIES) {
      await addDoc(ref, {
        name,
        isDefault: true,
        createdAt: serverTimestamp(),
        createdBy: userId,
      });
    }
  }
};
