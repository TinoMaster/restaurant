import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
   interface Session {
      user: {
         isAdmin: boolean
         sub: string
      } & DefaultSession['user']
   }
}
