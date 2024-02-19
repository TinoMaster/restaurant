import {
    banner_menuPageMovil,
    img_PageMenuMovil
} from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export const LinksSection = () => {
   return (
      <div className="w-full grid grid-cols-2 gap-4">
         <div className="col-span-1">
            <Link
               href="/menu"
               className="w-full flex flex-col justify-center items-center gap-2"
            >
               <Image
                  width={200}
                  height={200}
                  alt="menu"
                  src={img_PageMenuMovil}
                  className="w-20 h-20 rounded-full object-cover bg-white/5 p-1"
               />
               <p className="text-xl font-bold">Menu</p>
            </Link>
         </div>
         <div className="col-span-1">
            <Link
               href="/services/events"
               className="w-full flex flex-col justify-center items-center gap-2"
            >
               <Image
                  width={200}
                  height={200}
                  alt="menu"
                  src={banner_menuPageMovil}
                  className="w-20 h-20 rounded-full object-cover bg-white/5 p-1"
               />
               <p className="text-xl font-bold">Riservare</p>
            </Link>
         </div>
      </div>
   )
}
