import { getCategories } from '@/services/actions/category.actions'
import { redirect } from 'next/navigation'

export default async function MenuPage() {
   const categories = await getCategories()

   if (!categories || categories.length === 0) return null
   else redirect(`/menu/${categories[0].name}`)
}
