import { getCategories } from '@/services/actions/category.actions'
import { Category } from './Category'

export const Categories = async () => {
   const categories = await getCategories()

   if (!categories)
      return (
         <p className="text-center font-bold text-gray-400">
            Upps something went wrong
         </p>
      )

   if (categories.length === 0)
      return (
         <p className="text-center font-bold text-gray-400">No categories</p>
      )

   return categories.map((category) => (
      <Category
         key={category._id}
         _id={category._id}
         name={category.name}
         description={category.description}
      />
   ))
}
