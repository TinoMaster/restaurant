import { FaTrashCan } from 'react-icons/fa6'
import { BtnDeleteIngredient } from './BtnDeleteIngredient'

interface IngredientProps {
   name: string
   _id: string
}

export const Ingredient = (ingredient: IngredientProps) => {
   const { name, _id } = ingredient
   return (
      <div className="w-full p-2 mx-auto grid grid-cols-10 sm:max-w-sm bg-darkMode rounded-lg overflow-hidden">
         <div className="mt-1 col-span-9">
            <h3 className="text-sm duration-150 capitalize group-hover:text-indigo-600 font-semibold">
               {name}
            </h3>
         </div>
         <BtnDeleteIngredient _id={_id} />
      </div>
   )
}
