import { NavBar } from '@/components/navs/NavBar'
import { Nabvar_Movil } from '@/components/navs/Nabvar_Movil'
import { NavBarScroll } from '@/components/navs/NavBarScroll'
import Footer from '@/components/footer'

export default function MainLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <main className="w-full overflow-hidden grow">
         <header className="w-full absolute z-20">
            <Nabvar_Movil />
            <NavBarScroll />
            <NavBar />
         </header>
         {children}
         <Footer />
      </main>
   )
}
