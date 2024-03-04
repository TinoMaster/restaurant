import { createProduct } from '@/services/actions/product.action'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useFormCreateProduct = () => {
   const { push } = useRouter()

   const onSubmit = async (formData: FormData) => {
      toast.loading('Saving...')
      const res = await createProduct(formData)

      toast.remove()

      if (!res.success) {
         toast.error(res.message)
         return
      }

      toast.success('Item menu created')
      push('/profile/admin/menu')
   }
   return {
      onSubmit,
   }
}
