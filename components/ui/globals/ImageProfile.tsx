'use client'
import Image from 'next/image'

interface IImageBlockProps {
   image?: string
   name?: string
   formActionChange?: () => void
   onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void
   imagePreview?: string
   setImagePreview?: (value: string) => void
   cancelImagePreview?: boolean
   setCancelImagePreview?: (value: boolean) => void
}

export const ImageProfile = ({
   image,
   name,
   formActionChange,
   onChangeImage,
   imagePreview,
   cancelImagePreview,
   setCancelImagePreview,
   setImagePreview,
}: IImageBlockProps) => {
   return (
      <>
         <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
            {imagePreview ? (
               <Image
                  fill
                  src={imagePreview}
                  alt="profile"
                  className="w-full h-full object-cover object-top rounded-full"
               />
            ) : (
               renderImageOrName(image, name)
            )}
         </div>
         {imagePreview && !cancelImagePreview ? (
            <form action={formActionChange} className="flex gap-2">
               <button
                  title="change image"
                  type="submit"
                  className="btn-white disabled:bg-pri-300/40 disabled:cursor-not-allowed"
               >
                  Save
               </button>
               <button
                  title="cancel image"
                  type="button"
                  onClick={() => {
                     setCancelImagePreview && setCancelImagePreview(true)
                     setImagePreview && setImagePreview('')
                  }}
                  className="btn-white disabled:bg-pri-300/40 disabled:cursor-not-allowed"
               >
                  cancel
               </button>
            </form>
         ) : (
            <label htmlFor="change-image" className="btn-white">
               Change image
            </label>
         )}
         <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
               setCancelImagePreview && setCancelImagePreview(false)
               onChangeImage(event)
            }}
            type="file"
            name="image"
            id="change-image"
            className="hidden"
         />
      </>
   )
}

function renderImageOrName(image?: string, name?: string | undefined) {
   if (image) {
      return (
         <Image
            fill
            src={image}
            alt="profile"
            className="w-full h-full object-cover object-top rounded-full"
            priority
         />
      )
   } else {
      return renderNameIfExist(name)
   }
}

function renderNameIfExist(name?: string | undefined) {
   if (name) {
      return <p className="text-5xl">{name?.slice(0, 2)}</p>
   } else {
      return <p className="text-2xl text-gray-500">No image</p>
   }
}
