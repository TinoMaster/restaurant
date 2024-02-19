import { img_PageMenuMovil, prenotazione } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export const LinksSection = () => {
   return (
      <div className="container grid grid-cols-2 gap-4 py-2">
         <div className="col-span-1">
            <Link
               href="/menu"
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tl from-primary/20 to-darkMode/70 shadow-md p-5 rounded-full"
            >
               <Image
                  width={200}
                  height={200}
                  alt="menu"
                  src={img_PageMenuMovil}
                  className="w-20 h-20 rounded-full object-cover bg-white/5 p-1"
               />
               <p className="text-xl font-bold">Vedi Menu</p>
            </Link>
         </div>
         <div className="col-span-1">
            <Link
               href="/services/events"
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tr from-primary/20 to-darkMode/70 shadow-md p-5 rounded-full"
            >
               <Image
                  width={200}
                  height={200}
                  alt="menu"
                  src={prenotazione}
                  className="w-20 h-20 rounded-full object-cover bg-white/5 p-1"
               />
               <p className="text-xl font-bold">Prenotare</p>
            </Link>
         </div>
      </div>
   )
}
