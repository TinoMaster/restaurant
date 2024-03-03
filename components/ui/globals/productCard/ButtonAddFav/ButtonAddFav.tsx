'use client'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useButtonAddFav } from './useButtonAddFav'

export const ButtonAddFav = ({ productId }: { productId: string }) => {
   const { favorites, handleClickAdd, handleClickRemove, status } =
      useButtonAddFav(productId)

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <>
         {favorites.includes(productId) ? (
            <button
               onClick={handleClickRemove}
               className="text-white/70 px-2 lg:text-2xl rounded-full"
            >
               <FaHeart className="text-red-500/50 hover:text-red-500/70 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         ) : (
            <button
               onClick={handleClickAdd}
               className="text-white/70 px-2 lg:text-2xl rounded-full"
            >
               <FaRegHeart className="hover:text-red-500/50 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         )}
      </>
   )
}
