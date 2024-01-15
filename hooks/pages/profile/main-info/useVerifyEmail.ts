import { DIALOG, DIALOG_CHANGE_EMAIL } from '@/constants/dialogs'
import { VERIFY_EMAIL } from '@/constants/routes.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { updateVerificationEmail } from '@/redux/reducers/user_slice'
import { user } from '@/services/user'
import { IDataToVerifyEmail } from '@/types/common'
import { createRandomCode } from '@/utils/createRandomCode'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface IUseVerifyEmail {
   handlerVerificationCode: (e: React.ChangeEvent<HTMLInputElement>) => void
   confirmWithCode: () => Promise<boolean>
}

export const useVerifyEmail = (): IUseVerifyEmail => {
   const [randomGenerate, setRandomGenerate] = useState('')
   const [inputCode, setInputCode] =
      useState<IDataToVerifyEmail['verificationCode']>('')
   const { email, name, emailVerified } = useAppSelector(
      (state) => state.userReducer
   )

   const searchParams = useSearchParams()
   const dispatch = useAppDispatch()
   const showDialog = searchParams.get(DIALOG)

   useEffect(() => {
      if (showDialog === DIALOG_CHANGE_EMAIL) {
         if (!emailVerified) {
            sendEmail()
         }
      }
   }, [showDialog, emailVerified])

   const sendEmail = async () => {
      if (emailVerified) {
         toast.error('El correo electronico ya ha sido verificado')
         return
      }

      toast.loading('Generando codigo de verificación...')
      const randomCode = createRandomCode(4)
      setRandomGenerate(randomCode)

      const body = {
         email,
         firstName: name,
         verificationCode: randomCode,
      }

      const res = await user.sendEmailToVerify(VERIFY_EMAIL, body)

      if (res.success) {
         toast.remove()
         toast.success('Se ha enviado el correo electronico')
      } else {
         toast.remove()
         toast.error(res.message)
      }
   }

   const handlerVerificationCode = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputCode(e.target.value)
   }

   const confirmWithCode = async () => {
      if (!inputCode) {
         toast.error('Ingresa el numero de verificación')
         return false
      }

      toast.loading('Verificando correo electronico...')

      if (inputCode === randomGenerate) {
         const res = await user.updateEmailVerified(VERIFY_EMAIL)

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
      handlerVerificationCode,
      confirmWithCode,
   }
}
