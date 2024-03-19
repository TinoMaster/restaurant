import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { TProductInCart } from '@/types/models/product'
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

      const exist = user.cart.some((product: TProductInCart) => {
         return JSON.parse(JSON.stringify(product.productId)) === body.productId
      })

      if (!exist) {
         user.cart.push({
            productId: body.productId,
            quantity: 1,
         })
      } else {
         user.cart = user.cart.filter(
            (product: TProductInCart) =>
               JSON.parse(JSON.stringify(product.productId)) !== body.productId
         )
      }

      await user.save()
      revalidatePath('/cart/checkout')
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
