import { AddressModel } from '@/app/models/Address'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { ServerResponse } from '@/types/api_responses'
import { TAddress } from '@/types/models/address'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
   const body = await req.json()
   const session = await getServerSession(authOptions)

   if (!session) {
      return NextResponse.json<ServerResponse>({
         success: false,
         message: 'No hay una sesion activa',
      })
   }

   if (!body) {
      return NextResponse.json<ServerResponse>({
         success: false,
         message: 'No se recibieron datos',
      })
   }

   try {
      await mongoose.connect(db_config.URI)

      const savedAddress = await AddressModel.create(body)
      if (!savedAddress) {
         return NextResponse.json<ServerResponse>({
            success: false,
            message: 'Ah ocurrido un error al guardar la direccion',
         })
      }

      const savedAddressInUser = await UserModel.findOneAndUpdate(
         { email: session?.user?.email },
         { $push: { addresses: savedAddress._id } }
      )

      if (!savedAddressInUser) {
         return NextResponse.json<ServerResponse>({
            success: false,
            message:
               'Ah ocurrido un error al guardar la direccion en el usuario',
         })
      }

      return NextResponse.json<ServerResponse<TAddress>>({
         success: true,
         data: savedAddress,
         message: 'Informacion cargada con exito',
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json<ServerResponse>({
         success: false,
         message: 'Hubo un error al procesar la solicitud',
      })
   }
}
