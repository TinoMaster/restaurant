import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
   interface Session {
      user: {
         isAdmin: boolean
         sub: string
      } & DefaultSession['user']
   }

   interface User extends DefaultUser {
      isAdmin: boolean
   }
}

declare module 'next-auth/jwt' {
   interface JWT extends DefaultJWT {
      isAdmin: boolean
   }
}
