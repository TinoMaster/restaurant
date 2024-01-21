import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import twilio from 'twilio'

const client = twilio(
   process.env.TWILIO_ACCOUNT_SID,
   process.env.TWILIO_AUTH_TOKEN
)

export async function POST(req: Request) {
   const body = await req.json()

   if (!body || !body.phoneNumber || !body.message) {
      return NextResponse.json({
         success: false,
         message: 'No se recibieron datos',
      })
   }

   const { message, phoneNumber } = body

   NextResponse.json({ success: true })

   try {
      const messageSent = await client.messages.create({
         body: message,
         from: process.env.TWILIO_PHONE_NUMBER,
         to: `${process.env.TWILIO_CODE_NUMBER}${phoneNumber}`,
      })

      if (messageSent.status === 'failed') {
         return NextResponse.json({
            success: false,
            message: 'Error al enviar SMS',
         })
      }

      return NextResponse.json({
         success: true,
         message: 'SMS enviado',
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json({
         success: false,
         message: 'Error al enviar SMS',
      })
   }
}

export async function PUT() {
   const session = await getServerSession(authOptions)
   const _id = session?.user?.sub

   try {
      await mongoose.connect(`${db_config.URI}`)
      await UserModel.findOneAndUpdate({ _id }, { phoneVerified: true })

      return NextResponse.json({
         success: true,
         message: 'Phone verified',
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json({
         success: false,
         message: 'Error al verify phone',
      })
   }
}
