import { getProducts } from '@/services/actions/product.action'
import { BrokeBackground } from '../../backgrounds/BrokeBackground'
import { ProductCard } from '../../ui/globals/productCard'
import { LinkButton } from '../../ui/buttons/LinkButton'
import { MENU_PAGE } from '@/constants/routes.app'

export const PreferMenu = async () => {
   const products = await getProducts()

   return (
      <section className="py-20 lg:py-44 px-2 z-10 bg-lightDarkMode text-slate-100 relative flex flex-col items-center justify-center">
         <BrokeBackground />
         <h6 className="text-primary/80 font-bold text-center w-full">Menu</h6>
         <h3 className="italic text-white pb-10">Il Vostro Preferito</h3>
         <article className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:p-10 py-5">
               {products && products?.length > 0 ? (
                  products.map((item, index) => (
                     <ProductCard
                        key={index}
                        index={index}
                        product={item}
                     />
                  ))
               ) : (
                  <p className="text-center col-span-full text-gray-300">
                     Debes crear productos para que puedas verlos aqui
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
