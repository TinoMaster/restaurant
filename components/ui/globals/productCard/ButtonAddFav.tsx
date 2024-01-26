'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addFavorite, removeFromFavorite } from '@/redux/reducers/user_slice'
import { IsFavorite, removeFavorite } from '@/services/actions/product.action'
import toast from 'react-hot-toast'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const ButtonAddFav = ({ productId }: { productId: string }) => {
   const { _id, favorites } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()

   const handleClickAdd = async () => {
      dispatch(addFavorite(productId))
      const response = await IsFavorite(productId, _id)

      if (response) {
         toast.success('Added to favorites')
      } else {
         dispatch(removeFromFavorite(productId))
         toast.error('Error adding to favorites')
      }
   }

   const handleClickRemove = async () => {
      dispatch(removeFromFavorite(productId))
      const response = await removeFavorite(productId, _id)

      if (response) {
         toast.success('Removed from favorites')
      } else {
         dispatch(addFavorite(productId))
         toast.error('Error removing from favorites')
      }
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
