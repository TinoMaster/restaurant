import { NavBar_pageMenu } from '@/components/pages/menu/navbar_products'
import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { Suspense } from 'react'

export default function LayoutMenuPage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className='mt-10'>
         <Suspense fallback={<LoadingCategories />}>
            <NavBar_pageMenu />
         </Suspense>
         <section className="min-h-[500px] container py-10">{children}</section>
      </div>
   )
}
