'use client'
import { ImageProfile } from '@/components/ui/globals/ImageProfile'
import { changeImageProduct } from '@/services/actions/product.action'
import { saveImageInCubbit } from '@/utils/saveImageInCubbit'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const ImageViewProduct = ({
   image,
   name,
   id,
}: {
   image: string
   name: string
   id: string
}) => {
   const [imagePreview, setImagePreview] = useState<string | undefined>()
   const [imageFile, setImageFile] = useState<File | null>(null)
   const [cancelImagePreview, setCancelImagePreview] = useState(false)

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
      toast.loading('Saving...')

      if (!imageFile) {
         toast.remove()
         toast.error('devi caricare una imagine prima')
         return
      }

      const saveInCubbit = await saveImageInCubbit({
         image: imageFile,
         name: name,
      })

      if (!saveInCubbit.success) {
         toast.remove()
         toast.error('ha avuto un errore')
         setImagePreview(undefined)
         return
      }

      const saveURLInDB = await changeImageProduct(id, saveInCubbit.data)

      toast.remove()

      if (!saveURLInDB) toast.error('ha avuto un errore')
      else toast.success('Immagine modificata')
      setCancelImagePreview(true)
   }

   return (
      <div className="w-full relative flex flex-col items-center gap-2 rounded-lg">
         <ImageProfile
            imagePreview={imagePreview}
            image={image}
            formActionChange={formActionChange}
            onChangeImage={onChangeImage}
            cancelImagePreview={cancelImagePreview}
            setCancelImagePreview={setCancelImagePreview}
            setImagePreview={setImagePreview}
         />
      </div>
   )
}
