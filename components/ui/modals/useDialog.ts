import { DIALOG, DIALOG_ID } from '@/constants/dialogs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export const useDialog = (
   dialog: string,
   onConfirm?: () => boolean | Promise<boolean>
) => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { replace } = useRouter()
   const dialogRef = useRef<HTMLDialogElement | null>(null)
   const showDialog = searchParams.get(DIALOG)

   useEffect(() => {
      if (showDialog === dialog) {
         dialogRef.current?.showModal()
      } else {
         dialogRef.current?.close()
      }
   }, [showDialog, dialog])

   const closeDialog = () => {
      const params = new URLSearchParams(searchParams)
      dialogRef.current?.close()
      params.delete(DIALOG)
      params.delete(DIALOG_ID)
      replace(`${pathName}?${params.toString()}`)
   }

   const confirmDialog = async () => {
      if (onConfirm) {
         if (!(await onConfirm())) return
         closeDialog()
      } else {
         closeDialog()
      }
   }

   return { dialogRef, closeDialog, confirmDialog, showDialog }
}
