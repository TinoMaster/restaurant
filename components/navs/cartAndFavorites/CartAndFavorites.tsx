'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaRegCircleUser } from 'react-icons/fa6'

export const CartAndFavorites = ({
   children,
}: {
   children: React.ReactNode
}) => {
   const { status } = useSession()

   if (status === 'unauthenticated') {
      return (
         <Link href={'/login'} className="flex justify-center lg:hidden">
            <FaRegCircleUser className="w-7 h-7 text-gray-300" />
         </Link>
      )
   }

   return <div className="flex items-center gap-3 px-2">{children}</div>
}
