import { Link_CreateItemMenu } from '@/components/pages/profile/admin/menu/Link_CreateItemMenu'
import { ProductCard } from '@/components/pages/profile/admin/menu/ProductCard'
import { getCategories } from '@/services/actions/category.actions'
import { getProducts } from '@/services/actions/product.action'
import { TCategory } from '@/types/models/category'

export default async function PageAdminMenu() {
   const products = await getProducts()
   const categories = await getCategories()

   if (!products) {
      return <p className="">Something went wrong</p>
   }

   const categoriesFilled: TCategory[] = categories
      ? categories.filter((category) => {
           if (
              products.find(
                 (product) => product.category.name === category.name
              )
           ) {
              return category
           }
        })
      : []

   return (
      <div className="">
         <Link_CreateItemMenu />
         <section className="py-6 space-y-6">
            {products.length === 0 ? (
               <p className="text-center font-semibold text-gray-400">
                  Debe crear al menos un producto para que aparezca aqui
               </p>
            ) : (
               categoriesFilled?.map((category) => (
                  <details
                     className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/5 rounded-lg"
                     key={category._id}
                  >
                     <summary className="">{category.name}</summary>
                     {/*//TODO: Hacer el grid de los productos  */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
                        {products
                           .filter(
                              (product) =>
                                 product.category.name === category.name
                           )
                           .map((product) => (
                              <ProductCard
                                 key={product._id}
                                 product={product}
                              />
                           ))}
                     </div>
                  </details>
               ))
            )}
         </section>
      </div>
   )
}
