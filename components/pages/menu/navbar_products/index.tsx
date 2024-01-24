import { getCategories } from '@/services/actions/category.actions'
import { LinksNavBarPageMenu } from './LinksNavBarPageMenu'

export const NavBar_pageMenu = async () => {
   const categories = await getCategories()

   if (!categories || categories.length === 0)
      return (
         <p className="text-center text-gray-400 text-xl">
            Debe crear al menos una categoria en el panel de admin
         </p>
      )

   return <LinksNavBarPageMenu categories={categories} />
}
