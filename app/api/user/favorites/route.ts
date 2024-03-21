import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { TUser } from '@/types/models/user'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

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
      const userId = session?.user?.sub

      await mongoose.connect(`${db_config.URI}`)
      const user: TUser | null = await UserModel.findById(userId)

      if (!user) {
         return Response.json({
            success: false,
            message: 'Ah ocurrido un error intente mas tarde',
         })
      }

      const exist = user.favorites.some((product: string) => {
         return JSON.parse(JSON.stringify(product)) === body.productId
      })

      if (!exist) {
         user.favorites.push(body.productId)
      } else {
         user.favorites = user.favorites.filter(
            (product: string) =>
               JSON.parse(JSON.stringify(product)) !== body.productId
         )
      }

      await user.save()
      revalidatePath('/profile/favorites')
      return Response.json({
         success: true,
         message: 'Cambiado con éxito',
      })
   } catch (error) {
      console.log(error)
      return Response.json({
         success: false,
         message: 'Hubo un error al procesar la solicitud',
      })
   }
}
