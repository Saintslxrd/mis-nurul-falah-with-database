import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  // Jika tidak ada token dan mencoba masuk halaman admin
  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Tentukan route apa saja yg dilindungi
export const config = {
  matcher: ["/admin/:path*"],
};
