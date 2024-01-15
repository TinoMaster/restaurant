import { DIALOG, DIALOG_VERIFY_PHONE } from '@/constants/dialogs'
import { VERIFY_PHONE } from '@/constants/routes.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { updateVerificationPhone } from '@/redux/reducers/user_slice'
import { user } from '@/services/user'
import { IDataToVerifyEmail } from '@/types/common'
import { createRandomCode } from '@/utils/createRandomCode'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface IUseVerifyPhone {
   handlerVerificationCode: (e: React.ChangeEvent<HTMLInputElement>) => void
   confirmWithCode: () => Promise<boolean>
}

export const useVerifyPhone = (): IUseVerifyPhone => {
   const [randomGenerate, setRandomGenerate] = useState('')
   const [inputCode, setInputCode] =
      useState<IDataToVerifyEmail['verificationCode']>('')
   const searchParams = useSearchParams()
   const showDialog = searchParams.get(DIALOG)
   const { phoneVerified, phone } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (showDialog === DIALOG_VERIFY_PHONE) {
         if (!phoneVerified) {
            sendSMS()
         }
      }
   }, [showDialog, phoneVerified])

   const sendSMS = async () => {
      if (phoneVerified) {
         toast.error('El telefono ya ha sido verificado')
         return
      }

      toast.loading('Generando codigo de verificación...')
      const randomCode = createRandomCode(6)
      setRandomGenerate(randomCode)

      const body = {
         message: `Tu codigo de verificación es ${randomCode}`,
         phoneNumber: phone,
      }

      const res = await user.sendSMSToVerify(VERIFY_PHONE, body)

      if (res.success) {
         toast.remove()
         toast.success('Se ha enviado el SMS')
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

      toast.loading('Verificando telefono...')

      if (inputCode === randomGenerate) {
         const res = await user.updatePhoneVerified(VERIFY_PHONE)

         toast.remove()

         if (res.success) {
            toast.success('El telefono ha sido verificado')
            dispatch(updateVerificationPhone(true))
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
