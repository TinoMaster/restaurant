import { REGISTER } from '@/constants/routes.api'
import { useAppSelector } from '@/redux/hooks'
import { user } from '@/services/user'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
   const { isAdmin, emailVerified, phoneVerified } = useAppSelector(
      (state) => state.userReducer
   )
   const [menuOpen, setMenuOpen] = useState(false)
   const [loadingLogin, setLoadingLogin] = useState(false)
   const router = useRouter()
   const handleLogin = async () => {
      setLoadingLogin(true)
      toast.loading('Iniciando sesión...')
      const res = await signIn('credentials', {
         email: formLogin.email,
         password: formLogin.password,
         redirect: false,
      })

      if (res?.ok) {
         toast.remove()
         router.push('/')
      } else {
         const signupResponse = await user.register(REGISTER, formRegister)
         if (signupResponse.success) {
            toast.remove()
            toast.success('Cuenta creada exitosamente')
            await signIn('credentials', {
               email: formRegister.email,
               password: formRegister.password,
               redirect: false,
               callbackUrl: '/',
            })
         } else {
            toast.remove()
            toast.error(signupResponse.message)
         }
      }
      setLoadingLogin(false)
   }

   const toggleMenu = () => {
      setMenuOpen(!menuOpen)
   }

   return { menuOpen, toggleMenu, handleLogin }
}
