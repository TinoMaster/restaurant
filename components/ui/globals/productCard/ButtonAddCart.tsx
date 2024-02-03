'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addToCart, removeFromCart } from '@/redux/reducers/user_slice'
import { AddToCart, RemoveFromCart } from '@/services/actions/product.action'
import toast from 'react-hot-toast'
import { FaCartArrowDown } from 'react-icons/fa6'
import { BsFillCartCheckFill } from 'react-icons/bs'

export const ButtonAddCart = ({ productId }: { productId: string }) => {
   const { _id, cart } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()

   const isProductInTheCart = cart.some((p) => p.productId === productId)

   const handleClickAdd = async () => {
      dispatch(addToCart({ productId, quantity: 1 }))
      const response = await AddToCart(_id, productId, 1)

      if (response) {
         toast.success('Added to cart')
      } else {
         dispatch(removeFromCart(productId))
         toast.error('Error adding to cart')
      }
   }

   const handleClickRemove = async () => {
      dispatch(removeFromCart(productId))
      const response = await RemoveFromCart(_id, productId)

      if (response) {
         toast.success('Removed from cart')
      } else {
         dispatch(addToCart({ productId, quantity: 1 }))
         toast.error('Error removing from cart')
      }
   }

   return (
      <>
         {isProductInTheCart ? (
            <MotionButton
               onClick={handleClickRemove}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-green-800 text-white text-xs lg:text-base p-2 rounded-full focus:outline-none"
            >
               <BsFillCartCheckFill />
            </MotionButton>
         ) : (
            <MotionButton
               onClick={handleClickAdd}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-pri-800 text-white text-xs lg:text-base p-2 rounded-full focus:outline-none"
            >
               <FaCartArrowDown />
            </MotionButton>
         )}
      </>
   )
}
