import { REGISTER, VERIFY_PHONE } from '@/constants/routes.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
   updateRole,
   updateVerificationEmail,
   updateVerificationPhone,
} from '@/redux/reducers/user_slice'
import { ChangeAdminRole } from '@/services/actions/user.actions'
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
   const { isAdmin, emailVerified, phoneVerified, _id } = useAppSelector(
      (state) => state.userReducer
   )
   const { data: session, update } = useSession()
   const dispatch = useAppDispatch()
   const [menuOpen, setMenuOpen] = useState(false)
   const router = useRouter()

   const handleLogin = async () => {
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
   }

   const handleChangeToAdmin = async () => {
      toast.loading('Cambiando rol...')
      const res = await ChangeAdminRole(_id, !isAdmin)
      toast.remove()
      if (res) {
         await update({
            ...session,
            user: {
               ...session?.user,
               isAdmin: !isAdmin,
            },
         })
         toast.success('Rol cambiado exitosamente')
         dispatch(updateRole(!isAdmin))
      } else {
         toast.error('Error al cambiar rol')
      }
   }

   const toggleMenu = () => {
      setMenuOpen(!menuOpen)
   }

   const handleVerifiedNumber = async () => {
      dispatch(updateVerificationPhone(!phoneVerified))
      toast.success(
         `El telefono ha sido ${!phoneVerified ? 'verificado' : 'revertido'}`
      )
   }

   const handleVerifiedEmail = async () => {
      dispatch(updateVerificationEmail(!emailVerified))
      toast.success(
         `El correo ha sido ${!emailVerified ? 'verificado' : 'revertido'}`
      )
   }

   return {
      menuOpen,
      toggleMenu,
      handleLogin,
      handleChangeToAdmin,
      isAdmin,
      handleVerifiedNumber,
      phoneVerified,
      handleVerifiedEmail,
      emailVerified,
   }
}
