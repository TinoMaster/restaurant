'use client'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'

export const RenderAddresses = () => {
   const { addresses } = useAppSelector((state) => state.userReducer)
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
         <div className="mt-12 shadow-sm rounded-lg overflow-x-auto">
            {!addresses.length ? (
               <p>No addresses</p>
            ) : (
               <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-primaryPal-500 text-gray-100 font-medium border-b">
                     <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">City</th>
                        <th className="py-3 px-6">Street</th>
                        <th className="py-3 px-6">Postal code</th>
                        <th className="py-3 px-6"></th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300 divide-y bg-white/10">
                     {addresses.map(
                        ({ _id, name, city, street, postal_code }) => (
                           <tr key={_id}>
                              <td className="flex items-center gap-x-3 py-4 px-6 whitespace-nowrap">
                                 <span className="block text-gray-100 text-sm font-medium">
                                    {name}
                                 </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {city}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {street}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {postal_code}
                              </td>
                              <td className="text-right px-6 whitespace-nowrap space-x-2">
                                 <a
                                    href="javascript:void()"
                                    className="py-2 px-3 font-medium text-indigo-400 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                                 >
                                    Edit
                                 </a>
                                 <button className="py-2 leading-none px-3 font-medium text-red-400 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                    Delete
                                 </button>
                              </td>
                           </tr>
                        )
                     )}
                  </tbody>
               </table>
            )}
         </div>
      </div>
   )
}
