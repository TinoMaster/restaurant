'use client'
import useCartFav from '@/context/cartFavContext'
import { isProductInFavorite } from '@/libs/utils'
import { TProduct } from '@/types/models/product'
import { useSession } from 'next-auth/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const ButtonAddFav = ({ product }: { product: TProduct }) => {
   const { status } = useSession()
   const { favorites, addFavorite, removeFromFavorites } = useCartFav()
   const favoritesIds = favorites.map((p) => p._id)
   const isFavorite = isProductInFavorite(product._id, favoritesIds)

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
               onClick={(e) => {
                  e.stopPropagation()
                  removeFromFavorites(product)
               }}
            >
               <FaHeart className="text-primary/80 hover:text-primary/70 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         ) : (
            <button
               className="text-primary/70 text-2xl lg:text-3xl rounded-full"
               onClick={(e) => {
                  e.stopPropagation()
                  addFavorite(product)
               }}
            >
               <FaRegHeart className="hover:text-primary/50 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         )}
      </div>
   )
}
