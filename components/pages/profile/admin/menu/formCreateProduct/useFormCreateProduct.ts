import { createProduct } from '@/services/actions/product.action'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useFormCreateProduct = () => {
   const [imagePreview, setImagePreview] = useState<string | null>(null)
   const { push } = useRouter()

   function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.files) {
         const file = e.target.files[0]
         const reader = new FileReader()
         reader.onload = () => {
            if (reader.readyState === 2) {
               setImagePreview(reader.result as string)
            }
         }
         reader.readAsDataURL(file)
      }
   }

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
      imagePreview,
      onChangeImage,
   }
}
