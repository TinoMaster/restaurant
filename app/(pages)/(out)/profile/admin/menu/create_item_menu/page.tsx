import { FormCreateProduct } from '@/components/pages/profile/admin/menu/formCreateProduct'
import { getCategories } from '@/services/actions/category.actions'
import { getIngredients } from '@/services/actions/ingredients.action'

export default async function Form_Create_ItemMenu() {
   const categories = await getCategories()
   const ingredients = await getIngredients()
   return (
      <FormCreateProduct
         ingredients={ingredients || []}
         categories={categories || []}
      />
   )
}
