'use client'
import { deleteIngredient } from '@/services/actions/ingredients.action'
import toast from 'react-hot-toast'
import { FaTrashCan } from 'react-icons/fa6'

export const BtnDeleteIngredient = ({ _id }: { _id: string }) => {
   return (
      <button
         onClick={async () => {
            if (
               !confirm(
                  'Are you sure, it can be products that are using it?, this action will delete this ingredient from all products'
               )
            ) {
               return
            }

            toast.loading('Deleting...')
            const res = await deleteIngredient(_id)

            toast.remove()

            if (!res) {
               toast.error('Something went wrong')
               return
            }

            toast.success('Ingredient deleted')
         }}
         type="button"
      >
         <FaTrashCan className="text-red-500/70 text-sm hover:text-red-500 transition-colors" />
      </button>
   )
}
