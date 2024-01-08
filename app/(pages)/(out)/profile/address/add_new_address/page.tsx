'use client'
import { Input } from '@/components/ui/elements/Input'
import { addressProfilePageInputs } from '@/constants/forms/profiles.form'
import { ADDRESS_PATH } from '@/constants/routes.api'
import { ADDRESSES_PANEL } from '@/constants/routes.app'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addAddress } from '@/redux/reducers/user_slice'
import { address } from '@/services/address'
import { TAddress, TAddressCreate } from '@/types/models/address'
import { img_map } from '@/utils/images'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function AddNewAddressPage() {
   const router = useRouter()
   const { _id } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      toast.loading('Adding address...')
      const formData = new FormData(e.currentTarget)

      const data: TAddressCreate = {
         name: formData.get('name') as string,
         city: formData.get('city') as string,
         street: formData.get('street_address') as string,
         country: formData.get('country') as string,
         postal_code: formData.get('postal_code') as string,
         user: _id,
      }

      const response = await address.createAddress(ADDRESS_PATH, data)

      if (!response.success) {
         toast.dismiss()
         toast.error(response.message)
      }

      if (response.success) {
         toast.dismiss()
         toast.success('Address added successfully')
         dispatch(addAddress(response.data as TAddress))
         router.push(ADDRESSES_PANEL)
      }
   }

   return (
      <div className="w-full grid grid-cols-4">
         <fieldset className="grid grid-cols-2 col-span-4">
            <legend className="col-span-2 text-2xl lg:text-2xl py-5 text-primary">
               Add Address
            </legend>
            <div className="grid grid-cols-2 col-span-2 gap-10 ">
               <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-5 rounded-xl"
               >
                  {addressProfilePageInputs.map((inp, idx) => (
                     <Input
                        key={idx}
                        type={inp.type}
                        label={inp.label}
                        name={inp.name}
                        id={inp.id}
                        placeholder={inp.placeholder}
                     />
                  ))}
                  <button type="submit" className="btn-white">
                     Add
                  </button>
               </form>
               {/* Caja mapa */}
               <div className="col-span-2 h-96 rounded-md overflow-hidden">
                  <Image
                     src={img_map}
                     alt="map"
                     className="w-full h-full object-cover brightness-75"
                  />
               </div>
            </div>
         </fieldset>
      </div>
   )
}
