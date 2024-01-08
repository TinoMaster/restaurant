import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { saveImageInCubbit } from '@/libs/saveImageCubbit'
import { authOptions } from '@/libs/authOptions'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

export async function POST(request: Request) {
   try {
      const formData = await request.formData()
      const session = await getServerSession(authOptions)
      const email = session?.user?.email

      const file = formData.get('image')
      const name = formData.get('name')

      if (!file) {
         return Response.json({
            success: false,
            message: 'No file uploaded',
         })
      }

      const response = await saveImageInCubbit({
         file: file as File,
         imageName: (name as string) || (file as File).name,
      })

      if (!response.success) {
         return Response.json({
            success: false,
            message: response.message,
         })
      }

      await mongoose.connect(db_config.URI)
      await UserModel.updateOne({ email }, { image: response.data })

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
