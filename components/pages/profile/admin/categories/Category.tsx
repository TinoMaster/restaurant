import Link from 'next/link'

interface CategoryProps {
   name: string
   _id: string
   description: string | undefined
}

export const Category = (category: CategoryProps) => {
   const { name, _id, description } = category
   const hasDescription = Boolean(description)
   const desc = hasDescription ? description : 'No description'
   return (
      <Link
         href={`/profile/admin/categories/${_id}`}
         className="w-full p-3 mx-auto grid grid-cols-10 sm:max-w-sm bg-darkMode hover:bg-lightDarkMode duration-150 rounded-lg overflow-hidden"
      >
         <div className="mt-1 col-span-8">
            <h3 className="text-base duration-150 capitalize group-hover:text-indigo-600 font-semibold">
               {name}
            </h3>
            <p className="text-gray-400 text-sm">{desc}</p>
         </div>
         <div className="col-span-2 bg-gray-200/30 flex justify-center items-center rounded-lg">
            <p className="text-center text-gray-300 font-bold text-xs">
               No image
            </p>
         </div>
      </Link>
   )
}
