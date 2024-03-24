'use client'
import useCartFav from '@/context/cartFavContext'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaRegCircleUser, FaRegHeart } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'

export const CartAndFavorites = () => {
   const { status } = useSession()
   const { amount } = useCartFav()
   if (status === 'loading') {
      return null
   }

   if (status === 'unauthenticated') {
      return (
         <Link
            aria-label="Accedi"
            href={'/login'}
            className="flex justify-center lg:hidden"
         >
            <FaRegCircleUser className="w-7 h-7 text-gray-300" />
         </Link>
      )
   }

   return (
      <div className="flex items-center gap-3 px-2">
         <Link
            href={'/cart/checkout'}
            className="p-2 relative bg-pri-500/10 shadow-md rounded-full"
         >
            <IoCartOutline className="w-6 h-6 hover:cursor-pointer" />
            {amount && amount.cart > 0 && (
               <span className="w-4 h-4 text-sm flex justify-center items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {amount.cart}
               </span>
            )}
         </Link>
         <Link
            href={'/profile/favorites'}
            className="p-2 relative bg-pri-500/10 shadow-md rounded-full"
         >
            <FaRegHeart className="w-6 h-6 hover:cursor-pointer" />
            {amount && amount.fav > 0 && (
               <span className="w-4 h-4 text-sm flex justify-center items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {amount.fav ?? 0}
               </span>
            )}
         </Link>
      </div>
   )
}
