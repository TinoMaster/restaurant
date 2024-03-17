'use client'
import {
   addToFavorite,
   removeFavorite,
} from '@/services/actions/product.action'
import { useSession } from 'next-auth/react'
import { useOptimistic } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const ButtonAddFav = ({
   productId,
   isFavorite = false,
}: {
   productId: string
   isFavorite?: boolean
}) => {
   const { status } = useSession()
   const [octIsFavorite, setOctIsFavorite] = useOptimistic(
      isFavorite,
      (state, newIsFavorite: boolean) => newIsFavorite
   )

   if (status === 'loading') {
      return <small className="w-5 h-5 rounded-full animate-pulse" />
   }

   if (status === 'unauthenticated') {
      return null
   }

   return (
      <form className='absolute top-2 right-1'>
         {octIsFavorite ? (
            <button
               formAction={async () => {
                  setOctIsFavorite(!octIsFavorite)
                  await removeFavorite(productId)
               }}
               className="text-white/70 px-2 text-2xl lg:text-3xl rounded-full"
            >
               <FaHeart className="text-red-500/50 hover:text-red-500/70 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         ) : (
            <button
               formAction={async () => {
                  setOctIsFavorite(!octIsFavorite)
                  await addToFavorite(productId)
               }}
               className="text-white/70 px-2 text-2xl lg:text-3xl rounded-full"
            >
               <FaRegHeart className="hover:text-red-500/50 fill-current focus:shadow-outline-blue active:animate-ping transition duration-150 ease-in-out" />
            </button>
         )}
      </form>
   )
}
