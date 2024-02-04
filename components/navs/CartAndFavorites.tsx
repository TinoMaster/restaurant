'use client'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'

export const CartAndFavorites = () => {
   const { favorites, cart } = useAppSelector((state) => state.userReducer)

   return (
      <div className="flex items-center gap-3 px-2">
         <Link href={'/profile/favorites'} className="p-2 relative">
            <FaRegHeart className="w-6 h-6 hover:cursor-pointer" />
            {favorites.length > 0 && (
               <span className="flex justify-center w-4 h-4 text-sm items-center text-white rounded-full bg-green-600 absolute -top-1 -right-1">
                  {favorites.length}
               </span>
            )}
         </Link>
         <Link href={'/cart'} className="p-2 relative">
            <IoCartOutline className="w-6 h-6 hover:cursor-pointer" />
            {cart.length > 0 && (
               <span className="w-4 h-4 text-sm flex justify-center items-center text-white rounded-full bg-green-600 absolute -top-1 -right-1">
                  {cart.length}
               </span>
            )}
         </Link>
      </div>
   )
}
