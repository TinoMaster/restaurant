'use client'

import { deleteCategory } from '@/services/actions/category.actions'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface ButtomDeleteCategoryProps {
   id: string
}

export const ButtomDeleteCategory = ({ id }: ButtomDeleteCategoryProps) => {
   const { push } = useRouter()
   const onDelete = async () => {
      const confirm = window.confirm(
         'Are you sure you want to delete this category?'
      )
      if (!confirm) return
      toast.loading('Deleting...')
      const res = await deleteCategory(id)
      toast.remove()

      if (res) {
         toast.success('Category deleted')
         push('/profile/admin/categories')
      } else {
         toast.error('Something went wrong')
      }
   }

   return (
      <button
         onClick={onDelete}
         type="button"
         className="flex ml-auto text-white bg-red-500/80 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 transition-colors rounded"
      >
         Delete
      </button>
   )
}
