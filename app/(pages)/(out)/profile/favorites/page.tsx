'use client'
import { ProductCard } from '@/components/ui/globals/productCard'
import { LoadingProductsMenu } from '@/components/ui/loaders/LoadingProductsMenu'
import useCartFav from '@/context/cartFavContext'
import { useSession } from 'next-auth/react'

export default function FavoritesPage() {
   const { status } = useSession()
   const { favorites } = useCartFav()

   if (status === 'loading') return <LoadingProductsMenu />

   return (
      <div className="text-white space-y-10 min-h-full min-w-full">
         <h1 className="text-3xl text-gray-300 text-center">Favorites</h1>

         <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites &&
               favorites?.map((product) => (
                  <ProductCard key={product._id} product={product} />
               ))}
         </ul>
      </div>
   )
}
