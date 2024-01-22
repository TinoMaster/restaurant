import { MenuItemPlusImage } from '@/components/ui/ItemMenuPlusImage'
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

   return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
         {products?.map((product, index) => (
            <MenuItemPlusImage key={index} index={index} product={product} />
         ))}
      </div>
   )
}
