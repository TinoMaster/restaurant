import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'

export default function MainLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <header className="w-full relative z-30">
            <NavBar />
         </header>
         <div className="w-full h-full">{children}</div>
         <Footer />
      </>
   )
}
