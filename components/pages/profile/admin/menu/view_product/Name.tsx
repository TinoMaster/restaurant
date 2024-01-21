'use client'
import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { EditInput } from '@/components/ui/buttons/EditInput'
import { useName } from './useName'

export const Name = ({ name, id }: { name: string; id: string }) => {
   const {
      editionMode,
      onCancelChange,
      onConfirmChange,
      inputName,
      onChangeInputName,
      onChangeEditionMode,
   } = useName({ name, id })

   return (
      <div className=" mb-1 capitalize flex items-center gap-2">
         {!editionMode ? (
            <h2 className="text-white text-3xl title-font font-medium">
               {name}
            </h2>
         ) : (
            <input
               value={inputName}
               onChange={onChangeInputName}
               defaultValue={inputName}
               type="text"
               className="bg-transparent text-3xl focus:outline-none w-full resize-none overflow-auto mt-2 text-white"
            />
         )}
         {!editionMode ? (
            <EditInput onClick={onChangeEditionMode} />
         ) : (
            <ConfirmOrCancelInputChanges
               onConfirm={onConfirmChange}
               onCancel={onCancelChange}
            />
         )}
      </div>
   )
}
