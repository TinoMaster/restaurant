import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'
import { NavBarScroll } from '@/components/navs/NavBarScroll'

export default function MainLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <header className="w-full fixed bg-darkMode z-20">
            <NavBarScroll />
            <NavBar />
         </header>
         <div className="w-full h-full">{children}</div>
         <Footer />
      </>
   )
}
