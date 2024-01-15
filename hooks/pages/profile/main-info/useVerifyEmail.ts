import { DIALOG, DIALOG_CHANGE_EMAIL } from '@/constants/dialogs'
import { VERIFY_EMAIL } from '@/constants/routes.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { updateVerificationEmail } from '@/redux/reducers/user_slice'
import { user } from '@/services/user'
import { IDataToVerifyEmail } from '@/types/common'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface IUseVerifyEmail {
   sendEmail: () => Promise<void>
   handlerVerificationCode: (e: React.ChangeEvent<HTMLInputElement>) => void
   confirmWithCode: () => Promise<boolean>
}

export const useVerifyEmail = (): IUseVerifyEmail => {
   const { email, name, emailVerified } = useAppSelector(
      (state) => state.userReducer
   )
   const searchParams = useSearchParams()
   const dispatch = useAppDispatch()
   const showDialog = searchParams.get(DIALOG)
   const [randomGenerate, setRandomGenerate] = useState('')
   const [verificationCode, setVerificationCode] =
      useState<IDataToVerifyEmail['verificationCode']>('')

   useEffect(() => {
      if (showDialog === DIALOG_CHANGE_EMAIL) {
         if (!emailVerified) {
            sendEmail().then()
         }
      }
   }, [showDialog, emailVerified])

   const sendEmail = async () => {
      if (emailVerified) {
         toast.error('El correo electronico ya ha sido verificado')
         return
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
      if (!verificationCode) {
         toast.remove()
         toast.error('Ingresa el numero de verificación')
         return false
      }

      toast.loading('Verificando correo electronico...')

      if (verificationCode === randomGenerate) {
         const res = await user.confirmEmail(VERIFY_EMAIL, email)

         toast.remove()

         if (res.success) {
            toast.success('El correo electronico ha sido verificado')
            dispatch(updateVerificationEmail(true))
            return true
         } else {
            toast.error(res.message)
         }
      } else {
         toast.remove()
         toast.error('El numero de verificación no coincide')
      }
      return false
   }

   return {
      sendEmail,
      handlerVerificationCode,
      confirmWithCode,
   }
}
