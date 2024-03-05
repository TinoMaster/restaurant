'use client'
import { ImageProfile } from '@/components/ui/globals/ImageProfile'
import React from 'react'

export const ImageViewProduct = ({ image }: { image: string }) => {
   return (
      <div className="w-full relative flex flex-col items-center gap-2 rounded-lg">
         <ImageProfile
            image={image}
            handleChangeImage={() => {}}
            onChangeImage={() => {}}
         />
      </div>
   )
}
