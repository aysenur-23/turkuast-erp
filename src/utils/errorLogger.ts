/**
 * Error Logger Utility
 * Permission hatalarını ve işlem bilgilerini loglar
 */

interface OperationContext {
  operation: string; // "create", "update", "delete", "read", etc.
  collection?: string; // Firestore collection name
  documentId?: string; // Document ID if applicable
  userId?: string; // User ID attempting the operation
  data?: unknown; // Data being written (sanitized)
}

/**
 * Permission hatasını logla
 */
export const logPermissionError = (
  error: unknown,
  context: OperationContext
) => {
  const errorObj = error && typeof error === 'object' ? error as { code?: string | number; message?: string } : null;
  const errorInfo = {
    code: errorObj?.code || "unknown",
    message: errorObj?.message || "Unknown error",
    operation: context.operation,
    collection: context.collection,
    documentId: context.documentId,
    userId: context.userId,
    timestamp: new Date().toISOString(),
    // Data'yı sanitize et (sensitive bilgileri kaldır)
    data: sanitizeData(context.data),
  };

  if (import.meta.env.DEV) {
    console.error("🚫 Permission Error:", {
      ...errorInfo,
      fullError: error,
    });

    // Detaylı hata mesajı
    const detailedMessage = `
Permission Hatası Detayları:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
İşlem: ${context.operation}
Collection: ${context.collection || "N/A"}
Document ID: ${context.documentId || "N/A"}
Kullanıcı ID: ${context.userId || "N/A"}
Hata Kodu: ${errorInfo.code}
Hata Mesajı: ${errorInfo.message}
Zaman: ${errorInfo.timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    console.error(detailedMessage);

    // Firebase Console linki
    if (context.collection) {
      console.warn("📋 Firebase Console'da Security Rules'u kontrol edin:");
      console.warn(`   https://console.firebase.google.com/project/turkuast-erp/firestore/rules`);
      console.warn(`   Collection: ${context.collection}`);
      console.warn(`   Operation: ${context.operation}`);
    }
  }
};

/**
 * Data'yı sanitize et - sensitive bilgileri kaldır
 */
const sanitizeData = (data: unknown): unknown => {
  if (!data || typeof data !== "object") {
    return data;
  }

  const sensitiveFields = ["password", "token", "secret", "key", "apiKey"];
  const sanitized = { ...data };

  for (const field of sensitiveFields) {
    if (field in sanitized) {
      sanitized[field] = "[REDACTED]";
    }
  }

  // Nested objects için recursive
  for (const key in sanitized) {
    if (typeof sanitized[key] === "object" && sanitized[key] !== null) {
      sanitized[key] = sanitizeData(sanitized[key]);
    }
  }

  return sanitized;
};

/**
 * Permission hatasını yakala ve logla
 */
export const handlePermissionError = (
  error: unknown,
  context: OperationContext
): Error => {
  const errorObj = error && typeof error === 'object' ? error as { code?: string | number; message?: string } : null;
  // Permission hatası kontrolü
  if (
    errorObj?.code === "permission-denied" ||
    errorObj?.code === 7 || // PERMISSION_DENIED
    errorObj?.message?.includes("Missing or insufficient permissions") ||
    errorObj?.message?.includes("permission-denied") ||
    errorObj?.message?.includes("PERMISSION_DENIED")
  ) {
    logPermissionError(error, context);
    
    // Kullanıcı dostu hata mesajı
    const operationNames: Record<string, string> = {
      create: "oluşturma",
      update: "güncelleme",
      delete: "silme",
      read: "okuma",
    };
    
    const operationName = operationNames[context.operation] || context.operation;
    const userMessage = `Yetkiniz yok. Bu işlemi yapmak için ekip lideri veya yöneticiye ulaşabilirsiniz.`;
    
    return new Error(userMessage);
  }

  // Diğer hatalar için normal error döndür
  return error instanceof Error ? error : new Error(errorObj?.message || "Bilinmeyen hata");
};

/**
 * Permission hatasını kontrol et ve kullanıcı dostu mesaj döndür
 */
export const isPermissionError = (error: unknown): boolean => {
  const errorObj = error && typeof error === 'object' ? error as { code?: string | number; message?: string } : null;
  return (
    errorObj?.code === "permission-denied" ||
    errorObj?.code === 7 ||
    errorObj?.message?.includes("Missing or insufficient permissions") ||
    errorObj?.message?.includes("permission-denied") ||
    errorObj?.message?.includes("PERMISSION_DENIED")
  );
};

/**
 * Kullanıcı dostu permission hata mesajı
 */
export const getPermissionErrorMessage = (): string => {
  return "Yetkiniz yok. Bu işlemi yapmak için ekip lideri veya yöneticiye ulaşabilirsiniz.";
};

