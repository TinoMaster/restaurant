'use client'
import useCartFav from '@/context/cartFavContext'
import { formatPrice } from '@/libs/utils'
import { GiTabletopPlayers } from 'react-icons/gi'
import { ImHome3 } from 'react-icons/im'

export const Summary = () => {
   const { summaryCart } = useCartFav()
   return (
      <div className="w-full h-full p-5 rounded-md bg-gradient-to-b from-white/10 via-white/5 to-white/10">
         <div className="text-xl">
            <div className="flex justify-between">
               <p>Subtotal</p>
               <p>{formatPrice(summaryCart)}</p>
            </div>
            <div className="flex justify-between">
               <p>Shipping</p>
               <p>{formatPrice(0)}</p>
            </div>
         </div>
         <div className="flex justify-between text-2xl">
            <p className="font-bold">Total</p>
            <p>{formatPrice(summaryCart)}</p>
         </div>
         <div className="flex gap-2 pt-2">
            <button className="w-full h-10 bg-black/60 hover:bg-black transition-colors text-white rounded-md flex items-center justify-center gap-2">
               <ImHome3 size={24} />A Casa
            </button>
            <button className="w-full h-10 bg-black/60 hover:bg-black transition-colors text-white rounded-md flex items-center justify-center gap-2">
               <GiTabletopPlayers size={24} />A Tavolo
            </button>
         </div>
      </div>
   )
}
