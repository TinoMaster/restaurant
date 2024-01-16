import { FormCreateItemMenu } from '@/components/pages/profile/admin/menu/FormCreateItemMenu'
import { img_map } from '@/utils/images'
import Image from 'next/image'

/* //TODO: here will be the form */
export default function Form_Create_ItemMenu() {
   return (
      <section className="">
         <div className="w-full grid grid-cols-4 gap-4">
            {/* image */}
            <div className="col-span-4 lg:col-span-1 max-h-[250px] flex flex-col gap-2">
               <div className="w-full h-full">
                  <Image
                     src={img_map}
                     alt="map"
                     className="w-full h-full object-cover rounded-lg brightness-75"
                  />
               </div>
               <button className="btn-white">Add Image</button>
            </div>
            <FormCreateItemMenu />
         </div>
      </section>
   )
}
