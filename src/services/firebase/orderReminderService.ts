import { doc, runTransaction, Timestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { getAllUsers } from "@/services/firebase/authService";
import { createNotification } from "@/services/firebase/notificationService";
import { Order, getOrders } from "@/services/firebase/orderService";
import { getOrderPaymentMethodLabel } from "@/utils/orderPayment";

const resolveReminderDate = (value?: unknown): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (value instanceof Timestamp) return value.toDate();
  if (typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  if (typeof value === "object" && value && "seconds" in value) {
    const seconds = (value as { seconds?: number }).seconds;
    if (typeof seconds === "number") {
      return new Date(seconds * 1000);
    }
  }
  return null;
};

const isPaymentReminderCandidate = (order: Order, now: Date): boolean => {
  const paymentStatus = order.paymentStatus || "unpaid";
  const hasMaturity = order.hasMaturity || false;
  const maturityDate = resolveReminderDate(order.maturityDate);
  const paymentTerms = order.paymentTerms || "";
  const dueDate = resolveReminderDate(order.dueDate || order.due_date);
  const reminderSentAt = resolveReminderDate(
    order.paymentReminderSentAt || (order as any).payment_reminder_sent_at
  );

  if (paymentStatus === "paid") return false;

  // Eğer özel bir vade tarihi set edilmişse onu kullan
  if (hasMaturity && maturityDate) {
    if (reminderSentAt) return false;
    return maturityDate.getTime() <= now.getTime();
  }

  // Eskiden kalma logic (ödeme şartı varsa ve vade dolmuşsa)
  if (!paymentTerms && !dueDate) return false;
  if (reminderSentAt) return false;

  const targetDate = dueDate || (paymentTerms ? now : null);
  if (!targetDate) return false;

  return targetDate.getTime() <= now.getTime();
};

const claimOrderReminder = async (orderId: string, now: Date): Promise<boolean> => {
  const orderRef = doc(firestore, "orders", orderId);

  return runTransaction(firestore, async (transaction) => {
    const snap = await transaction.get(orderRef);
    if (!snap.exists()) {
      return false;
    }

    const order = { id: snap.id, ...snap.data() } as Order;
    if (!isPaymentReminderCandidate(order, now)) {
      return false;
    }

    const reminderTimestamp = Timestamp.fromDate(now);

    transaction.update(orderRef, {
      paymentReminderSentAt: reminderTimestamp,
      payment_reminder_sent_at: now.toISOString(),
      updatedAt: reminderTimestamp,
      updated_at: now.toISOString(),
    });

    return true;
  });
};

export const processDueOrderPaymentReminders = async (): Promise<number> => {
  const now = new Date();
  const orders = await getOrders();
  const candidates = orders.filter((order) => isPaymentReminderCandidate(order, now));

  if (candidates.length === 0) {
    return 0;
  }

  const users = await getAllUsers();
  let reminderCount = 0;

  for (const order of candidates) {
    const claimed = await claimOrderReminder(order.id, now);
    if (!claimed) {
      continue;
    }

    const relevantUsers = users.filter((user) => {
      if (user.id === order.createdBy) return true;
      const roles = user.role || [];
      return roles.some((role) =>
        ["super_admin", "main_admin", "manager", "team_leader"].includes(role),
      );
    });

    const recipients = Array.from(new Map(relevantUsers.map((user) => [user.id, user])).values());
    if (recipients.length === 0) {
      continue;
    }

    const orderNumber = order.orderNumber || order.order_number || order.id;
    const customerName = order.customerName || order.customer_name || "Belirtilmemiş müşteri";
    const maturityDate = resolveReminderDate(order.maturityDate);
    const dueDate = maturityDate || resolveReminderDate(order.dueDate ?? order.due_date);
    const paymentMethodLabel = getOrderPaymentMethodLabel(
      order.paymentMethod,
    );
    const totalAmount = Number(order.totalAmount ?? order.total_amount ?? 0);
    const paidAmount = Number(order.paidAmount || 0);
    const remainingAmount = Math.max(totalAmount - paidAmount, 0);

    const formattedTotal = totalAmount.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedRemaining = remainingAmount.toLocaleString("tr-TR", {
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

    const message = [
      `"${orderNumber}" numaralı siparişin ödeme vadesi doldu.`,
      `Müşteri: ${customerName}`,
      `Toplam Tutar: ${formattedTotal} ${(order.currency || "TRY") === "TRY" ? "TL" : order.currency}`,
      `Kalan Ödeme: ${formattedRemaining} ${(order.currency || "TRY") === "TRY" ? "TL" : order.currency}`,
      `Yöntem: ${paymentMethodLabel}`,
      `Vade Tarihi: ${formattedDueDate}`,
    ].join("\n");

    await Promise.allSettled(
      recipients.map((recipient) =>
        createNotification({
          userId: recipient.id,
          type: "order_updated",
          title: "Sipariş ödeme vadesi geldi",
          message,
          read: false,
          relatedId: order.id,
          metadata: {
            orderNumber,
            dueDate: dueDate ? dueDate.toISOString() : null,
            paymentMethod: order.paymentMethod || null,
            paymentTerms: order.paymentTerms || null,
            updatedAt: now.toISOString(),
            reminderType: "payment_due",
          },
        }),
      ),
    );

    reminderCount += 1;
  }

  return reminderCount;
};
