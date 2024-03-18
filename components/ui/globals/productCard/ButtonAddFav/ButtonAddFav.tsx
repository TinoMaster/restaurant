'use client'
import {
   addToFavorite,
   removeFavorite,
} from '@/services/actions/product.action'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const ButtonAddFav = ({ productId }: { productId: string }) => {
   const { status } = useSession()
   const [isFavorite, setIsFavorite] = useState(false)

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse bg-white/5" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <form className="">
         {isFavorite ? (
            <button
               formAction={async () => {
                  setIsFavorite((prev) => !prev)
                  await removeFavorite(productId)
               }}
               className="text-primary/70 text-2xl lg:text-3xl rounded-full"
            >
               <FaHeart className="text-primary/80 hover:text-primary/70 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         ) : (
            <button
               formAction={async () => {
                  setIsFavorite((prev) => !prev)
                  await addToFavorite(productId)
               }}
               className="text-primary/70 text-2xl lg:text-3xl rounded-full"
            >
               <FaRegHeart className="hover:text-primary/50 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         )}
      </form>
   )
}
