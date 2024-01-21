'use client'

import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { EditInput } from '@/components/ui/buttons/EditInput'
import { getIngredients } from '@/services/actions/ingredients.action'
import { TIngredient } from '@/types/models/ingredient'
import { useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'

export const Ingredients = ({
   ingredients,
   id,
}: {
   ingredients: TIngredient[]
   id: string
}) => {
   const [editionMode, setEditionMode] = useState(false)
   const [allIngredients, setAllIngredients] = useState<TIngredient[]>([])

   useEffect(() => {
      getIngredients().then((res) => {
         if (res) {
            setAllIngredients(res)
         }
      })
   }, [])

   return (
      <div className="my-4">
         <div className="flex gap-2 items-center">
            <p className="font-bold text-primary/80">Ingredientes:</p>
            {!editionMode ? (
               <EditInput onClick={() => setEditionMode(true)} />
            ) : (
               <ConfirmOrCancelInputChanges
                  onConfirm={() => setEditionMode(false)}
                  onCancel={() => setEditionMode(false)}
               />
            )}
         </div>
         <p className="capitalize">
            {ingredients.map((ingredient) => {
               return (
                  <p className='flex items-center gap-2' key={ingredient._id}>
                     <span>{ingredient.name}</span>
                     {!editionMode && (
                        <button className="">
                           <MdCancel className="text-red-500/80 hover:text-red-500" />
                        </button>
                     )}
                  </p>
               )
            })}
         </p>
      </div>
   )
}
