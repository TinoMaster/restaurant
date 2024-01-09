import { Buttom_add_new_address } from '@/components/pages/profile/address/add_new_address/Buttom_add_new_address'
import { InputAddNewAddress } from '@/components/pages/profile/address/add_new_address/Input_add_new_address'
import { addressProfilePageInputs } from '@/constants/forms/profiles.form'
import { createAddress } from '@/services/actions/address.action'
import { img_map } from '@/utils/images'
import Image from 'next/image'

export default function AddNewAddressPage() {
   return (
      <div className="w-full grid grid-cols-4">
         <fieldset className="grid grid-cols-2 col-span-4">
            <legend className="col-span-2 text-2xl lg:text-2xl py-5 text-primary">
               Add Address
            </legend>
            <div className="grid grid-cols-2 col-span-2 gap-10 ">
               <form
                  action={createAddress}
                  className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-5 rounded-xl"
               >
                  {addressProfilePageInputs.map((inp, idx) => (
                     <InputAddNewAddress
                        key={idx}
                        type={inp.type}
                        label={inp.label}
                        name={inp.name}
                        id={inp.id}
                        placeholder={inp.placeholder}
                        disabled={inp.editable ? false : true}
                        value={inp.value}
                     />
                  ))}
                  <div className="flex justify-end col-span-full">
                     <Buttom_add_new_address />
                  </div>
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
