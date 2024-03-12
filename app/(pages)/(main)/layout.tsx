import Footer from '@/components/footer'
import { NavBar } from '@/components/navs/NavBar'

export default function MainLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <>
         <header className="w-full z-30 sticky top-0">
            <NavBar />
         </header>
         <div className="w-full h-full">{children}</div>
         <Footer />
      </>
   )
}
