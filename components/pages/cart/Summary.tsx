'use client'
import { useAppSelector } from '@/redux/hooks'
import { formatPrice } from '@/utils/formatPrice'
import { GiTabletopPlayers } from 'react-icons/gi'
import { ImHome3 } from 'react-icons/im'

export const Summary = () => {
   const { cart } = useAppSelector((state) => state.userReducer)

   const total = cart.reduce(
      (acc, item) => acc + item.quantity * item.productId.price,
      0
   )

   return (
      <div className="w-full h-full p-5 rounded-md bg-gradient-to-b from-black/60 via-black/10 to-black/60">
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
         <div className="py-5 space-y-3">
            <button className="w-full h-10 bg-black/60 hover:bg-black transition-colors text-white rounded-md flex items-center justify-center gap-2">
               <ImHome3 size={24} />A Casa
            </button>
            <button className="w-full h-10 bg-black/60 hover:bg-black transition-colors text-white rounded-md flex items-center justify-center gap-2">
               <GiTabletopPlayers size={24} />A Tavollo
            </button>
         </div>
      </div>
   )
}
