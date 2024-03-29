'use client'
import { IoClose } from 'react-icons/io5'
import { DialogProps } from './dialog.types'
import { useDialog } from './useDialog'
import { motion } from 'framer-motion'

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
         <motion.dialog
            ref={dialogRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="rounded-lg w-screen h-screen fixed text-gray-200 bg-transparent z-50 flex items-end justify-center"
         >
            <div className="w-full sm:w-[500px] sm:m-auto bg-neutral-800 shadow-md rounded-lg relative p-10">
               <button
                  onClick={closeDialog}
                  className="text-3xl absolute right-3 top-3"
               >
                  <IoClose className="text-gray-200 hover:text-secondary/30 transition-colors" />
               </button>
               <div className="max-w-lg flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-primary">{title}</h1>
                  <p className="text-sm text-center">{description ?? ''}</p>
                  <div className="w-full">{children}</div>
                  <div className="flex gap-4">
                     {onConfirm && (
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
                     )}
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
            </div>
         </motion.dialog>
      ) : null

   return Dialog
}
