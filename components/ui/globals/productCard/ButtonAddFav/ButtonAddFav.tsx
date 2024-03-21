'use client'
import useCartFav from '@/context/cartFavContext'
import { isProductInFavorite } from '@/libs/utils'
import { useSession } from 'next-auth/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const ButtonAddFav = ({ productId }: { productId: string }) => {
   const { status } = useSession()
   const { favoritesIds, addFavorite, removeFromFavorites } = useCartFav()
   const isFavorite = isProductInFavorite(productId, favoritesIds)

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse bg-white/5" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <div className="">
         {isFavorite ? (
            <button
               className="text-primary/70 text-2xl lg:text-3xl rounded-full"
               onClick={() => removeFromFavorites(productId)}
            >
               <FaHeart className="text-primary/80 hover:text-primary/70 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         ) : (
            <button
               className="text-primary/70 text-2xl lg:text-3xl rounded-full"
               onClick={() => addFavorite(productId)}
            >
               <FaRegHeart className="hover:text-primary/50 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         )}
      </div>
   )
}
