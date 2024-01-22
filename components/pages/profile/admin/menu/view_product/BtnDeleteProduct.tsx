'use client'

import { deleteProduct } from '@/services/actions/product.action'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const BtnDeleteProduct = ({ id }: { id: string }) => {
   const { push } = useRouter()
   const onDelete = async (id: string) => {
      const confirm = window.confirm(
         'Are you sure you want to delete this product?, you have the option tu update the status of the product!'
      )

      if (!confirm) return
      toast.loading('Deleting...')
      const res = await deleteProduct(id)

      toast.remove()

      if (res) {
         push('/profile/admin/menu')
         toast.success('Product deleted')
      } else {
         toast.error('Something went wrong')
      }
   }
   return (
      <div className="space-x-2">
         <button onClick={() => onDelete(id)} className="btn-white">
            Eliminar
         </button>
      </div>
   )
}
