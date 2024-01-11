import { getAddress } from '@/services/actions/address.action'
import Link from 'next/link'
import { CardAddress } from './CardAddress'

export const RenderAddresses = async () => {
   const addresses = await getAddress()

   return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
         <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
               <h3 className="text-primaryPal-600 text-xl font-bold sm:text-2xl">
                  Addresses
               </h3>
               <p className="text-gray-300 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
               </p>
            </div>
            <div className="mt-3 md:mt-0">
               <Link
                  href={'/profile/address/add_new_address'}
                  className="btn-white"
               >
                  Add new
               </Link>
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {!addresses ? (
               <p>No addresses</p>
            ) : (
               addresses.map(({ _id, name, city, street, postal_code }) => (
                  <CardAddress
                     key={_id}
                     _id={_id}
                     name={name}
                     city={city}
                     street={street}
                     postal_code={postal_code}
                  />
               ))
            )}
         </div>
      </div>
   )
}
