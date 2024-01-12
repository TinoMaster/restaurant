import { FormAddAddress } from '@/components/pages/profile/address/add_new_address/FormAddAddress'
import { img_map } from '@/utils/images'
import Image from 'next/image'

export default function AddNewAddressPage() {
   return (
      <div className="w-full grid grid-cols-4 pb-16">
         <fieldset className="grid grid-cols-2 col-span-4">
            <legend className="col-span-2 text-2xl lg:text-2xl py-5 text-primary">
               Add Address
            </legend>
            <div className="grid grid-cols-2 col-span-2 gap-10 ">
               <FormAddAddress />
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
