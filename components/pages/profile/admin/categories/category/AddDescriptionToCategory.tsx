'use client'
import { addDescription } from '@/services/actions/category.actions'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface AddDescriptionToCategoryProps {
   description?: string
   id: string
}

export const AddDescriptionToCategory = ({
   description,
   id,
}: AddDescriptionToCategoryProps) => {
   const [editDescriptionMode, setEditDescriptionMode] = useState(false)
   const hasDescription = Boolean(description)

   if (editDescriptionMode) {
      return (
         <form
            action={async (formData) => {
               toast.loading('Saving...')
               const res = await addDescription(formData, id)
               toast.remove()
               if (res) {
                  toast.success('Description saved')
                  setEditDescriptionMode(false)
               }
               if (!res) toast.error('Something went wrong')
            }}
            className="flex flex-wrap gap-3 items-center py-5 w-full"
         >
            <textarea
               name="description"
               id="description"
               className="input resize-none overflow-auto"
               defaultValue={description}
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
