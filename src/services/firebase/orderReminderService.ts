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
  const paymentReceived = order.paymentReceived ?? order.payment_received ?? false;
  const paymentTermMonths = Number(order.paymentTermMonths ?? order.payment_term_months ?? 0);
  const dueDate = resolveReminderDate(order.dueDate ?? order.due_date);
  const reminderSentAt = resolveReminderDate(
    order.paymentReminderSentAt ?? order.payment_reminder_sent_at,
  );

  if (paymentReceived) return false;
  if (paymentTermMonths <= 0) return false;
  if (!dueDate) return false;
  if (reminderSentAt) return false;

  return dueDate.getTime() <= now.getTime();
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
    const dueDate = resolveReminderDate(order.dueDate ?? order.due_date);
    const paymentMethodLabel = getOrderPaymentMethodLabel(
      order.paymentMethod ?? order.payment_method,
    );
    const totalAmount = Number(order.totalAmount ?? order.total_amount ?? 0);
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

    const message = [
      `"${orderNumber}" numaralı siparişin ödeme vadesi doldu.`,
      `Müşteri: ${customerName}`,
      `Tutar: ${formattedTotal} ${(order.currency || "TRY") === "TRY" ? "TL" : order.currency}`,
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
            paymentMethod: order.paymentMethod ?? order.payment_method ?? null,
            paymentTermMonths: order.paymentTermMonths ?? order.payment_term_months ?? null,
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
