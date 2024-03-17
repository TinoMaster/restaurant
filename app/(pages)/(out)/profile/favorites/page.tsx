import { ProductCard } from '@/components/ui/globals/productCard'
import { isProductInCart, isProductInFavorite } from '@/libs/utils'
import { getFavorites, getProductsCart } from '@/services/actions/user.actions'

export default async function FavoritesPage() {
   const productsCart = await getProductsCart()
   const favorites = await getFavorites()

   return (
      <div className="text-white space-y-10 min-h-full min-w-full">
         <h1 className="text-3xl text-gray-300 text-center">Favorites</h1>

         <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites &&
               favorites?.favorites.map((product) => (
                  <ProductCard
                     key={product._id}
                     product={product}
                     inCart={
                        productsCart &&
                        isProductInCart(product, productsCart.cart)
                     }
                     isFavorite={
                        favorites &&
                        isProductInFavorite(product, favorites.favorites)
                     }
                  />
               ))}
         </ul>
      </div>
   )
}
