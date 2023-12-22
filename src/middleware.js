import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

export async function middleware(request) {
  const auth = request.cookies.get("auth");

  if (auth && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (!auth && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (auth) {
    const dataAuth = JSON.parse(auth.value);
    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set("authorization", `Bearer ${dataAuth.token}`);

    // const response = NextResponse.next();
    const response = NextResponse.next({
      request: {
        authorization: `Bearer ${dataAuth.token}`,
      },
    });

    response.headers.set("authorization", `Bearer ${dataAuth.token}`);

    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
