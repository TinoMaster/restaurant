import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiEditBoxLine } from 'react-icons/ri'

interface CategoryProps {
   name: string
   _id: string
}

export const Category = (category: CategoryProps) => {
   const { name, _id } = category
   return (
      <Link
         href={`/profile/admin/categories/${_id}`}
         className="w-full p-3 mx-auto grid grid-cols-10 sm:max-w-sm bg-darkMode hover:bg-lightDarkMode duration-150 rounded-lg overflow-hidden"
      >
         <div className="mt-1 col-span-8">
            <span className="block text-gray-500 text-xs">CATEGORIA</span>
            <h3 className="text-lg duration-150 capitalize group-hover:text-indigo-600 font-semibold">
               {name}
            </h3>
            <div className="w-full mt-2 flex gap-2 text-gray-50 text-sm">
               <button className="bg-primary/50 p-1 rounded-lg">
                  <RiEditBoxLine />
               </button>
            </div>
         </div>
         <div className="col-span-2 bg-gray-200 flex justify-center items-center rounded-lg">
            <p className="text-center text-gray-700 font-bold text-xs">
               No image
            </p>
         </div>
      </Link>
   )
}
