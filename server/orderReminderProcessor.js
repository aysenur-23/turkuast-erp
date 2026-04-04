import admin from "firebase-admin";

const REMINDER_ROLES = ["super_admin", "main_admin", "manager", "team_leader"];

const parseDateValue = (value) => {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (value instanceof admin.firestore.Timestamp) return value.toDate();
  if (typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  if (typeof value === "object" && value && "seconds" in value) {
    const seconds = value.seconds;
    if (typeof seconds === "number") {
      const parsed = new Date(seconds * 1000);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
  }
  return null;
};

const getPaymentMethodLabel = (value) => {
  const labels = {
    unspecified: "Belirtilmedi",
    cash: "Nakit",
    credit_card: "Kredi Kartı",
    bank_transfer: "Havale / EFT",
    check: "Çek",
    installment: "Taksitli Ödeme",
    open_account: "Cari Hesap",
    other: "Diğer",
  };

  return labels[value] || "Belirtilmedi";
};

const isPaymentReminderCandidate = (order, now) => {
  const paymentReceived = order.paymentReceived ?? order.payment_received ?? false;
  const paymentTermMonths = Number(order.paymentTermMonths ?? order.payment_term_months ?? 0);
  const dueDate = parseDateValue(order.dueDate ?? order.due_date);
  const reminderSentAt = parseDateValue(
    order.paymentReminderSentAt ?? order.payment_reminder_sent_at,
  );

  if (paymentReceived) return false;
  if (paymentTermMonths <= 0) return false;
  if (!dueDate) return false;
  if (reminderSentAt) return false;

  return dueDate.getTime() <= now.getTime();
};

const buildNotificationPayload = (order, now) => {
  const orderNumber = order.orderNumber || order.order_number || order.id;
  const customerName = order.customerName || order.customer_name || "Belirtilmemiş müşteri";
  const dueDate = parseDateValue(order.dueDate ?? order.due_date);
  const totalAmount = Number(order.totalAmount ?? order.total_amount ?? 0);
  const currency = order.currency || "TRY";
  const formattedTotal = totalAmount.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedDueDate = dueDate
    ? dueDate.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "belirtilmedi";
  const paymentMethodLabel = getPaymentMethodLabel(
    order.paymentMethod ?? order.payment_method ?? "unspecified",
  );

  const title = "Sipariş ödeme vadesi geldi";
  const message = [
    `"${orderNumber}" numaralı siparişin ödeme vadesi doldu.`,
    `Müşteri: ${customerName}`,
    `Tutar: ${formattedTotal} ${currency === "TRY" ? "TL" : currency}`,
    `Yöntem: ${paymentMethodLabel}`,
    `Vade Tarihi: ${formattedDueDate}`,
  ].join("\n");

  return {
    title,
    message,
    metadata: {
      orderNumber,
      dueDate: dueDate ? dueDate.toISOString() : null,
      paymentMethod: order.paymentMethod ?? order.payment_method ?? null,
      paymentTermMonths: order.paymentTermMonths ?? order.payment_term_months ?? null,
      updatedAt: now.toISOString(),
      reminderType: "payment_due",
    },
  };
};

export const createFirebaseAdminApp = () => {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.VITE_FIREBASE_PROJECT_ID ||
    "turkuast-erp";

  const serviceAccountJson =
    process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
    null;

  const serviceAccountBase64 =
    process.env.FIREBASE_SERVICE_ACCOUNT_BASE64 ||
    process.env.GOOGLE_SERVICE_ACCOUNT_BASE64 ||
    null;

  const hasApplicationDefaultCredentials = !!process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!serviceAccountJson && !serviceAccountBase64 && !hasApplicationDefaultCredentials) {
    return null;
  }

  if (serviceAccountJson || serviceAccountBase64) {
    const rawJson = serviceAccountJson
      ? serviceAccountJson
      : Buffer.from(serviceAccountBase64, "base64").toString("utf8");

    const parsed = JSON.parse(rawJson);
    return admin.initializeApp({
      credential: admin.credential.cert(parsed),
      projectId,
    });
  }

  return admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId,
  });
};

export const processDueOrderPaymentRemindersServer = async ({ sendEmail }) => {
  const app = createFirebaseAdminApp();
  if (!app) {
    return { enabled: false, processed: 0, reason: "firebase-admin-not-configured" };
  }

  const db = admin.firestore(app);
  const now = new Date();
  const ordersSnapshot = await db.collection("orders").get();
  const usersSnapshot = await db.collection("users").get();
  const users = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  let processed = 0;

  for (const orderDoc of ordersSnapshot.docs) {
    const baseOrder = { id: orderDoc.id, ...orderDoc.data() };
    if (!isPaymentReminderCandidate(baseOrder, now)) {
      continue;
    }

    const orderRef = db.collection("orders").doc(orderDoc.id);
    const claimed = await db.runTransaction(async (transaction) => {
      const freshSnap = await transaction.get(orderRef);
      if (!freshSnap.exists) {
        return false;
      }

      const freshOrder = { id: freshSnap.id, ...freshSnap.data() };
      if (!isPaymentReminderCandidate(freshOrder, now)) {
        return false;
      }

      transaction.update(orderRef, {
        paymentReminderSentAt: admin.firestore.Timestamp.fromDate(now),
        payment_reminder_sent_at: now.toISOString(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        updated_at: now.toISOString(),
      });

      return true;
    });

    if (!claimed) {
      continue;
    }

    const order = { id: orderDoc.id, ...orderDoc.data() };
    const payload = buildNotificationPayload(order, now);
    const recipients = users.filter((entry) => {
      if (entry.id === order.createdBy || entry.id === order.created_by) {
        return true;
      }

      const roles = Array.isArray(entry.role) ? entry.role : [];
      return roles.some((role) => REMINDER_ROLES.includes(role));
    });

    const uniqueRecipients = Array.from(
      new Map(recipients.map((entry) => [entry.id, entry])).values(),
    );

    for (const recipient of uniqueRecipients) {
      await db.collection("notifications").add({
        userId: recipient.id,
        type: "order_updated",
        title: payload.title,
        message: payload.message,
        read: false,
        relatedId: order.id,
        metadata: payload.metadata,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      if (recipient.email && typeof sendEmail === "function") {
        await sendEmail({
          to: recipient.email,
          subject: `Turkuast ERP - ${payload.title}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; color: #1f2937;">
              <div style="background: #2563eb; color: white; border-radius: 12px 12px 0 0; padding: 24px;">
                <h1 style="margin: 0; font-size: 22px;">Turkuast ERP</h1>
              </div>
              <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
                <h2 style="margin-top: 0; font-size: 20px;">${payload.title}</h2>
                <p style="white-space: pre-line; line-height: 1.7; margin-bottom: 24px;">${payload.message}</p>
                <a href="${process.env.VITE_APP_URL || "https://turkuast-erp.web.app"}/orders" style="display: inline-block; padding: 12px 20px; background: #2563eb; color: white; text-decoration: none; border-radius: 8px;">Siparişi Görüntüle</a>
              </div>
            </div>
          `.trim(),
        });
      }
    }

    processed += 1;
  }

  return { enabled: true, processed };
};
