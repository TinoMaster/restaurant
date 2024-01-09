import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'
import { NavBarScroll } from '@/components/navs/NavBarScroll'

export default function MainLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <main className="w-full overflow-hidden grow">
         <header className="w-full absolute z-20">
            <NavBarScroll />
            <NavBar />
         </header>
         {children}
         <Footer />
      </main>
   )
}
