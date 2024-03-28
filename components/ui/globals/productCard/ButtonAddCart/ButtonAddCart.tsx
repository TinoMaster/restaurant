'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import useCartFav from '@/context/cartFavContext'
import { isProductInCart } from '@/libs/utils'
import { TProduct } from '@/types/models/product'
import { useSession } from 'next-auth/react'
import { BsCart, BsCartCheckFill } from 'react-icons/bs'

export const ButtonAddCart = ({ product }: { product: TProduct }) => {
   const { status } = useSession()
   const { cart, addCart, removeFromCart } = useCartFav()
   const cartIds = cart.map((el) => el.productId._id)
   const isInCart = isProductInCart(product._id, cartIds)

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse bg-white/5" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <>
         <div>
            {isInCart ? (
               <MotionButton
                  whileHover={{ y: [0, -5, 0, -5, 0] }}
                  className="text-primary text-2xl lg:text-3xl rounded-full focus:outline-none relative"
                  onClick={(e) => {
                     e.stopPropagation()
                     removeFromCart(product)
                  }}
               >
                  <BsCartCheckFill />
               </MotionButton>
            ) : (
               <MotionButton
                  whileHover={{ y: [0, -5, 0, -5, 0] }}
                  className="bg-black/20 text-primary/70 text-2xl lg:text-3xl rounded-full focus:outline-none"
                  onClick={(e) => {
                     e.stopPropagation()
                     addCart(product)
                  }}
               >
                  <BsCart />
               </MotionButton>
            )}
         </div>
      </>
   )
}
