import { FaCheck } from 'react-icons/fa6'
import { MdCancel } from 'react-icons/md'

interface ConfirmOrCancelInputChangesProps {
   onConfirm: () => void
   onCancel?: () => void
}

export const ConfirmOrCancelInputChanges = ({
   onConfirm,
   onCancel,
}: ConfirmOrCancelInputChangesProps) => {
   return (
      <div className="flex items-center gap-4">
         <button onClick={onConfirm} className="">
            <FaCheck className="text-green-500/80 hover:text-green-500" />
         </button>
         {onCancel && (
            <button onClick={onCancel} className="">
               <MdCancel className="text-red-500/80 hover:text-red-500" />
            </button>
         )}
      </div>
   )
}
