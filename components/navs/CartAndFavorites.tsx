'use client'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { FaRegCircleUser } from 'react-icons/fa6'

export const CartAndFavorites = () => {
   const { data: session, status } = useSession()
   const { favorites, cart } = useAppSelector((state) => state.userReducer)

   if (status === 'loading') {
      return (
         <div className="w-10 h-10 animate-pulse bg-white/10 rounded-full"></div>
      )
   }

   if (!session?.user.sub) {
      return (
         <Link href={'/login'} className="flex justify-center lg:hidden">
            <FaRegCircleUser className="w-7 h-7 text-gray-300" />
         </Link>
      )
   }

   return (
      <div
         className={`${
            session?.user.sub ? 'flex' : 'hidden'
         } items-center gap-3 px-2`}
      >
         <Link
            href={'/profile/favorites'}
            className="p-2 relative bg-pri-500/10 shadow-md rounded-full"
         >
            <FaRegHeart className="w-5 h-5 hover:cursor-pointer" />
            {favorites.length > 0 && (
               <span className="flex justify-center w-4 h-4 text-sm items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {favorites.length}
               </span>
            )}
         </Link>
         <Link
            href={'/cart/checkout'}
            className="p-2 relative bg-pri-500/10 shadow-md rounded-full"
         >
            <IoCartOutline className="w-6 h-6 hover:cursor-pointer" />
            {cart.length > 0 && (
               <span className="w-4 h-4 text-sm flex justify-center items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {cart.length}
               </span>
            )}
         </Link>
      </div>
   )
}
