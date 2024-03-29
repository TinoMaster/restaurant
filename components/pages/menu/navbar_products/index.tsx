import { MenuInfinite } from '@/components/ui/globals/MenuInfinite'
import { getCategories } from '@/services/actions/category.actions'

export const NavBarPageMenu = async () => {
   const categories = await getCategories()

   if (!categories || categories.length === 0) {
      return (
         <p className="text-center text-gray-400 text-xl">
            Debe crear al menos una categoria en el panel de admin
         </p>
      )
   }
   const linksCategories = categories.map((category) => ({
      title: category.name,
      href: `/menu/${category.name}`,
   }))
   return (
      <div className="w-full sticky top-[70px] z-20">
         <MenuInfinite
            links={linksCategories}
            cutPath={[1, 3]}
            position="center"
         />
      </div>
   )
}
