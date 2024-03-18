'use client'
import { CartFavProvider } from '@/context/cartFavContext'
import { NavProvider } from '@/context/navContext'
import { SessionProvider } from 'next-auth/react'

export function Providers({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <SessionProvider>
         <CartFavProvider>
            <NavProvider>{children}</NavProvider>
         </CartFavProvider>
      </SessionProvider>
   )
}
