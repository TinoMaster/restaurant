'use client'
import useCartFav from '@/context/cartFavContext'
import { formatPrice } from '@/libs/utils'
import { TProductInCartPopulated } from '@/types/models/product'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'

export const ProductCardCart = ({
   product,
}: {
   product: TProductInCartPopulated
}) => {
   const { removeFromCart, addOrRemoveQuantity } = useCartFav()
   const p = product.productId

   return (
      <div className="w-full relative flex flex-wrap bg-gradient-to-tl from-primary/5 to-primary/5 pt-6 pb-3 px-4 shadow-md rounded-md justify-between">
         <div className="flex items-center">
            <p className="text-xs sm:text-lg font-bold capitalize absolute top-1">{`${p.name}`}</p>
            <p className="text-xs sm:text-lg text-gray-200 bg-red-500/50 px-2 rounded-md font-bold capitalize absolute top-1 right-1">{`${
               !p.available ? 'Non disponibile' : ''
            }`}</p>
            <Image
               width={200}
               height={200}
               className="w-16 h-16 lg:w-24 lg:h-24 rounded-md object-cover"
               src={p.image}
               alt="Product Image"
            />
            <div className="p-2 grow lg:w-1/4 space-y-1">
               <p className="text-xs sm:text-lg font-bold">
                  {formatPrice(p.price)}
               </p>
            </div>
         </div>
         <div className="w-28 h-full p-4">
            <div className="bg-white/10 w-full h-full rounded-md overflow-hidden flex items-center justify-between">
               <button
                  disabled={product.quantity === 1}
                  onClick={() =>
                     addOrRemoveQuantity(p._id, product.quantity - 1)
                  }
                  className="w-full h-full flex justify-center items-center text-xs sm:text-lg py-1 bg-black disabled:bg-black/30"
               >
                  -
               </button>
               <small className="w-full h-full flex justify-center text-xs sm:text-base items-center">
                  {product.quantity}
               </small>

               <button
                  onClick={() =>
                     addOrRemoveQuantity(p._id, product.quantity + 1)
                  }
                  className="w-full h-full flex justify-center items-center text-xs sm:text-lg bg-black py-1"
               >
                  +
               </button>
            </div>
         </div>
         <div className="flex gap-2 justify-center items-center relative">
            <p className="text-xs sm:text-lg font-bold">
               {formatPrice(p.price * product.quantity)}
            </p>
            <button
               onClick={() => removeFromCart(product.productId)}
               className="w-6 h-6 text-sm md:w-8 md:h-8 md:text-base bg-red-500/20 rounded-full flex justify-center items-center"
            >
               <IoMdClose />
            </button>
         </div>
      </div>
   )
}
