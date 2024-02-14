import { ProductCard } from '@/components/ui/globals/productCard'
import { getProductsByCategory } from '@/services/actions/product.action'
import { convertPathWithSpacesReverse } from '@/utils/convertPathWithSpaces'

export default async function SectionRenderProducts({
   params,
}: {
   params: { category: string }
}) {
   const { category } = params
   const products = await getProductsByCategory(
      convertPathWithSpacesReverse(category)
   )

   if (!products || products.length === 0) {
      return (
         <p className="text-center text-gray-400 text-lg">
            Esta categoria no tiene productos
         </p>
      )
   }

   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         {products?.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
         ))}
      </div>
   )
}
