import { Categories } from '@/components/pages/profile/admin/categories/Categories'
import { FormAddCategory } from '@/components/pages/profile/admin/categories/FormAddCategory'
import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { Suspense } from 'react'

export default async function PageCategoriesAdmin() {
   return (
      <div className="flex flex-col items-center">
         <FormAddCategory />
         <div className="w-full p-4">
            <Suspense fallback={<LoadingCategories />}>
               <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Categories />
               </div>
            </Suspense>
         </div>
      </div>
   )
}
