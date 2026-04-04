import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, RefreshCw, Send, XCircle } from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { testEmailService } from "@/services/emailService";
import { useAuth } from "@/contexts/AuthContext";

interface HealthResponse {
  status: string;
  smtp?: {
    configured?: boolean;
    status?: string;
    host?: string;
    port?: string;
    from?: string | null;
    missing?: string[];
  };
}

const LOCAL_BACKEND_BASE_URL = "http://localhost:3000";

const resolveBackendBaseUrl = (): string => {
  const rawUrl = import.meta.env.VITE_EMAIL_API_URL || import.meta.env.VITE_API_URL;

  if (!rawUrl) {
    return LOCAL_BACKEND_BASE_URL;
  }

  if (rawUrl.includes("/api/send-email")) {
    return rawUrl.replace(/\/api\/send-email\/?$/, "");
  }

  if (rawUrl.endsWith("/send-email") || rawUrl.endsWith("/send-email/")) {
    return rawUrl.replace(/\/send-email\/?$/, "");
  }

  if (rawUrl.endsWith("/api") || rawUrl.endsWith("/api/")) {
    return rawUrl.replace(/\/api\/?$/, "");
  }

  return rawUrl.replace(/\/$/, "");
};

export const EmailSettings = () => {
  const { user } = useAuth();
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState(false);
  const [testEmail, setTestEmail] = useState(user?.email || "");

  const healthUrl = useMemo(() => `${resolveBackendBaseUrl()}/health`, []);

  const refreshHealth = async () => {
    try {
      setLoading(true);
      const response = await fetch(healthUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Health endpoint yanit vermedi (${response.status})`);
      }

      const payload = (await response.json()) as HealthResponse;
      setHealth(payload);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Email health error:", error);
      }
      setHealth({
        status: "ERROR",
        smtp: {
          configured: false,
          status: error instanceof Error ? error.message : "Backend erisilemiyor",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refreshHealth();
  }, []);

  useEffect(() => {
    if (user?.email && !testEmail) {
      setTestEmail(user.email);
    }
  }, [user?.email, testEmail]);

  const handleSendTest = async () => {
    if (!testEmail.trim()) {
      toast.error("Test e-postasi icin bir adres girin.");
      return;
    }

    try {
      setTesting(true);
      const result = await testEmailService(testEmail.trim());
      if (result.success) {
        toast.success("Test e-postasi gonderildi. Gelen kutusunu kontrol edin.");
      } else {
        toast.error(result.error || "Test e-postasi gonderilemedi.");
      }
      await refreshHealth();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Test e-postasi gonderilemedi.");
    } finally {
      setTesting(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            E-posta
          </CardTitle>
          <CardDescription>SMTP durumu kontrol ediliyor</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  const smtpConfigured = Boolean(health?.smtp?.configured);
  const smtpConnected = health?.smtp?.status === "connected";
  const smtpStatusText = health?.smtp?.status || "unknown";
  const smtpMissingKeys = health?.smtp?.missing || [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Mail className="h-5 w-5" />
          E-posta
        </CardTitle>
        <CardDescription>
          Bildirim mailleri bu backend SMTP baglantisi uzerinden gonderilir.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={smtpConfigured ? "default" : "destructive"}>
            {smtpConfigured ? "SMTP Yapilandirildi" : "SMTP Eksik"}
          </Badge>
          <Badge variant={smtpConnected ? "default" : "secondary"}>
            {smtpConnected ? "Baglanti Hazir" : "Baglanti Bekliyor"}
          </Badge>
        </div>

        <div className="rounded-lg border p-4">
          <div className="flex items-start gap-3">
            {smtpConfigured && smtpConnected ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
            ) : !smtpConfigured ? (
              <XCircle className="mt-0.5 h-5 w-5 text-destructive" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 text-amber-500" />
            )}
            <div className="space-y-1">
              <p className="font-medium">
                {!smtpConfigured
                  ? "SMTP bilgileri eksik"
                  : smtpConnected
                    ? "Mail servisi calisiyor"
                    : "SMTP baglantisi kurulamadi"}
              </p>
              <p className="text-sm text-muted-foreground">
                {!smtpConfigured
                  ? "Server tarafinda SMTP_USER, SMTP_PASSWORD ve gerekirse SMTP_FROM alanlari doldurulmalidir."
                  : `Sunucu: ${health?.smtp?.host || "-"}:${health?.smtp?.port || "-"}${health?.smtp?.from ? ` • Gonderen: ${health.smtp.from}` : ""}`}
              </p>
              {smtpConfigured && !smtpConnected && (
                <p className="text-sm text-muted-foreground">Durum: {smtpStatusText}</p>
              )}
            </div>
          </div>
        </div>

        {!smtpConfigured && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              SMTP bilgileri girilmeden gorev atama, bildirim ve vade hatirlatma mailleri gonderilmez.
            </AlertDescription>
          </Alert>
        )}

        {smtpMissingKeys.length > 0 && (
          <div className="space-y-2 rounded-lg border border-dashed p-4">
            <p className="font-medium text-sm">Eksik server anahtarlari</p>
            <div className="flex flex-wrap gap-2">
              {smtpMissingKeys.map((key) => (
                <Badge key={key} variant="outline">
                  {key}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Bu alanlar server/.env icinde dolduruldugunda test ve bildirim mailleri dogrudan calisacak.
            </p>
          </div>
        )}

        <div className="space-y-3 rounded-lg border p-4">
          <p className="font-medium">Test E-postasi</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={testEmail}
              onChange={(event) => setTestEmail(event.target.value)}
              placeholder="ornek@alanadi.com"
              className="sm:flex-1"
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={refreshHealth} disabled={loading}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Yenile
              </Button>
              <Button onClick={handleSendTest} disabled={testing || !smtpConfigured}>
                {testing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Test Gonder
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Bu buton mevcut backend mail servisini test eder. Hata durumunda SMTP ayarlari veya sunucu erisimi kontrol edilmelidir.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
