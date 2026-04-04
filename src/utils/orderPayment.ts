export const ORDER_DOCUMENTS_FOLDER_ID = "19VARUkhzzg3JSLNFUPA0yoKFcpJuBna7";

export type OrderPaymentMethod =
  | "unspecified"
  | "cash"
  | "credit_card"
  | "bank_transfer"
  | "eft_havale"
  | "check"
  | "other";

export const ORDER_PAYMENT_METHOD_OPTIONS: Array<{
  value: OrderPaymentMethod;
  label: string;
}> = [
  { value: "unspecified", label: "Belirtilmedi" },
  { value: "cash", label: "Nakit" },
  { value: "credit_card", label: "Kredi Kartı" },
  { value: "bank_transfer", label: "Banka Transferi" },
  { value: "eft_havale", label: "EFT / Havale" },
  { value: "check", label: "Çek" },
  { value: "other", label: "Diğer" },
];

export const getOrderPaymentMethodLabel = (method?: string | null): string => {
  return (
    ORDER_PAYMENT_METHOD_OPTIONS.find((option) => option.value === method)?.label ||
    "Belirtilmedi"
  );
};

export const addMonthsSafe = (date: Date, months: number): Date => {
  const base = new Date(date);
  const originalDay = base.getDate();
  const target = new Date(base);

  target.setHours(0, 0, 0, 0);
  target.setDate(1);
  target.setMonth(target.getMonth() + months);

  const lastDayOfTargetMonth = new Date(
    target.getFullYear(),
    target.getMonth() + 1,
    0,
  ).getDate();

  target.setDate(Math.min(originalDay, lastDayOfTargetMonth));
  return target;
};

export const calculateOrderPaymentDueDate = (
  orderDateInput?: string | Date | null,
  paymentTermMonths?: number | null,
): Date | null => {
  const normalizedMonths = Number(paymentTermMonths) || 0;
  if (!orderDateInput || normalizedMonths <= 0) {
    return null;
  }

  const orderDate =
    orderDateInput instanceof Date ? new Date(orderDateInput) : new Date(orderDateInput);

  if (Number.isNaN(orderDate.getTime())) {
    return null;
  }

  return addMonthsSafe(orderDate, normalizedMonths);
};

export const buildOrderPaymentTermsSummary = (
  paymentMethod?: string | null,
  paymentTermMonths?: number | null,
): string => {
  const methodLabel = getOrderPaymentMethodLabel(paymentMethod);
  const months = Number(paymentTermMonths) || 0;

  if (months <= 0) {
    return `${methodLabel}, peşin`;
  }

  return `${methodLabel}, ${months} ay vade`;
};
