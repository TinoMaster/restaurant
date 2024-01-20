import { Description } from '@/components/pages/profile/admin/menu/view_product/Description'
import { getProductById } from '@/services/actions/product.action'
import { formatPrice } from '@/utils/formatPrice'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function PageAdminProductDetails({
   params,
}: {
   params: { id: string }
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
      createdAt,
      updatedAt,
   } = product

   return (
      <section className="text-gray-400 body-font overflow-hidden">
         <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
               <Image
                  width={500}
                  height={500}
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={texturaCemento}
               />
               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                     {`PRODUCT | ${category.name}`}
                  </h2>
                  <h1 className="text-white text-3xl title-font font-medium mb-1 capitalize">
                     {product.name}
                  </h1>
                  <div className="flex mb-4">
                     <span className="flex items-center">
                        <span className="text-xl text-primary">★★★★★</span>
                        <span className="ml-3">4 Reviews</span>
                     </span>
                  </div>
                  <hr className="my-4 border-gray-500" />
                  <Description description={description} />
                  <div className="my-4">
                     <p className="font-bold text-primary/80">Ingredientes:</p>
                     <p className="capitalize">
                        {ingredients
                           .map((ingredient) => ingredient.name)
                           .join(', ')}
                     </p>
                  </div>
                  <p className="text-sm">
                     {`Creado: ${new Date(createdAt).toLocaleString()}`}
                     <br />
                     {`Actualizado: ${new Date(updatedAt).toLocaleString()}`}
                  </p>
                  <hr className="my-4 border-gray-500" />
                  <div className="flex justify-between">
                     <span className="title-font font-medium text-2xl text-white">
                        {formatPrice(product.price)}
                     </span>
                     <div className="space-x-2">
                        <button className="btn-white">Eliminar</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
