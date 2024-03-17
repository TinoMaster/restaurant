'use client'
import { formatPrice } from '@/libs/utils'
import { RemoveFromCart } from '@/services/actions/product.action'
import { AddOrRemoveOneMoreProductToCart } from '@/services/actions/user.actions'
import { TProductInCartPopulated } from '@/types/models/product'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useOptimistic } from 'react'
import toast from 'react-hot-toast'
import { IoMdClose } from 'react-icons/io'

export const ProductCardCart = ({
   product,
}: {
   product: TProductInCartPopulated
}) => {
   const { data: session } = useSession()
   const p = product.productId
   const [optimisticAmountInCart, setOptimisticAmountInCart] = useOptimistic(
      product,
      (state, newAmount: number) => {
         return { ...state, quantity: newAmount }
      }
   )

   return (
      <div className="w-full relative flex flex-wrap bg-white/5 py-2 px-4 shadow-md rounded-md items-center justify-between">
         <Image
            width={200}
            height={200}
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-md object-cover"
            src={p.image}
            alt="Product Image"
         />
         <div className="p-2 grow lg:w-1/4 space-y-1">
            <p className="text-lg font-bold capitalize">{p.name}</p>
            <p className="text-lg font-bold">{formatPrice(p.price)}</p>
         </div>
         <div className="w-32 h-full p-4">
            <div className="bg-white/10 w-full h-full rounded-md overflow-hidden flex items-center justify-between">
               <form className="w-full h-full flex justify-center items-center text-lg bg-black py-1 disabled:bg-black/50">
                  <button
                     formAction={async () => {
                        toast.loading('Removing...')
                        const res = await RemoveFromCart(p._id)
                        toast.dismiss()
                        if (res) toast.success('Removed successfully')
                        else toast.error('Something went wrong')
                     }}
                     className="w-10 h-10 absolute -top-4 right-0 bg-white/30 rounded-full flex justify-center items-center"
                  >
                     <IoMdClose />
                  </button>

                  <button
                     formAction={async () => {
                        setOptimisticAmountInCart(
                           optimisticAmountInCart.quantity - 1
                        )

                        await AddOrRemoveOneMoreProductToCart(
                           session?.user.sub as string,
                           p._id,
                           product.quantity - 1
                        )
                     }}
                     className="w-full h-full flex justify-center items-center text-lg"
                  >
                     -
                  </button>
                  <small className="w-full h-full flex justify-center items-center">
                     {optimisticAmountInCart.quantity}
                  </small>

                  <button
                     formAction={async () => {
                        setOptimisticAmountInCart(
                           optimisticAmountInCart.quantity + 1
                        )
                        await AddOrRemoveOneMoreProductToCart(
                           session?.user.sub as string,
                           p._id,
                           product.quantity + 1
                        )
                     }}
                     className="w-full h-full flex justify-center items-center text-lg bg-black py-1"
                  >
                     +
                  </button>
               </form>
            </div>
         </div>
         <div className="px-4 grow flex gap-2 justify-center items-center">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">
               {formatPrice(p.price * optimisticAmountInCart.quantity)}
            </p>
         </div>
      </div>
   )
}
