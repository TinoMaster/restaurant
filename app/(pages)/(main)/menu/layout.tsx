import { NavBar_pageMenu } from '@/components/pages/menu/navbar_products'
import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { banner_menuPage, banner_menuPageMovil } from '@/utils/images'
import { Suspense } from 'react'

export default function LayoutMenuPage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroCurve
            imageDesktop={banner_menuPage}
            imagemovil={banner_menuPageMovil}
         >
            <Suspense fallback={<LoadingCategories />}>
               <NavBar_pageMenu />
            </Suspense>
         </HeroCurve>
         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}
