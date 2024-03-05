'use client'
import { BtnProfile } from '@/components/ui/buttons/Btn_profile'
import { userInfoProfilePageInputs } from '@/constants/forms/profiles.form'
import React from 'react'
import { InputEditable } from '../InputEditable'
import { useFormUserInfo } from './useFormUserInfo'
import { useOpenDialogs } from '@/hooks/useOpenDialogs'

interface IFormUserInfoProps {
   email: string
   phone: string
   name: string
   emailVerified?: boolean
   phoneVerified?: boolean
}

export const FormUserInfo = ({
   emailVerified,
   phoneVerified,
   email,
   phone,
   name,
}: IFormUserInfoProps) => {
   const {
      editionMode,
      handleSubmitUpdateUserInfo,
      userInfoToEdit,
      handlerInfoToEdit,
   } = useFormUserInfo({ name, email, phone })
   const { openDialog } = useOpenDialogs()
   return (
      <form
         onSubmit={handleSubmitUpdateUserInfo}
         className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
         {userInfoProfilePageInputs.map((inp) => (
            <InputEditable
               handlerInfoToEdit={handlerInfoToEdit}
               userInfoToEdit={userInfoToEdit}
               key={inp.id}
               inp={inp}
               emailVerified={emailVerified}
               phoneVerified={phoneVerified}
               openDialog={openDialog}
            />
         ))}
         {/* Buttons box */}
         <div className="col-span-2 lg:col-span-1 flex justify-end">
            <div className="flex gap-2 items-end">
               <BtnProfile disabled={!editionMode} type="submit" name="Edit" />

               <BtnProfile
                  type="button"
                  name="Change password"
                  disabled={!emailVerified}
                  title={
                     emailVerified
                        ? 'Change password'
                        : 'You must verify your email'
                  }
               />
            </div>
         </div>
      </form>
   )
}
