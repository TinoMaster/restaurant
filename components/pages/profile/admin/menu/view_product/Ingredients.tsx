'use client'
import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { EditInput } from '@/components/ui/buttons/EditInput'
import { TIngredient } from '@/types/models/ingredient'
import { objectsAreIquals } from '@/utils/objectsAreEquals'
import { MdCancel } from 'react-icons/md'
import { useIngredient } from './useIngredient'

export const Ingredients = ({
   ingredients,
   id,
}: {
   ingredients: TIngredient[]
   id: string
}) => {
   const {
      allIngredients,
      editionMode,
      handleEditionMode,
      onSelect,
      onCancelIngredient,
   } = useIngredient(id)

   return (
      <div className="my-4">
         <div className="flex gap-2 items-center">
            <p className="font-bold text-primary/80">Ingredientes:</p>
            {!editionMode ? (
               <EditInput onClick={handleEditionMode} />
            ) : (
               <ConfirmOrCancelInputChanges onConfirm={handleEditionMode} />
            )}
         </div>
         <p className="capitalize flex flex-wrap gap-2">
            {ingredients.map((ingredient) => {
               return (
                  <p className="flex items-center gap-2" key={ingredient._id}>
                     <span>{ingredient.name}</span>
                     {editionMode && (
                        <button
                           onClick={() =>
                              onCancelIngredient(id, ingredient._id)
                           }
                           className=""
                        >
                           <MdCancel className="text-red-500/80 hover:text-red-500" />
                        </button>
                     )}
                  </p>
               )
            })}
         </p>
         {editionMode && (
            <select
               onChange={onSelect}
               name="ingredients"
               className="w-full bg-lightDarkMode p-2 mt-2 rounded-md"
            >
               <option value="none">--Choose an ingredient--</option>
               {allIngredients
                  ?.filter(
                     (ing) => !ingredients.some((i) => objectsAreIquals(i, ing))
                  )
                  .map((ingredient) => {
                     return (
                        <option
                           key={ingredient._id}
                           value={ingredient._id}
                           className="capitalize text-sm bg-lightDarkMode"
                        >
                           {ingredient.name}
                        </option>
                     )
                  })}
            </select>
         )}
      </div>
   )
}
