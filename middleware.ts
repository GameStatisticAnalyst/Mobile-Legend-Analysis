// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const protectedRoutes = ["/app/admin", "/app/dashboard", "/dashboard"];
  const isProtected = protectedRoutes.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (
    request.nextUrl.pathname.startsWith("/app/admin") &&
    token?.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
