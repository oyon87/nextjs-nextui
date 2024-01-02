import { NextResponse } from "next/server";

export async function middleware(request) {
  const auth = request.cookies.get("auth");

  if (auth && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  } else if (!auth && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
