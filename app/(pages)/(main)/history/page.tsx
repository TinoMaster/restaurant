import { img_about_us1 } from '@/utils/images'
import Image from 'next/image'

export default function HistoryPage() {
   return (
      <div className="">
         <div className="grid grid-cols-2 gap-4 py-36 container">
            <div>
               <h1 className="text-3xl font-bold mb-4">
                  Italian Restaurant Story
               </h1>
               <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec ultricies lacinia, nunc nisl aliquet nisl,
                  nec aliquet nisl nisl nec nisl. Sed euismod, nisl nec
                  ultricies lacinia, nunc nisl aliquet nisl, nec aliquet nisl
                  nisl nec nisl.
               </p>
            </div>
            <div>
               <Image
                  width={200}
                  height={300}
                  className="w-full h-full object-cover"
                  src={img_about_us1}
                  alt="Italian Restaurant Story"
               />
            </div>
         </div>
      </div>
   )
}
