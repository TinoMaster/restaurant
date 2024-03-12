import { ProductCard } from '@/components/ui/globals/productCard'
import { authOptions } from '@/libs/authOptions'
import { getFavorites, getProductsCart } from '@/services/actions/user.actions'
import { TProduct } from '@/types/models/product'
import { getServerSession } from 'next-auth'

export default async function FavoritesPage() {
   const session = await getServerSession(authOptions)
   const productsCart = await getProductsCart(session?.user?.sub as string)
   const favorites = await getFavorites(session?.user?.sub as string)

   if (!productsCart) return
   if (!favorites) return

   const isInCart = (product: TProduct) => {
      return productsCart.cart.some((p) => p.productId._id === product._id)
   }

   const isInFavorite = (product: TProduct) => {
      return favorites.favorites.some((p) => p._id === product._id)
   }

   return (
      <div className="text-white space-y-10 min-h-full min-w-full">
         <h1 className="text-3xl text-gray-300 text-center">Favorites</h1>

         <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites?.favorites.map((product) => (
               <ProductCard
                  key={product._id}
                  product={product}
                  inCart={isInCart(product)}
                  isFavorite={isInFavorite(product)}
               />
            ))}
         </ul>
      </div>
   )
}
