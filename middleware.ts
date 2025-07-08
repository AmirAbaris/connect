import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const tokenKey = "sb-dtnknotqorxmauptuipr-auth-token";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/fa/webapp")) {
    const token = request.cookies.get(tokenKey)?.value;

    if (!token) {
      const loginUrl = new URL("/auth/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith("/fa/complete-profile")) {
    const token = request.cookies.get(tokenKey)?.value;

    if (token) {
      return NextResponse.redirect("/fa/webapp/status");
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
