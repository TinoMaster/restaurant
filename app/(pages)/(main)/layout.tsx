import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'

export default function MainLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <header className="w-full sticky top-0 z-20 bg-gradient-to-tr from-darkMode via-neutral-800 to-darkMode shadow">
            <NavBar />
         </header>
         <div className="w-full h-full">{children}</div>
         <Footer />
      </>
   )
}
