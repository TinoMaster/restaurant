import { IconType } from 'react-icons'

export type TLink = {
   title: string
   href: string
}

export type TLinkWhitIcon = {
   title: string
   href: string
   icon: IconType
}

export type TGroupFooterLink = {
   category: string
   links: TLink[]
}

/* Inputs */
export type TInput = {
   id?: string
   name: string
   type: string
   label?: string
   placeholder?: string
   editable?: boolean
   value?: string
}
export type TInputProps = {
   id?: string
   name: string
   label?: string
   type: string
   placeholder?: string
   value?: string | number | undefined | readonly string[]
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
   disabled?: boolean
}

export interface IDataToVerifyEmail {
   email: string
   firstName: string
   verificationCode: string
}
