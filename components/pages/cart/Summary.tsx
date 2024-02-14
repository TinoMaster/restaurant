'use client'

import { useAppSelector } from '@/redux/hooks'
import { formatPrice } from '@/utils/formatPrice'

export const Summary = () => {
   const { cart } = useAppSelector((state) => state.userReducer)

   const total = cart.reduce(
      (acc, item) => acc + item.quantity * item.productId.price,
      0
   )

   return (
      <div className="w-full h-full p-5 rounded-md">
         <h3 className="text-3xl text-center">Summary</h3>
         <div className="py-5 text-xl">
            <div className="flex justify-between">
               <p>Subtotal</p>
               <p>{formatPrice(total)}</p>
            </div>
            <div className="flex justify-between">
               <p>Shipping</p>
               <p>{formatPrice(0)}</p>
            </div>
         </div>
         <div className="flex justify-between text-2xl">
            <p className="font-bold">Total</p>
            <p>{formatPrice(total)}</p>
         </div>
         <button className="w-full h-10 bg-black text-white rounded-md mt-5">
            Checkout
         </button>
      </div>
   )
}
