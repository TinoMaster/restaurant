import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { CreateIngredients } from '@/components/pages/profile/admin/ingredients/CreateIngredient'
import { Ingredients } from '@/components/pages/profile/admin/ingredients/Ingredients'
import React, { Suspense } from 'react'

export default function IngredientsPage() {
   return (
      <div className="flex flex-col items-center">
         <CreateIngredients />
         <div className="w-full p-4">
            <Suspense fallback={<LoadingCategories />}>
               <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4">
                  <Ingredients />
               </div>
            </Suspense>
         </div>
      </div>
   )
}
