import { getIngredients } from "@/services/actions/ingredients.action"
import { addIngredientToProduct, deleteIngredientFromProduct } from "@/services/actions/product.action"
import { TIngredient } from "@/types/models/ingredient"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export const useIngredient = (id: string) => {
   const [editionMode, setEditionMode] = useState(false)
   const [allIngredients, setAllIngredients] = useState<TIngredient[]>([])

   useEffect(() => {
      getIngredients().then((res) => {
         if (res) {
            setAllIngredients(res)
         }
      })
   }, [])

   const handleEditionMode = () => {
      setEditionMode((prev) => !prev)
   }

   const onSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target
      if (value !== 'none') {
         toast.loading('Saving...')
         const res = await addIngredientToProduct(id, value)
         toast.remove()
         if (res) {
            toast.success('Ingredient added')
         } else {
            toast.error('Something went wrong')
         }
      }
   }

   const onCancelIngredient = async (id: string, idIng: string) => {
      toast.loading('Deleting...')
      const res = await deleteIngredientFromProduct(id, idIng)

      toast.remove()

      if (res) {
         toast.success('Ingredient deleted')
      } else {
         toast.error('Something went wrong')
      }
   }

   return {
      editionMode,
      handleEditionMode,
      allIngredients,
      onSelect,
      onCancelIngredient,
   }
}
