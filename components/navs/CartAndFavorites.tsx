import { authOptions } from '@/libs/authOptions'
import { getAmountCartAndFavs } from '@/services/actions/user.actions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'

export const CartAndFavorites = async () => {
   const session = await getServerSession(authOptions)

   if (!session) {
      return (
         <Link href={'/login'} className="flex justify-center lg:hidden">
            <FaRegCircleUser className="w-7 h-7 text-gray-300" />
         </Link>
      )
   }
   const amount = await getAmountCartAndFavs(session?.user.sub)
   const { cart, favorites } = amount as { cart: number; favorites: number }

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
            {favorites > 0 && (
               <span className="flex justify-center w-4 h-4 text-sm items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {favorites}
               </span>
            )}
         </Link>
         <Link
            href={'/cart/checkout'}
            className="p-2 relative bg-pri-500/10 shadow-md rounded-full"
         >
            <IoCartOutline className="w-6 h-6 hover:cursor-pointer" />
            {cart > 0 && (
               <span className="w-4 h-4 text-sm flex justify-center items-center text-white rounded-full bg-pri-600 absolute -top-1 -right-1">
                  {cart}
               </span>
            )}
         </Link>
      </div>
   )
}
