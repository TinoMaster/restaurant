'use client'
import { MotionButton } from '@/components/helpers/MotionDiv'
import { AddToCart, RemoveFromCart } from '@/services/actions/product.action'
import { TProduct } from '@/types/models/product'
import { useSession } from 'next-auth/react'
import { useOptimistic } from 'react'
import { FaCartArrowDown } from 'react-icons/fa6'

export const ButtonAddCart = ({
   product,
   inCart = false,
}: {
   product: TProduct
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
      <form>
         {octIsInCart ? (
            <MotionButton
               formAction={async () => {
                  setOctIsInCart(!octIsInCart)
                  await RemoveFromCart(product._id)
               }}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-white/5 text-white text-xs lg:text-sm px-4 py-2 rounded-full focus:outline-none"
            >
               in cart
            </MotionButton>
         ) : (
            <MotionButton
               formAction={async () => {
                  setOctIsInCart(!octIsInCart)
                  await AddToCart(product._id)
               }}
               whileHover={{ y: [0, -5, 0, -5, 0] }}
               className="bg-pri-800 text-white text-xs lg:text-base p-2 rounded-full focus:outline-none"
            >
               <FaCartArrowDown />
            </MotionButton>
         )}
      </form>
   )
}
