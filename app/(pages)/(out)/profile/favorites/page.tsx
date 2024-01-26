import { ProductCard } from '@/components/ui/globals/productCard'
import { authOptions } from '@/libs/authOptions'
import { getFavorites } from '@/services/actions/user.actions'
import { TProduct } from '@/types/models/product'
import { getServerSession } from 'next-auth'

export default async function FavoritesPage() {
   const session = await getServerSession(authOptions)

   if (!session) {
      return (
         <div className="text-white space-y-10 min-h-full min-w-full">
            <h1 className="text-3xl text-center">Ups something went wrong</h1>
         </div>
      )
   }
   const res = await getFavorites(session?.user.sub)
   const favorites: TProduct[] = res.favorites

   return (
      <div className="text-white space-y-10 min-h-full min-w-full">
         <h1 className="text-3xl text-gray-300 text-center">Favorites</h1>

         <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {favorites?.map((product) => (
               <ProductCard key={product._id} product={product} />
            ))}
         </ul>
      </div>
   )
}
