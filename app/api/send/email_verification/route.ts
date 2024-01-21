import { UserModel } from '@/app/models/User'
import { EmailVerification } from '@/components/helpers/Email Templates/Email_Verification'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { ServerResponse } from '@/types/api_responses'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
   const body = await req.json()
   const { firstName, verificationCode, email } = body

   try {
      const data = await resend.emails.send({
         from: 'Acme <onboarding@resend.dev>',
         to: ['oscarmarcos2673@gmail.com'],
         subject: 'Verify your email',
         react: EmailVerification({ firstName, verificationCode }),
         text: 'This is the text content of the email',
      })

      if (data.error) {
         return NextResponse.json<ServerResponse>({
            success: false,
            message: 'Error al enviar email',
         })
      }

      return NextResponse.json<ServerResponse>({
         success: true,
         message: 'Email enviado',
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json<ServerResponse>({
         success: false,
         message: 'Error al enviar email',
      })
   }
}

export async function PUT(req: Request) {
   const session = await getServerSession(authOptions)
   const _id = session?.user?.sub
   try {
      await mongoose.connect(`${db_config.URI}`)
      await UserModel.findOneAndUpdate({ _id }, { emailVerified: true })

      return NextResponse.json<ServerResponse>({
         success: true,
         message: 'Email verificado',
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json<ServerResponse>({
         success: false,
         message: 'Error al verificar email',
      })
   }
}
