import { db_config } from '@/config/db.config'
import { UserModel } from '@/app/models/User'
import mongoose from 'mongoose'
import { hashPassword } from '@/utils/api/password.hash'

export async function POST(req: Request) {
   try {
      const body = await req.json()
      const { password } = body

      if (!password || password?.length < 4) {
         return Response.json({
            success: false,
            message: 'La contraseña debe tener al menos 6 caracteres',
         })
      }

      const newPassword = await hashPassword(password)

      await mongoose.connect(`${db_config.URI}`)
      const user = await UserModel.create({ ...body, password: newPassword })

      return Response.json({
         success: true,
         data: user,
         message: 'Usuario creado con exito',
      })
   } catch (error: Error | any) {
      if (error.code === 11000) {
         return Response.json({
            success: false,
            message: 'El usuario ya existe',
         })
      }
      console.log(error)
      return Response.json({
         success: false,
         message: 'Error al crear el usuario',
      })
   }
}
