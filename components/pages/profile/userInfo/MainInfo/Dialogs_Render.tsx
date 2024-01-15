'use client'
import { Dialog } from '@/components/ui/modals/Dialog'
import { DIALOG_CHANGE_EMAIL, DIALOG_VERIFY_PHONE } from '@/constants/dialogs'
import { useVerifyEmail } from '@/hooks/pages/profile/main-info/useVerifyEmail'
import { useVerifyPhone } from '@/hooks/pages/profile/main-info/useVerifyPhone'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

export const Dialogs_Render = () => {
   const { confirmWithCode, handlerVerificationCode } = useVerifyEmail()
   const {
      confirmWithCode: confirmWithCodePhone,
      handlerVerificationCode: handlerVerificationCodePhone,
   } = useVerifyPhone()
   const { email, emailVerified, phoneVerified } = useAppSelector(
      (state) => state.userReducer
   )
   return (
      <>
         {!emailVerified && (
            <Dialog
               onConfirm={confirmWithCode}
               title="Verifiy your email"
               description={`We've sent a verification link to your email: ${email} Please check your email and click on the link to verify your email.`}
               dialog={DIALOG_CHANGE_EMAIL}
            >
               <div className="max-w-xs m-auto">
                  <input
                     onChange={handlerVerificationCode}
                     type="text"
                     className="input text-center"
                  />
               </div>
            </Dialog>
         )}

         {!phoneVerified && (
            <Dialog
               onConfirm={confirmWithCodePhone}
               title="Verifiy your phone"
               description=" We've sent a verification link to your phone. Please check your phone and click on the link to verify your phone."
               dialog={DIALOG_VERIFY_PHONE}
            >
               <div className="max-w-xs m-auto">
                  <input
                     onChange={handlerVerificationCodePhone}
                     type="number"
                     className="input text-center"
                  />
               </div>
            </Dialog>
         )}
      </>
   )
}
