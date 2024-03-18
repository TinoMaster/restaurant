'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import useCartFav from '@/context/cartFavContext'
import { isProductInCart } from '@/libs/utils'
import { useSession } from 'next-auth/react'
import { BsCart, BsCartCheckFill } from 'react-icons/bs'

export const ButtonAddCart = ({ productId }: { productId: string }) => {
   const { status } = useSession()
   const { cartIds, addCart, removeFromCart } = useCartFav()
   const isInCart = isProductInCart(productId, cartIds)

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
                  onClick={() => removeFromCart(productId)}
               >
                  <BsCartCheckFill />
                  <p className="absolute text-[8px] text-center -bottom-3">
                     in cart
                  </p>
               </MotionButton>
            ) : (
               <MotionButton
                  whileHover={{ y: [0, -5, 0, -5, 0] }}
                  className="bg-black/20 text-primary/70 text-2xl lg:text-3xl rounded-full focus:outline-none"
                  onClick={() => addCart(productId)}
               >
                  <BsCart />
               </MotionButton>
            )}
         </div>
      </>
   )
}
