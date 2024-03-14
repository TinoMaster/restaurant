'use client'
import { useSession } from 'next-auth/react'
import { LoginButton } from '../ui/buttons/LoginButton'
import { RegistrationButton } from '../ui/buttons/RegistrationButton'
import { LogoProfile } from './LogoProfile'

export const Registration = () => {
   const { data: session, status } = useSession()
   if (status === 'loading') {
      return (
         <div className="w-10 h-10 animate-pulse bg-white/10 rounded-full"></div>
      )
   }

   return (
      <>
         {session?.user.sub ? (
            <div className="flex items-center">
               <LogoProfile userId={session.user.sub} />
            </div>
         ) : (
            <div className="flex justify-center text-xl md:text-base">
               <LoginButton />
               <RegistrationButton />
            </div>
         )}
      </>
   )
}
