import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'
import { NavbarFallback } from '@/components/navs/NavbarFallback'
import { Suspense } from 'react'

export default function MainLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <>
         <header className="w-full z-30 sticky top-0">
            <Suspense fallback={<NavbarFallback />}>
               <NavBar />
            </Suspense>
         </header>
         <div className="w-full h-full">{children}</div>
         <Footer />
      </>
   )
}
