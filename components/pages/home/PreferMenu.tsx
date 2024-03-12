import { getProducts } from '@/services/actions/product.action'
import { BrokeBackground } from '../../backgrounds/BrokeBackground'
import { ProductCard } from '../../ui/globals/productCard'
import { LinkButton } from '../../ui/buttons/LinkButton'
import { MENU_PAGE } from '@/constants/routes.app'
import { getFavorites, getProductsCart } from '@/services/actions/user.actions'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/authOptions'
import { TProduct } from '@/types/models/product'

export const PreferMenu = async () => {
   const session = await getServerSession(authOptions)
   const products = await getProducts()
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
      <section className="py-20 lg:py-44 px-2 z-10 bg-lightDarkMode text-slate-100 relative flex flex-col items-center justify-center">
         <BrokeBackground />
         <h6 className="text-primary/80 font-bold text-center w-full">Menu</h6>
         <h3 className="italic text-white pb-10">Il Vostro Preferito</h3>
         <article className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:p-10 py-5">
               {products && products?.length > 0 ? (
                  products
                     .slice(0, 8)
                     .map((item, index) => (
                        <ProductCard
                           key={item._id}
                           index={index}
                           product={item}
                           inCart={isInCart(item)}
                           isFavorite={isInFavorite(item)}
                        />
                     ))
               ) : (
                  <p className="text-center col-span-full text-gray-300">
                     Debes crear productos para que puedas verlos aquí
                  </p>
               )}
            </div>
         </article>
         <div className="flex justify-center pt-20">
            <LinkButton href={MENU_PAGE} title="Vedi Menu" />
         </div>
      </section>
   )
}
