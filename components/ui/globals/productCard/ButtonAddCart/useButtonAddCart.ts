import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addToCart, removeFromCart } from '@/redux/reducers/user_slice'
import { AddToCart, RemoveFromCart } from '@/services/actions/product.action'
import { TProduct } from '@/types/models/product'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

export const useButtonAddCart = (product: TProduct) => {
   const { _id, cart } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()
   const { status } = useSession()

   const isProductInTheCart = cart.some((p) => p.productId._id === product._id)

   const handleClickAdd = async () => {
      dispatch(addToCart({ productId: product, quantity: 1, _id }))
      const response = await AddToCart(_id, product._id, 1)

      if (response) {
         toast.success('Added to cart')
      } else {
         dispatch(removeFromCart(product._id))
         toast.error('Error adding to cart')
      }
   }

   const handleClickRemove = async () => {
      dispatch(removeFromCart(product._id))
      const response = await RemoveFromCart(_id, product._id)

      if (response) {
         toast.success('Removed from cart')
      } else {
         dispatch(addToCart({ productId: product, quantity: 1, _id }))
         toast.error('Error removing from cart')
      }
   }

   return {
      handleClickAdd,
      handleClickRemove,
      status,
      isProductInTheCart,
   }
}
