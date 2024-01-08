import { CategoryModel } from '@/app/models/Categories'
import { db_config } from '@/config/db.config'
import mongoose from 'mongoose'

export async function GET(req: Request, context: any) {
   const { params } = context
   const { categoryid } = params

   try {
      await mongoose.connect(db_config.URI)
      const category = await CategoryModel.findById(categoryid)

      return Response.json({
         success: true,
         data: category,
         message: 'Cargado con exito',
      })
   } catch (error) {
      console.log(error)
      return Response.json({
         success: false,
         message: 'Hubo un error al procesar la solicitud',
      })
   }
}
