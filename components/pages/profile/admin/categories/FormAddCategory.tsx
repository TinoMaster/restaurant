'use client'
import { createCategory } from '@/services/actions/category.actions'
import { useRef } from 'react'
import toast from 'react-hot-toast'

export const FormAddCategory = () => {
   const formRef = useRef<HTMLFormElement>(null)
   return (
      <form
         ref={formRef}
         action={async (formData) => {
            toast.loading('Saving...')
            const res = await createCategory(formData)
            toast.remove()

            if (!res.success) {
               toast.error(res.message)
               return
            }
            toast.success('Category created')
            formRef.current?.reset()
         }}
         className="flex gap-3 items-center py-5 w-full lg:max-w-[500px]"
      >
         <input name="name" type="text" className="input" />
         <button
            type="submit"
            className="bg-white text-gray-600 px-5 py-2 rounded-xl font-bold"
         >
            Create
         </button>
      </form>
   )
}
