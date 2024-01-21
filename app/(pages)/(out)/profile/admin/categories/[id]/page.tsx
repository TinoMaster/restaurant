import { AddDescriptionToCategory } from '@/components/pages/profile/admin/categories/category/AddDescriptionToCategory'
import { ButtomDeleteCategory } from '@/components/pages/profile/admin/categories/category/ButtomDeleteCategory'
import { getCategoryById } from '@/services/actions/category.actions'
import { notFound } from 'next/navigation'

export default async function CategoryPage({
   params,
}: {
   params: { id: string }
}) {
   const { id } = params
   const cat = await getCategoryById(id)

   if (!cat) notFound()

   const { name, _id, description, products } = cat
   const categoryId = JSON.parse(JSON.stringify(_id))

   return (
      <section className="text-gray-400 body-font overflow-hidden">
         <div className="container py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
               {/* <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center bg-slate-500 rounded" /> */}
               <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                     CATEGORY
                  </h2>
                  <h1 className="text-white text-3xl title-font font-medium mb-1 capitalize">
                     {name}
                  </h1>
                  <div className="flex mb-4">
                     <span className="flex items-center">
                        <span className='text-primary'>★★★★★</span>
                        <span className="ml-3">4 Reviews</span>
                     </span>
                  </div>
                  <AddDescriptionToCategory
                     description={description}
                     id={categoryId}
                  />
                  <hr className="my-8 border-gray-200" />
                  {/* Products box */}
                  <div className="grid my-10">
                     <h1 className="text-2xl font-bold">Products</h1>
                     {products && products.length > 0 ? (
                        products.map((product) => (
                           <div key={categoryId}>
                              <p>{product.name}</p>
                           </div>
                        ))
                     ) : (
                        <p>Aun no hay productos agregados a esta categoria</p>
                     )}
                  </div>

                  <div className="flex">
                     <ButtomDeleteCategory id={categoryId} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
