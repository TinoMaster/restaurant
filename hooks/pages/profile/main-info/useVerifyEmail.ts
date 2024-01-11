import { VERIFY_EMAIL } from '@/constants/routes.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { updateVerificationEmail } from '@/redux/reducers/user_slice'
import { user } from '@/services/user'
import { IDataToVerifyEmail } from '@/types/common'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useVerifyEmail = () => {
   const { email, name, emailVerified } = useAppSelector(
      (state) => state.userReducer
   )
   const dispatch = useAppDispatch()
   const [randomGenerate, setRandomGenerate] = useState('')
   const [verificationCode, setVerificationCode] =
      useState<IDataToVerifyEmail['verificationCode']>('')

   const sendEmail = async () => {
      if (emailVerified) {
         return toast.error('El correo electronico ya ha sido verificado')
      }
      toast.loading('Generando codigo de verificación...')
      const randomCode = Math.floor(Math.random() * 10000).toString()
      setRandomGenerate(randomCode)

      const body = {
         email,
         firstName: name,
         verificationCode: randomCode,
      }

      const res = await user.verifyEmail(VERIFY_EMAIL, body)

      if (res.success) {
         toast.remove()
         toast.success('Se ha enviado el correo electronico')
      } else {
         toast.remove()
         toast.error(res.message)
      }
   }

   const handlerVerificationCode = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVerificationCode(e.target.value)
   }

   const confirmWithCode = async () => {
      toast.loading('Verificando correo electronico...')
      if (verificationCode === randomGenerate) {
         const res = await user.confirmEmail(VERIFY_EMAIL, email)
         if (res.success) {
            toast.remove()
            toast.success('El correo electronico ha sido verificado')
            dispatch(updateVerificationEmail(true))
         } else {
            toast.remove()
            toast.error(res.message)
         }
      } else {
         toast.remove()
         toast.error('El correo electronico no coincide')
      }
   }

   return {
      sendEmail,
      handlerVerificationCode,
      confirmWithCode,
   }
}
