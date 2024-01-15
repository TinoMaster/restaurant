'use client'
import { IoClose } from 'react-icons/io5'
import { DialogProps } from './dialog.types'
import { useDialog } from './useDialog'

export const Dialog = ({
   children,
   title,
   description,
   onCancel,
   onCancelProps,
   onConfirm,
   onConfirmProps,
   onDelete,
   onDeleteProps,
   dialog,
}: DialogProps) => {
   const { showDialog, closeDialog, confirmDialog, dialogRef } = useDialog(
      dialog,
      onConfirm
   )

   const Dialog: JSX.Element | null =
      showDialog === dialog ? (
         <dialog
            ref={dialogRef}
            className="rounded-lg relative bg-darkMode text-gray-200 p-10 backdrop:bg-darkMode/5"
         >
            <button
               onClick={closeDialog}
               className="text-3xl absolute right-3 top-3"
            >
               <IoClose className="text-gray-200 hover:text-secondary/30 transition-colors" />
            </button>
            <div className="max-w-lg flex flex-col gap-4 items-center justify-center">
               <h1 className="text-2xl font-bold text-primary">{title}</h1>
               <p className="text-sm text-center">{description}</p>
               <div className="w-full">{children}</div>
               <div className="flex gap-4">
                  <button
                     style={
                        onConfirmProps?.color
                           ? { backgroundColor: onConfirmProps?.color }
                           : {}
                     }
                     onClick={confirmDialog}
                     className="btn-white"
                  >
                     {onConfirmProps?.text || 'Confirm'}
                  </button>
                  {onDelete && (
                     <button
                        style={
                           onDeleteProps?.color
                              ? { backgroundColor: onDeleteProps?.color }
                              : {}
                        }
                        onClick={onDelete}
                        className="btn-white"
                     >
                        {onDeleteProps?.text || 'Cancel'}
                     </button>
                  )}
                  {onCancel && (
                     <button
                        style={
                           onCancelProps?.color
                              ? { backgroundColor: onCancelProps?.color }
                              : {}
                        }
                        onClick={closeDialog}
                        className="btn-white"
                     >
                        {onCancelProps?.text || 'Cancel'}
                     </button>
                  )}
               </div>
            </div>
         </dialog>
      ) : null

   return Dialog
}
