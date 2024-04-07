import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
   function middleware(request: NextRequestWithAuth) {
      if (
         request.nextUrl.pathname.startsWith('/profile/admin') &&
         !request.nextauth?.token?.isAdmin
      ) {
         return NextResponse.rewrite(new URL('/denied', request.url))
      }
   },
   {
      pages: {
         signIn: '/login',
      },
      callbacks: {
         authorized: ({ token }) => !!token,
      },
   },
)

export const config = {
   matcher: ['/profile/:path*'],
}
