import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export const useDialog = (
   dialog: string,
   onConfirm?: () => void,
   onCancel?: () => void
) => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { replace } = useRouter()
   const dialogRef = useRef<HTMLDialogElement | null>(null)
   const showDialog = searchParams.get('dialog')

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
      if (onCancel) onCancel()
      params.delete('dialog')
      params.delete('id')
      replace(`${pathName}?${params.toString()}`)
   }

   const confirmDialog = () => {
      if (onConfirm) onConfirm()
      closeDialog()
   }

   return { dialogRef, closeDialog, confirmDialog, showDialog }
}
