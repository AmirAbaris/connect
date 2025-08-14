import Link from "next/link";
import { useTranslations } from "next-intl";
import ForgotPasswordForm from "./components/forgot-password-form";

export default function ForgotPasswordPage() {
  const t = useTranslations("ForgotPassword");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center p-6 pt-22">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-black">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t("logo")}
              </span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {t("header")}
          </h2>
          <p className="text-muted-foreground">{t("subheader")}</p>
        </div>

        <ForgotPasswordForm />

        <div className="text-center mt-6 space-y-2">
          <p className="text-muted-foreground">
            {t("rememberPassword")}{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              {t("login")}
            </Link>
          </p>
          <p className="text-muted-foreground">
            {t("noAccount")}{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              {t("signup")}
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>{t("secure")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>{t("fast")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛡️</span>
              <span>{t("private")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
