'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import { TProduct } from '@/types/models/product'
import { FaCartArrowDown } from 'react-icons/fa6'
import { useButtonAddCart } from './useButtonAddCart'

export const ButtonAddCart = ({ product }: { product: TProduct }) => {
   const { status, handleClickAdd, handleClickRemove, isProductInTheCart } =
      useButtonAddCart(product)

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <>
         {isProductInTheCart ? (
            <MotionButton
               onClick={handleClickRemove}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-white/5 text-white text-xs lg:text-sm px-4 py-2 rounded-full focus:outline-none"
            >
               in cart
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
