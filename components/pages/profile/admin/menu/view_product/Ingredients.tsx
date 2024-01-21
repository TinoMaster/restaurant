'use client'

import { TIngredient } from '@/types/models/ingredient'

export const Ingredients = ({
   ingredients,
   id,
}: {
   ingredients: TIngredient[]
   id: string
}) => {
   return (
      <div className="my-4">
         <p className="font-bold text-primary/80">Ingredientes:</p>
         <p className="capitalize">
            {ingredients.map((ingredient) => ingredient.name).join(', ')}
         </p>
      </div>
   )
}
