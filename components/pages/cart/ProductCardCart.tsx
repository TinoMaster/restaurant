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
      <div className="w-full relative flex flex-wrap bg-white/5 py-2 px-4 shadow-md rounded-md items-center justify-between">
         <Image
            width={200}
            height={200}
            className="w-20 h-20 lg:w-32 lg:h-32 rounded-md object-cover"
            src={p.image}
            alt="Product Image"
         />
         <div className="p-2 grow lg:w-1/4 space-y-1">
            <p className="sm:text-lg font-bold capitalize">{`${p.name.slice(0, 12)}...`}</p>
            <p className="sm:text-lg font-bold">{formatPrice(p.price)}</p>
         </div>
         <div className="w-32 h-full p-4">
            <div className="bg-white/10 w-full h-full rounded-md overflow-hidden flex items-center justify-between">
                  <button
                     onClick={() => removeFromCart(product.productId)}
                     className="w-8 h-8 absolute -top-4 -right-2 bg-white/10 rounded-full flex justify-center items-center"
                  >
                     <IoMdClose />
                  </button>

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
         <div className="px-4 grow flex gap-2 justify-center items-center">
            <p className="sm:text-lg font-bold">Total:</p>
            <p className="sm:text-lg font-bold">
               {formatPrice(p.price * product.quantity)}
            </p>
         </div>
      </div>
   )
}
