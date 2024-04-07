import { Input } from '@/components/ui/elements/Input'
import React from 'react'
import { LuBadgeAlert } from 'react-icons/lu'
import { MdOutlineVerified } from 'react-icons/md'

export const InputPhone = ({
   phone,
   phoneVerified,
   onChange,
}: {
   phone: string
   phoneVerified?: boolean
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
   return (
      <div className="relative col-span-2">
         <Input
            label="Telefono"
            name="phone"
            value={phone}
            type="tel"
            onChange={onChange}
         />
         {phoneVerified ? (
            <span className="px-2 text-xs bg-green-400/30 rounded-lg absolute right-4 top-1 flex items-center gap-1">
               verificato <MdOutlineVerified className="" />
            </span>
         ) : (
            <button
               type="button"
               /* onClick={() => openDialog?.(DIALOG_CHANGE_EMAIL)} */
               className="px-2 text-xs bg-yellow-400/30 rounded-lg absolute right-4 top-1 flex items-center gap-1"
            >
               Verificare <LuBadgeAlert className="" />
            </button>
         )}
      </div>
   )
}
