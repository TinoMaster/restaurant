import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TOptionsToEdit } from '../components/pages/profile/userInfo/types'

export type IFunctionOpenDialog = (
   type: TOptionsToEdit,
   ...args: { name: string; value: string }[]
) => void

export const useOpenDialogs = () => {
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const { replace } = useRouter()
   const openDialog: IFunctionOpenDialog = (type, ...args) => {
      const params = new URLSearchParams(searchParams)
      if (type) {
         params.set('dialog', type)
      } else {
         params.delete('dialog')
      }

      if (args) {
         args.forEach((arg) => {
            params.set(arg.name, arg.value)
         })
      }
      replace(`${pathname}?${params.toString()}`)
   }

   return {
      openDialog,
   }
}
