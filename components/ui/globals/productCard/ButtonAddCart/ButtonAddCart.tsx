'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import { AddToCart, RemoveFromCart } from '@/services/actions/product.action'
import { useSession } from 'next-auth/react'
import { useOptimistic } from 'react'
import { BsCart, BsCartCheck, BsCartCheckFill } from 'react-icons/bs'

export const ButtonAddCart = ({
   productId,
   inCart = false,
}: {
   productId: string
   inCart?: boolean
}) => {
   const { status } = useSession()
   const [octIsInCart, setOctIsInCart] = useOptimistic(
      inCart,
      (state, newIsInCart: boolean) => newIsInCart
   )

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <form className="">
         {octIsInCart ? (
            <MotionButton
               formAction={async () => {
                  setOctIsInCart(!octIsInCart)
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
                  setOctIsInCart(!octIsInCart)
                  await AddToCart(productId)
               }}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-black/20 text-white/70 text-2xl lg:text-3xl rounded-full focus:outline-none"
            >
               <BsCart />
            </MotionButton>
         )}
      </form>
   )
}
