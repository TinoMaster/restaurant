import { REGISTER } from '@/constants/routes.api'
import { user } from '@/services/user'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

const formRegister = {
   name: 'test',
   email: 'testemail@example.com',
   password: 'test1234',
}

const formLogin = {
   email: 'testemail@example.com',
   password: 'test1234',
}

export const useSimulatingOptions = () => {
   const searchParams = useSearchParams()
   const callbackUrl = searchParams.get('callbackUrl')

   const handleLogin = async () => {
      toast.loading('Iniciando sesión...')
      const res = await signIn('credentials', {
         email: formLogin.email,
         password: formLogin.password,
         redirect: false,
         callbackUrl: callbackUrl ?? '/',
      })
      toast.remove()

      if (res?.ok) {
         toast.success('Session iniciada con exito...')
         window.location.href = callbackUrl ?? '/'
      } else {
         const signupResponse = await user.register(REGISTER, formRegister)
         if (signupResponse.success) {
            toast.remove()
            toast.success('Cuenta creada exitosamente')
            await signIn('credentials', {
               email: formRegister.email,
               password: formRegister.password,
               redirect: true,
               callbackUrl: callbackUrl ?? '/',
            })
         } else {
            toast.remove()
            toast.error(signupResponse.message)
         }
      }
   }

   return {
      handleLogin,
   }
}
