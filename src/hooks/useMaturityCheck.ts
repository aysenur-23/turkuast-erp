import { useEffect, useRef } from "react";
import { processDueOrderPaymentReminders } from "@/services/firebase/orderReminderService";

/**
 * Runs maturity (vade) check once when the Dashboard loads.
 * Processes due order payment reminders and sends notifications.
 */
export const useMaturityCheck = () => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const runCheck = async () => {
      try {
        const count = await processDueOrderPaymentReminders();
        if (count > 0 && import.meta.env.DEV) {
          console.log(`[MaturityCheck] ${count} vade bildirimi gönderildi.`);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("[MaturityCheck] Vade kontrolü hatası:", error);
        }
      }
    };

    // Run after a short delay to not block initial render
    const timer = setTimeout(runCheck, 2000);
    return () => clearTimeout(timer);
  }, []);
};
