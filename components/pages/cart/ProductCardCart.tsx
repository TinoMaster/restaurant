'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
   addQuantityOfOneProduct,
   addToCart,
   removeFromCart,
   removeQuantityOfOneProduct,
} from '@/redux/reducers/user_slice'
import { RemoveFromCart } from '@/services/actions/product.action'
import { TProductInCartPopulated } from '@/types/models/product'
import { formatPrice } from '@/utils/formatPrice'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'
import toast from 'react-hot-toast'

export const ProductCardCart = ({
   product,
}: {
   product: TProductInCartPopulated
}) => {
   const p = product.productId
   const { _id } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()
   const addQuantity = () => {
      dispatch(addQuantityOfOneProduct(p._id))
   }

   const removeQuantity = () => {
      dispatch(removeQuantityOfOneProduct(p._id))
   }

   const removeProduct = async () => {
      dispatch(removeFromCart(p._id))
      const res = await RemoveFromCart(_id, p._id)

      if (res) {
         toast.success('Product removed')
      } else {
         toast.error('Something went wrong')
         dispatch(addToCart(product))
      }
   }

   return (
      <div className="w-full relative flex flex-wrap bg-white/5 p-1 shadow-md rounded-md items-center justify-between">
         <button
            onClick={removeProduct}
            className="w-10 h-10 absolute -top-4 -right-4 bg-red-500/30 rounded-full"
         >
            X
         </button>
         <Image
            width={200}
            height={200}
            className="w-32 h-32 rounded-md object-cover"
            src={texturaCemento}
            alt="textura cemento"
         />
         <div className="p-2 w-1/2 lg:w-1/4 space-y-1">
            <p className="text-lg font-bold capitalize">{p.name}</p>
            <p className="text-xs text-gray-300">
               {p.description.substring(0, 50)}...
            </p>
            <p className="text-lg font-bold">{formatPrice(p.price)}</p>
         </div>
         <div className="w-32 h-full p-4">
            <div className="bg-white/10 w-full h-full rounded-md overflow-hidden flex items-center justify-between">
               <button
                  onClick={removeQuantity}
                  disabled={product.quantity === 1}
                  className="w-full h-full flex justify-center items-center text-lg bg-black py-1 disabled:bg-black/50"
               >
                  -
               </button>
               <small className="w-full h-full flex justify-center items-center">
                  {product.quantity}
               </small>
               <button
                  onClick={addQuantity}
                  className="w-full h-full flex justify-center items-center text-lg bg-black py-1"
               >
                  +
               </button>
            </div>
         </div>
         <div className="px-4 grow flex gap-2 justify-center items-center">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">
               {formatPrice(p.price * product.quantity)}
            </p>
         </div>
      </div>
   )
}
