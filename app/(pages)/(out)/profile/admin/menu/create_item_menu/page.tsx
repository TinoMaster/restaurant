import { FormCreateProduct } from '@/components/pages/profile/admin/menu/FormCreateProduct'
import { getCategories } from '@/services/actions/category.actions'
import { getIngredients } from '@/services/actions/ingredients.action'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'

export default async function Form_Create_ItemMenu() {
   const categories = await getCategories()
   const ingredients = await getIngredients()
   return (
      <section className="">
         <div className="w-full grid grid-cols-4 gap-4">
            {/* image */}
            <div className="col-span-4 lg:col-span-1 max-h-[250px] flex flex-col gap-2">
               <div className="w-full h-full">
                  <Image
                     src={texturaCemento}
                     alt="map"
                     className="w-full h-full object-cover rounded-lg brightness-75"
                  />
               </div>
               <button className="btn-white">Add Image</button>
            </div>
            <FormCreateProduct
               ingredients={ingredients || []}
               categories={categories || []}
            />
         </div>
      </section>
   )
}
