import { Input } from '@/stories/admin/Input'
import React from 'react'
import { LuBadgeAlert } from 'react-icons/lu'
import { MdOutlineVerified } from 'react-icons/md'

export const InputEmail = ({
   email,
   emailVerified,
   onChange,
}: {
   email: string
   emailVerified: boolean
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
   return (
      <div className="relative">
         <Input label="Email" name="email" value={email} onChange={onChange} />
         {emailVerified ? (
            <span className="px-2 text-xs bg-green-400/30 rounded-lg absolute right-4 top-1 flex items-center gap-1">
               Verificato <MdOutlineVerified className="" />
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
