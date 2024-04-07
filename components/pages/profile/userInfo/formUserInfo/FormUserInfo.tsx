'use client'
import { BtnProfile } from '@/components/ui/buttons/Btn_profile'
import { useOpenDialogs } from '@/hooks/useOpenDialogs'
import { InputEmail } from '../inputs/Email'
import { InputName } from '../inputs/Name'
import { InputPhone } from '../inputs/Phone'
import { useFormUserInfo } from './useFormUserInfo'

interface IFormUserInfoProps {
   email: string
   phone: string
   name: string
   emailVerified: boolean
   phoneVerified: boolean
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
      onChange,
   } = useFormUserInfo({ name, email, phone })
   const { openDialog } = useOpenDialogs()
   return (
      <form
         onSubmit={handleSubmitUpdateUserInfo}
         className="grid grid-cols-1 max-w-md gap-4"
      >
         <InputName name={userInfoToEdit.name} onChange={onChange} />
         <InputEmail
            email={userInfoToEdit.email}
            emailVerified={emailVerified}
            onChange={handlerInfoToEdit}
         />
         <InputPhone
            phone={userInfoToEdit.phone}
            phoneVerified={phoneVerified}
            onChange={handlerInfoToEdit}
         />
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
