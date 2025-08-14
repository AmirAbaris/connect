import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LoginForm from "./components/login-form";

export default function LoginPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center p-6 pt-22">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="mb-6 flex items-center justify-center">
            <Image src={"/logo.svg"} width={82} height={82} alt={"logo"} />
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {t("Login.header")}
          </h2>
          <p className="text-muted-foreground">{t("Login.subheader")}</p>
        </div>

        <LoginForm />

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            {t("Login.signupPrompt")}{" "}
            <Link
              href="/auth/signup"
              className="text-primary hover:underline font-medium"
            >
              {t("Login.signupLink")}
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>{t("Login.secure")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>{t("Login.fast")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛡️</span>
              <span>{t("Login.private")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
