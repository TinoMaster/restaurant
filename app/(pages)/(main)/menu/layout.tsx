import { NavBar_pageMenu } from '@/components/pages/menu/navbar_products'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'

export default function LayoutMenuPage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroCurve>
            <NavBar_pageMenu />
         </HeroCurve>
         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}
