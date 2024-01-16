'use client'

import { useState } from 'react'

interface AddDescriptionToCategoryProps {
   description?: string
   id: string
}

/* // TODO: Continue here */
export const AddDescriptionToCategory = ({
   description,
   id,
}: AddDescriptionToCategoryProps) => {
   const [editDescriptionMode, setEditDescriptionMode] = useState(false)
   const hasDescription = Boolean(description)

   if (editDescriptionMode) {
      return (
         <form className="flex flex-wrap gap-3 items-center py-5 w-full">
            <textarea
               name="description"
               id="description"
               className="input resize-none overflow-auto"
            />
            <button type="submit" className="btn-white ml-auto">
               Save
            </button>
            <button
               onClick={() => setEditDescriptionMode(false)}
               className="btn-white"
            >
               Cancel
            </button>
         </form>
      )
   }

   return (
      <>
         <p className="leading-relaxed py-5">
            {hasDescription ? description : 'No description'}
         </p>
         <div className="flex my-6 justify-end">
            <button
               onClick={() => setEditDescriptionMode(true)}
               className="btn-white"
            >
               {hasDescription ? 'Edit' : 'Add description'}
            </button>
         </div>
      </>
   )
}
