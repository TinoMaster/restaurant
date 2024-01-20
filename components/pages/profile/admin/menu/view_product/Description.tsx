'use client'
import { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
export const Description = ({ description }: { description: string }) => {
   const [editionMode, setEditionMode] = useState(false)
   return (
      <div>
         <div className="flex gap-2 items-center">
            <p className="font-bold text-primary/80">Descripción:</p>
            <button
               onClick={() => setEditionMode(!editionMode)}
               className="bg-lightDarkMode p-2 rounded-full"
            >
               <FiEdit className="text-sm" />
            </button>
         </div>
         {editionMode && (
            <textarea
               name="description"
               id=""
               defaultValue={description}
               cols={10}
               rows={3}
               className="input resize-none overflow-auto mt-2"
            />
         )}
         {!editionMode && (
            <p className="leading-relaxed lg:h-32 overflow-auto">
               {description}
            </p>
         )}
      </div>
   )
}
