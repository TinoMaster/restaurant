export interface DialogProps {
   children: React.ReactNode
   title: string
   description?: string
   onDelete?: () => void
   onDeleteProps?: {
      text?: string
      color?: string
      icon?: JSX.Element
   }
   onCancel?: () => void
   onCancelProps?: {
      text?: string
      color?: string
      icon?: JSX.Element
   }
   onConfirm?: () => boolean | Promise<boolean>
   onConfirmProps?: {
      text?: string
      color?: string
      icon?: JSX.Element
   }
   dialog: string
}
