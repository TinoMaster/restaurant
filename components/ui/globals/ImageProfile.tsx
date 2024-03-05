import Image from 'next/image'

interface IImageBlockProps {
   image?: string
   name?: string
   handleChangeImage: () => void
   onChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void
   imagePreview?: string
}

export const ImageProfile = ({
   image,
   name,
   handleChangeImage,
   onChangeImage,
   imagePreview,
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
         {imagePreview ? (
            <button
               title="change image"
               type="button"
               onClick={handleChangeImage}
               className="btn-white disabled:bg-pri-300/40 disabled:cursor-not-allowed"
            >
               Save
            </button>
         ) : (
            <label htmlFor="change-image" className="btn-white">
               Change image
            </label>
         )}
         <input
            onChange={onChangeImage}
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
