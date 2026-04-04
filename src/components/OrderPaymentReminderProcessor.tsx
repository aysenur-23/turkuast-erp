import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { processDueOrderPaymentReminders } from "@/services/firebase/orderReminderService";

const REMINDER_INTERVAL_MS = 15 * 60 * 1000;

export const OrderPaymentReminderProcessor = () => {
  const { user, loading } = useAuth();
  const isProcessingRef = useRef(false);
  const canProcessReminders =
    !!user?.roles?.some((role) =>
      ["super_admin", "main_admin", "manager", "team_leader"].includes(role),
    );

  useEffect(() => {
    if (loading || !user || !canProcessReminders) {
      return;
    }

    let cancelled = false;

    const runProcessor = async () => {
      if (isProcessingRef.current || cancelled) {
        return;
      }

      isProcessingRef.current = true;
      try {
        await processDueOrderPaymentReminders();
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Order payment reminder processor error:", error);
        }
      } finally {
        isProcessingRef.current = false;
      }
    };

    runProcessor();
    const intervalId = window.setInterval(runProcessor, REMINDER_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [canProcessReminders, loading, user?.id]);

  return null;
};
