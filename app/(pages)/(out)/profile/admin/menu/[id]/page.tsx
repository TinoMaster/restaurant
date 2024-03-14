import { BtnDeleteProduct } from '@/components/pages/profile/admin/menu/view_product/BtnDeleteProduct'
import { Description } from '@/components/pages/profile/admin/menu/view_product/Description'
import { Disponibility } from '@/components/pages/profile/admin/menu/view_product/Disponibility'
import { ImageViewProduct } from '@/components/pages/profile/admin/menu/view_product/ImageViewProduct'
import { Ingredients } from '@/components/pages/profile/admin/menu/view_product/Ingredients'
import { Name } from '@/components/pages/profile/admin/menu/view_product/Name'
import { Price } from '@/components/pages/profile/admin/menu/view_product/Price'
import { getProductById } from '@/services/actions/product.action'
import { notFound } from 'next/navigation'

export default async function PageAdminProductDetails({
   params,
}: {
   readonly params: { id: string }
}) {
   const { id } = params
   const product = await getProductById(id)

   if (!product) notFound()

   const {
      category,
      ingredients,
      image,
      name,
      price,
      description,
      available,
      favorites,
      sells,
      createdAt,
      updatedAt,
      _id,
   } = product

   return (
      <section className="text-gray-400 body-font overflow-hidden">
         <div className="container py-10">
            <div className="lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
               <ImageViewProduct image={image} name={name} id={_id} />
               <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                     {`PRODUCT | ${category.name}`}
                  </h2>
                  <Name name={name} id={id} />
                  <Disponibility available={available} id={id} />
                  <div className="flex mb-4">
                     <span className="flex items-center">
                        <span className="text-xl text-primary">★★★★★</span>
                        <span className="ml-3">4 Reviews</span>
                     </span>
                  </div>
                  <hr className="my-4 border-gray-500" />
                  <Description description={description} id={id} />
                  <Ingredients ingredients={ingredients} id={id} />
                  <p className="text-sm">
                     {`Creado: ${new Date(createdAt).toLocaleString()}`}
                     <br />
                     {`Actualizado: ${new Date(updatedAt).toLocaleString()}`}
                  </p>
                  <hr className="my-4 border-gray-500" />
                  <div className="flex justify-between gap-4">
                     <Price price={price} id={id} />
                     <BtnDeleteProduct id={id} />
                  </div>
               </div>
            </div>
            <hr className="my-4 border-gray-500" />
            <div className="flex items-center gap-3">
               <p>{`Veces Vendido: ${sells || 0}`}</p>
               <p>{`Veces Favorito: ${favorites || 0}`}</p>
            </div>
         </div>
      </section>
   )
}
