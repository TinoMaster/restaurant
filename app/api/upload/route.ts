import { cubbitLibs } from '@/libs/cubbitLibs'

export async function POST(request: Request) {
   try {
      const formData = await request.formData()

      const file = formData.get('image')
      const name = formData.get('name')

      if (!file) {
         return Response.json({
            success: false,
            message: 'No file uploaded',
         })
      }

      const response = await cubbitLibs({
         file: file as File,
         imageName: (name as string) || (file as File).name,
      })

      if (!response.success) {
         return Response.json({
            success: false,
            message: response.message,
         })
      }

      return Response.json({
         success: true,
         data: response.data,
         message: 'File uploaded successfully',
      })
   } catch (error) {
      console.error('Error uploading file:', error)
      return Response.json({
         success: false,
         message: 'Error uploading file',
      })
   }
}
