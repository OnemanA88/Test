import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const res = NextResponse.next();
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://*.paypal.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://*.paypal.com",
      "connect-src 'self' https://api.stripe.com https://*.paypal.com",
      "frame-src https://www.paypal.com https://*.paypal.com",
    ].join('; ')
  );
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

