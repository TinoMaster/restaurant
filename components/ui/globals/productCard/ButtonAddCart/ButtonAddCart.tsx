'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import { isProductInCart } from '@/libs/utils'
import { AddToCart, RemoveFromCart } from '@/services/actions/product.action'
import { getProductsCartIds } from '@/services/actions/user.actions'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { BsCart, BsCartCheckFill } from 'react-icons/bs'

export const ButtonAddCart = ({ productId }: { productId: string }) => {
   const { status } = useSession()
   const [isInCart, setIsInCart] = useState(false)

   useEffect(() => {
      getProductsCartIds().then((data) => {
         if (!data) return
         setIsInCart(isProductInCart(productId, data.cart))
      })
   }, [productId])

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse bg-white/5" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <form className="">
         {isInCart ? (
            <MotionButton
               formAction={async () => {
                  setIsInCart((prev) => !prev)
                  await RemoveFromCart(productId)
               }}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="text-primary text-2xl lg:text-3xl rounded-full focus:outline-none relative"
            >
               <BsCartCheckFill />
               <p className="absolute text-[8px] text-center -bottom-3">
                  in cart
               </p>
            </MotionButton>
         ) : (
            <MotionButton
               formAction={async () => {
                  setIsInCart((prev) => !prev)
                  await AddToCart(productId)
               }}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-black/20 text-primary/70 text-2xl lg:text-3xl rounded-full focus:outline-none"
            >
               <BsCart />
            </MotionButton>
         )}
      </form>
   )
}
