import { getCategories } from '@/services/actions/category.actions'
import { getProducts } from '@/services/actions/product.action'
import { TLink } from '@/types/common'
import { BrokeBackground } from '../../backgrounds/BrokeBackground'
import { LinkButton } from '../../ui/buttons/LinkButton'
import { ProductCard } from '../../ui/globals/productCard'

export const PreferMenu = async () => {
   const products = await getProducts()
   const categories = await getCategories()
   let linkMenu: TLink

   if (!categories) {
      linkMenu = {
         title: 'Menu',
         href: '/menu',
      }
   } else {
      linkMenu = {
         title: 'Menu',
         href: `/menu/${categories[0].name}`,
      }
   }

   return (
      <section className="py-20 lg:py-44 px-2 z-10 bg-lightDarkMode text-slate-100 relative flex flex-col items-center justify-center">
         <BrokeBackground />
         <h3 className="text-primary/80 font-bold text-center w-full">Menu</h3>
         <p className="italic text-white pb-10">Il Vostro Preferito</p>
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
            <LinkButton href={linkMenu.href} title="Vedi Menu" />
         </div>
      </section>
   )
}

export const revalidate = 0
