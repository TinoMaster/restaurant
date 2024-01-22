import { getCategories } from '@/services/actions/category.actions'
import Link from 'next/link'

export const NavBar_pageMenu = async () => {
   const categories = await getCategories()

   if (!categories)
      return <p>debe crear al menos una categoria en el panel de admin</p>

   return (
      <ul className="container grid grid-cols-4 text-slate-200 gap-y-6 uppercase">
         {categories?.map((link) => (
            <Link
               key={link.name}
               href={`/menu/${link.name}`}
               className={` col-span-1 flex justify-center rounded-md`}
            >
               <span>{link.name}</span>
            </Link>
         ))}
      </ul>
   )
}
