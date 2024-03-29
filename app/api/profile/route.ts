import mongoose from 'mongoose'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { getServerSession } from 'next-auth'
import '@/app/models/Addresses'
import { UserModel } from '@/app/models/User'

export async function PUT(req: Request) {
   try {
      const body = await req.json()

      if (!body) {
         return Response.json({
            success: false,
            message: 'No se recibieron datos',
         })
      }

      const session = await getServerSession(authOptions)
      const email = session?.user?.email

      await mongoose.connect(`${db_config.host}/${db_config.database}`)
      const response = await UserModel.findOneAndUpdate({ email }, body, {
         new: true,
      })

      if (!response) {
         return Response.json({
            success: false,
            message: 'Ah ocurrido un error intente mas tarde',
         })
      }

      return Response.json({
         success: true,
         data: response,
         message: 'Usuario actualizado con éxito',
      })
   } catch (error) {
      console.log(error)
      return Response.json({
         success: false,
         message: 'Hubo un error al procesar la solicitud',
      })
   }
}
