'use client'
import { Dialog } from '@/components/ui/modals/Dialog'
import { DIALOG_EDIT_ADDRESS } from '@/constants/dialogs'
import { useDialogsAddress } from '@/hooks/pages/profile/address/useDialogsAddress'

export const Dialogs_addresses = () => {
   const { address, onDelete } = useDialogsAddress()
   const { name, city, street, postal_code } = address || {}

   if (!address) {
      return null
   }

   return (
      <>
         <Dialog
            dialog={DIALOG_EDIT_ADDRESS}
            onConfirmProps={{ text: 'Edit', color: '#444648' }}
            onDelete={onDelete}
            onDeleteProps={{ text: 'Delete', color: '#DC2626' }}
            title="Edit address"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         >
            <div className="text-xs lg:text-sm bg-gray-100/5 shadow-lg rounded-lg p-6 ">
               <h4 className="text-base lg:text-xl font-semibold">{name}</h4>
               <p className="text-gray-500">{city}</p>
               <p className="text-gray-500">{street}</p>
               <p className="text-gray-500">{postal_code}</p>
            </div>
         </Dialog>
      </>
   )
}
