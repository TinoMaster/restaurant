import { siligury } from '@/utils/fonts'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Providers } from './Providers'
import './globals.css'

export const metadata: Metadata = {
   title: 'Pizzeria Albatros',
   description: 'La migliore pizzeria di Francavilla al mare',
}

export default function RootLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body
            className={`${siligury.className} antialiased min-h-screen bg-lightDarkMode text-gray-100 w-full select-none   `}
         >
            <Providers>
               <main className="w-full h-full">
                  <Toaster />
                  {children}
               </main>
            </Providers>
         </body>
      </html>
   )
}
