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
      <div className="w-full relative flex flex-wrap bg-gradient-to-tl from-primary/5 to-darkMode/70 py-2 px-4 shadow-md rounded-md items-center justify-between">
         <div className="flex items-center">
            <Image
               width={200}
               height={200}
               className="w-20 h-20 lg:w-24 lg:h-24 rounded-md object-cover"
               src={p.image}
               alt="Product Image"
            />
            <div className="p-2 grow lg:w-1/4 space-y-1">
               <p className="sm:text-lg font-bold capitalize">{`${p.name.slice(
                  0,
                  10
               )} ${p.name.length > 10 ? '...' : ''}`}</p>
               <p className="sm:text-lg font-bold">{formatPrice(p.price)}</p>
            </div>
         </div>
         <div className="w-32 h-full p-4">
            <div className="bg-white/10 w-full h-full rounded-md overflow-hidden flex items-center justify-between">
               <button
                  disabled={product.quantity === 1}
                  onClick={() =>
                     addOrRemoveQuantity(p._id, product.quantity - 1)
                  }
                  className="w-full h-full flex justify-center items-center text-lg py-1 bg-black disabled:bg-black/30"
               >
                  -
               </button>
               <small className="w-full h-full flex justify-center items-center">
                  {product.quantity}
               </small>

               <button
                  onClick={() =>
                     addOrRemoveQuantity(p._id, product.quantity + 1)
                  }
                  className="w-full h-full flex justify-center items-center text-lg bg-black py-1"
               >
                  +
               </button>
            </div>
         </div>
         <div className="flex gap-2 justify-center items-center relative grow sm:grow-0">
            <p className="sm:text-lg font-bold">Total:</p>
            <p className="sm:text-lg font-bold">
               {formatPrice(p.price * product.quantity)}
            </p>
            <button
               onClick={() => removeFromCart(product.productId)}
               className="w-8 h-8 bg-red-500/20 rounded-full flex justify-center items-center"
            >
               <IoMdClose />
            </button>
         </div>
      </div>
   )
}
