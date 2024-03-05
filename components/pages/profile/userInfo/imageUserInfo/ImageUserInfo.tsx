'use client'
import { ImageProfile } from '@/components/ui/globals/ImageProfile'
import { useImageUserInfo } from './useImageUserInfo'

interface IImageBlockProps {
   image: string
   name: string
   email: string
}

export const ImageMainInfo = ({ image, name, email }: IImageBlockProps) => {
   const { handleChangeImage, onChangeImage, imagePreview } = useImageUserInfo({
      email,
   })

   return (
      <ImageProfile
         image={image}
         name={name}
         handleChangeImage={handleChangeImage}
         onChangeImage={onChangeImage}
         imagePreview={imagePreview ?? ''}
      />
   )
}
