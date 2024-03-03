import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addFavorite, removeFromFavorite } from '@/redux/reducers/user_slice'
import { IsFavorite, removeFavorite } from '@/services/actions/product.action'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

export const useButtonAddFav = (productId: string) => {
   const { _id, favorites } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()
   const { status } = useSession()

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

   return {
      handleClickAdd,
      handleClickRemove,
      status,
      favorites,
   }
}