import { getIngredients } from '@/services/actions/ingredients.action'
import { Ingredient } from './Ingredient'

export const Ingredients = async () => {
   const ingredients = await getIngredients()

   if (!ingredients)
      return (
         <p className="text-center font-bold text-gray-400">
            Upps something went wrong
         </p>
      )

   if (ingredients.length === 0)
      return (
         <p className="col-span-full text-center font-bold text-gray-400">No ingredients</p>
      )

   return ingredients.map((ing) => (
      <Ingredient key={ing._id} _id={ing._id} name={ing.name} />
   ))
}
