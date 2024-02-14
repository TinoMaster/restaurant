import { getCategories } from '@/services/actions/category.actions'
import { redirect } from 'next/navigation'

export default async function MenuPage() {
   const categories = await getCategories()

   if (!categories || categories.length === 0)
      return (
         <div className="h-screen w-full flex justify-center items-center">
            <p>Devi creare almeno una categoria</p>
         </div>
      )
   else redirect(`/menu/${categories[0].name}#top`)
}
