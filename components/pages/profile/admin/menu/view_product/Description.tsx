'use client'
import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { FiEdit } from 'react-icons/fi'
import { useDescription } from './useDescription'
import { EditInput } from '@/components/ui/buttons/EditInput'

export const Description = ({
   description,
   id,
}: {
   description: string
   id: string
}) => {
   const {
      editionMode,
      onCancelChange,
      onConfirmChange,
      textAreaText,
      onChangeTextArea,
      onChangeEditionMode,
   } = useDescription({ description, id })

   return (
      <div>
         <div className="flex gap-2 items-center">
            <p className="font-bold text-primary/80">Descripción:</p>
            {!editionMode ? (
               <EditInput onClick={onChangeEditionMode} />
            ) : (
               <ConfirmOrCancelInputChanges
                  onConfirm={onConfirmChange}
                  onCancel={onCancelChange}
               />
            )}
         </div>
         {editionMode && (
            <textarea
               name="description"
               id=""
               defaultValue={textAreaText}
               onChange={onChangeTextArea}
               cols={10}
               rows={3}
               className="bg-transparent focus:outline-none w-full resize-none overflow-auto mt-2 text-white"
            />
         )}
         {!editionMode && (
            <p className="leading-relaxed lg:h-32 overflow-auto">
               {description}
            </p>
         )}
      </div>
   )
}
