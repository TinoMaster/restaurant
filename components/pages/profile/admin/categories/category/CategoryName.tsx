'use client'
import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { EditInput } from '@/components/ui/buttons/EditInput'
import { useCategoryName } from './useCategoryName'

export const CategoryName = ({ name, id }: { name: string; id: string }) => {
   const {
      editionMode,
      onCancelChange,
      onConfirmChange,
      inputName,
      onChangeInputName,
      onChangeEditionMode,
   } = useCategoryName(name, id)

   return (
      <div className="flex items-center gap-2">
         {!editionMode ? (
            <h2 className="text-white text-3xl title-font font-medium capitalize py-1">
               {name}
            </h2>
         ) : (
            <input
               value={inputName}
               onChange={onChangeInputName}
               type="text"
               className="bg-transparent text-3xl w-full max-w-[200px] focus:outline-none resize-none overflow-auto mt-2 text-white capitalize"
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
