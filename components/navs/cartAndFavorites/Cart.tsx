import { authOptions } from '@/libs/authOptions'
import { getAmountCartAndFavs } from '@/services/actions/user.actions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export const Cart = async () => {
   const session = await getServerSession(authOptions)
   const amount = await getAmountCartAndFavs(session?.user.sub as string)

   return (
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
   )
}
