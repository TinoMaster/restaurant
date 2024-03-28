'use client'

import { formatPrice } from '@/libs/utils'
import { TProduct } from '@/types/models/product'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Dialog } from '../../modals/Dialog'

export const DialogProduct = ({ product }: { product: TProduct }) => {
   const params = useSearchParams()
   const id = params.get('id')
   const { image, name, description, ingredients, price } = product
   const ingredientsList = ingredients?.map((i) => i.name)

   if (product._id !== id) {
      return null
   }

   return (
      <Dialog title={name} dialog="viewProduct">
         <div className="text-primary space-y-2">
            <Image
               width={200}
               height={200}
               src={image}
               alt="image"
               className="w-full h-full object-cover"
            />
            <div className="space-y-1">
               <p className="text-pri-300 font-semibold">Descripción:</p>
               <p className="text-sm first-letter:capitalize">{description}</p>
            </div>
            <p>{ingredientsList?.join(', ')}</p>
            <p>{formatPrice(price)}</p>
         </div>
      </Dialog>
   )
}
