import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loggedIn = request.cookies.get('loggedIn')?.value === 'true';

  if (loggedIn) {
    if (pathname === '/sign-in' || pathname === '/sign-up') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    if (pathname !== '/sign-in' && pathname !== '/sign-up') {
      return NextResponse.redirect(new URL('/sign-up', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public|img|.*\\..*).*)',
  ],
};