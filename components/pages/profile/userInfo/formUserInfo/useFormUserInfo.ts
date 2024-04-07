import { SUCCESS_INFO_PROFILE, UPDATING_INFO_PROFILE } from '@/constants/common'
import { updateUser } from '@/services/actions/user.actions'
import { TDataUserToUpdate } from '@/types/models/user'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface IUseForm {
   editionMode: boolean
   userInfoToEdit: TDataUserToUpdate
   handlerInfoToEdit: (e: React.ChangeEvent<HTMLInputElement>) => void
   handleSubmitUpdateUserInfo: (
      e: React.FormEvent<HTMLFormElement>,
   ) => Promise<void>
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface IUseFormProps {
   name: string
   email: string
   phone: string
}

export const useFormUserInfo = ({
   name,
   email,
   phone,
}: IUseFormProps): IUseForm => {
   /* States hook */
   const [editionMode, setEditionMode] = useState(false)
   const [userInfoToEdit, setUserInfoToEdit] = useState<TDataUserToUpdate>({
      name: name || '',
      email: email || '',
      phone: phone || '',
   })

   function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target
      setUserInfoToEdit((prev) => ({ ...prev, [name]: value }))
   }

   const handlerInfoToEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setUserInfoToEdit((prev) => ({ ...prev, [name]: value }))
   }

   async function handleSubmitUpdateUserInfo(
      e: React.FormEvent<HTMLFormElement>,
   ) {
      e.preventDefault()
      toast.loading(UPDATING_INFO_PROFILE)

      if (userInfoToEdit.email !== email) {
         const confirm = window.confirm(
            'Al actualizar el correo electrónico se desconectara de la sesión',
         )

         if (!confirm) {
            toast.remove()
            return
         }
      }

      const updated = await updateUser(userInfoToEdit)

      if (updated) {
         if (userInfoToEdit.email !== email) {
            toast.remove()
            toast.success(SUCCESS_INFO_PROFILE)
            signOut()
         }
         setEditionMode(false)
         toast.remove()
         toast.success(SUCCESS_INFO_PROFILE)
      } else {
         toast.remove()
         toast.error('E suceso un errore')
      }
   }

   return {
      editionMode,
      userInfoToEdit,
      handlerInfoToEdit,
      handleSubmitUpdateUserInfo,
      onChange,
   }
}
