import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { nextAuthConfig } from '@/config/nextAuth.config'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import mongoose from 'mongoose'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from '../utils/api/password.verify'
import clientPromise from './clientPromise'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
   secret: nextAuthConfig.secret,
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      CredentialsProvider({
         name: 'credentials',
         id: 'credentials',
         credentials: {
            email: {
               label: 'Email',
               type: 'email',
               placeholder: 'laura@example.com',
            },
            password: { label: 'Password', type: 'password' },
         },
         async authorize(credentials, req) {
            if (credentials) {
               const { email, password } = credentials

               await mongoose.connect(`${db_config.URI}`)
               const user = await UserModel.findOne({ email }).select(
                  '+password',
               )

               if (user && (await verifyPassword(password, user.password))) {
                  return user
               } else {
                  return null
               }
            }
         },
      }),
   ],
   adapter: MongoDBAdapter(clientPromise) as any,
   pages: {
      signIn: '/login',
   },
   debug: process.env.NODE_ENV === 'development',
   session: {
      strategy: 'jwt',
   },
   jwt: {
      secret: nextAuthConfig.secret,
      maxAge: 60 * 60 * 24 * 30,
   },
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.name = user.name
            token.email = user.email
            token.sub = user.id
            token.isAdmin = user.isAdmin
         }
         return token
      },
      async session({ session, token }) {
         if (session?.user) {
            session.user = {
               name: token.name,
               email: token.email,
               sub: token.sub,
               isAdmin: token.isAdmin,
            } as any
         }
         return session
      },
   },
}
