import { UPLOAD_FILE } from '@/constants/routes.api'
import { ServerResponse } from '@/types/api_responses'

export async function saveImageInCubbit({
   image,
   name,
}: {
   image: File
   name: string
}) {
   const formData = new FormData()
   formData.append('image', image)
   formData.append('name', name)

   const requestOptions = {
      method: 'POST',
      body: formData,
      Headers: {
         'Content-Type': 'multipart/form-data',
      },
   }

   const response = await fetch(
      `${process.env.NEXTAUTH_URL}${UPLOAD_FILE}`,
      requestOptions
   )

   const docs: ServerResponse = await response.json()

   return docs
}
