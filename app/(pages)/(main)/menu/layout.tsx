import { NavBarPageMenu } from '@/components/pages/menu/navbar_products'
import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { LoadingProductsMenu } from '@/components/ui/loaders/LoadingProductsMenu'
import { Suspense } from 'react'

export default function LayoutMenuPage({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <div className="">
         <Suspense fallback={<LoadingCategories />}>
            <NavBarPageMenu />
         </Suspense>

         <section className="min-h-[500px] container py-10">
            <Suspense fallback={<LoadingProductsMenu />}>{children}</Suspense>
         </section>
      </div>
   )
}
