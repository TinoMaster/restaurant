import Link from 'next/link'

interface IngredientProps {
   name: string
   _id: string
}

export const Ingredient = (ingredient: IngredientProps) => {
   const { name, _id } = ingredient
   return (
      <Link
         href={`/profile/admin/categories/${_id}`}
         className="w-full p-3 mx-auto grid grid-cols-10 sm:max-w-sm bg-darkMode hover:bg-lightDarkMode duration-150 rounded-lg overflow-hidden"
      >
         <div className="mt-1 col-span-8">
            <h3 className="text-lg duration-150 capitalize group-hover:text-indigo-600 font-semibold">
               {name}
            </h3>
         </div>
         <div className="col-span-2 bg-gray-200 flex justify-center items-center rounded-lg">
            <p className="text-center text-gray-700 font-bold text-xs">
               No image
            </p>
         </div>
      </Link>
   )
}
