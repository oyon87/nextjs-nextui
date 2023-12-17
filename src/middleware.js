import { NextResponse } from 'next/server';

export async function middleware(request) {
  const auth = await request.cookies.get('auth');

  if (auth && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (!auth && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (auth) {
    const dataAuth = JSON.parse(auth?.value);
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set('Authorization', `Bearer ${dataAuth.token}`);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
