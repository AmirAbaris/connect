import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({ ...routing, localeDetection: true });

const tokenKey = "sb-dtnknotqorxmauptuipr-auth-token";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isWebappRoute = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}/webapp`)
  );

  if (isWebappRoute) {
    const token = request.cookies.get(tokenKey)?.value;

    if (!token) {
      // Extract locale from pathname
      const locale = pathname.split("/")[1];
      const loginUrl = new URL(`/${locale}/auth/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Check if pathname starts with any locale + auth
  const isAuthRoute = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}/auth`)
  );

  if (isAuthRoute) {
    const token = request.cookies.get(tokenKey)?.value;
    if (token) {
      // Extract locale from pathname
      const locale = pathname.split("/")[1];
      const homeUrl = new URL(`/${locale}/webapp/account`, request.url);
      return NextResponse.redirect(homeUrl);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
