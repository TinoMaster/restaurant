import { siligury } from '@/utils/fonts'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Providers } from './Providers'

export const metadata: Metadata = {
   metadataBase: new URL(process.env.PATHNAME || 'http://localhost:3000'),
   title: 'Pizzeria Albatros',
   description: 'La migliore pizzeria di Francavilla al mare',
   keywords:
      'pizza, pizzeria, pizzeria di Francavilla al mare, pizzeria Italia, pizzeria Italiana, pizzeria al forno, pizzeria al forno di Francavilla al mare',
   openGraph: {
      title: 'Pizzeria Albatros',
      description: 'La migliore pizzeria di Francavilla al mare',
      phoneNumbers: ['+39 320 123 4567'],
      url: process.env.PATHNAME || '',
      emails: ['aLQ1M@example.com'],
      images: [`/images/OG-principalPage.png`],
   },
}

export default function RootLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body
            className={`${siligury.className} antialiased min-h-screen bg-lightDarkMode text-gray-100 w-full select-none`}
         >
            <Analytics />
            <Providers>
               <main className="w-full h-full relative">
                  <Toaster />
                  {children}
               </main>
            </Providers>
         </body>
      </html>
   )
}
