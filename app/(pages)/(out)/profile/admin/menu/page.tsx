import { Link_CreateItemMenu } from '@/components/pages/profile/admin/menu/Link_CreateItemMenu'
import { RenderMenus } from '@/components/pages/profile/admin/menu/RenderMenus'
import { getProducts } from '@/services/actions/product.action'

export default async function PageAdminMenu() {
   const products = await getProducts()

   if (!products) {
      return <p className="">Something went wrong</p>
   }
   const categories = Object.groupBy(products, ({ category }) => category)
   console.log(categories)

   return (
      <div className="">
         <Link_CreateItemMenu />
         <section className="py-6 space-y-6">
            {products.length === 0 ? (
               <p className="text-center font-semibold text-gray-400">
                  Debe crear al menos un producto para que aparezca aqui
               </p>
            ) : (
               products?.map((category) => (
                  <details
                     className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/5 rounded-lg"
                     key={category._id}
                  >
                     <summary className="">{category.name}</summary>
                     <RenderMenus category={category.name} />
                  </details>
               ))
            )}
         </section>
      </div>
   )
}
