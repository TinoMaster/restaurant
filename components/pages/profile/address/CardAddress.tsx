import { DIALOG_EDIT_ADDRESS } from '@/constants/dialogs'
import { Dialogs_addresses } from './Dialogs_addresses'
import Link from 'next/link'

export interface CardAddressProps {
   _id: string
   name: string
   city: string
   street: string
   postal_code: string
}

export const CardAddress = ({
   _id,
   name,
   city,
   street,
   postal_code,
}: CardAddressProps) => {
   return (
      <>
         <Dialogs_addresses />
         <Link
            href={{
               pathname: '/profile/address',
               query: { dialog: DIALOG_EDIT_ADDRESS, id: JSON.stringify(_id) },
            }}
            className="bg-white text-xs lg:text-sm dark:bg-gray-100/5 shadow-lg rounded-lg p-6 transition duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100/10"
         >
            <h4 className="text-base lg:text-xl font-semibold">{name}</h4>
            <p className="text-gray-500">{city}</p>
            <p className="text-gray-500">{street}</p>
            <p className="text-gray-500">{postal_code}</p>
         </Link>
      </>
   )
}
