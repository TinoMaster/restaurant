import { AddDescriptionToCategory } from '@/components/pages/profile/admin/categories/category/AddDescriptionToCategory'
import { ButtomDeleteCategory } from '@/components/pages/profile/admin/categories/category/ButtomDeleteCategory'
import { category } from '@/services/category'
import { notFound } from 'next/navigation'

export default async function CategoryPage({
   params,
}: {
   params: { id: string }
}) {
   const { id } = params
   const cat = await category.getCategoryById(id)

   if (!cat || !cat.data?.length) notFound()

   const { data } = cat
   const { name, _id, description, products } = data[0]

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
                        <svg
                           fill="currentColor"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-4 h-4 text-indigo-400"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                           fill="currentColor"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-4 h-4 text-indigo-400"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                           fill="currentColor"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-4 h-4 text-indigo-400"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                           fill="currentColor"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-4 h-4 text-indigo-400"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-4 h-4 text-indigo-400"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="ml-3">4 Reviews</span>
                     </span>
                  </div>
                  <AddDescriptionToCategory
                     description={description}
                     id={_id}
                  />
                  <hr className="my-8 border-gray-200" />
                  {/* Products box */}
                  <div className="grid my-10">
                     {products && products.length > 0 ? (
                        products.map((product) => <div key={product._id}></div>)
                     ) : (
                        <p>Aun no hay productos agregados a esta categoria</p>
                     )}
                  </div>

                  <div className="flex">
                     <ButtomDeleteCategory id={_id} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
