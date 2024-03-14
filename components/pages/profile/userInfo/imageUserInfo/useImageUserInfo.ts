import { updateUser } from '@/services/actions/user.actions'
import { saveImageInCubbit } from '@/utils/saveImageInCubbit'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useImageUserInfo = ({ email }: { email: string }) => {
   const [imageFile, setImageFile] = useState<File | null>(null)
   const [imagePreview, setImagePreview] = useState<string | null>(null)

   function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.files) {
         const file = e.target.files[0]
         const reader = new FileReader()
         setImageFile(file)
         reader.onload = () => {
            if (reader.readyState === 2) {
               setImagePreview(reader.result as string)
            }
         }
         reader.readAsDataURL(file)
      }
   }

   async function formActionChange() {
      toast.loading('Aggiornando la immagine...')
      if (!imageFile) {
         toast.remove()
         toast.error('Devi selezionare un immagine')
         return
      }

      const res = await saveImageInCubbit({ image: imageFile, name: email })

      toast.remove()

      if (!res.success) {
         toast.error(res.message)
         setImageFile(null)
         setImagePreview(null)
      } else {
         const saveUrl = await updateUser({ image: res.data })
         if (!saveUrl) {
            toast.error('Qualcosa non ha funzionato')
            setImageFile(null)
            setImagePreview(null)
         } else {
            toast.success('Immagine aggiornata')
            setImageFile(null)
         }
      }
   }

   return {
      imagePreview,
      onChangeImage,
      formActionChange,
   }
}
