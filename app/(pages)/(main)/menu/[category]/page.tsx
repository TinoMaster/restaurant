import { ProductCard } from '@/components/ui/globals/productCard'
import { getCategoryByName } from '@/services/actions/category.actions'
import { TCategory } from '@/types/models/category'

export default async function SectionRenderProducts({
   params,
}: {
   params: { category: string }
}) {
   const { category } = params
   const res = await getCategoryByName(category)

   if (!res) {
      return
   }
   const categoryData: TCategory = res
   const { products } = categoryData

   if (!products || products.length === 0) {
      return (
         <p className="text-center text-gray-400 text-lg">
            Esta categoria no tiene productos
         </p>
      )
   }

   return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
         {products?.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
         ))}
      </div>
   )
}
