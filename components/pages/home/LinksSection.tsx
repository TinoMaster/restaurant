import { img_PageMenuMovil, prenotazione } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export const LinksSection = () => {
   return (
      <div className="container grid grid-cols-2 gap-4 py-2">
         <div className="col-span-1">
            <Link
               href="/menu"
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tl from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md"
            >
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <Image
                     fill
                     alt="menu"
                     src={img_PageMenuMovil}
                     className="object-cover"
                     quality={10}
                  />
               </div>
               <p className="text-xl font-bold">Vedi Menu</p>
            </Link>
         </div>
         <div className="col-span-1">
            <Link
               href="/services/events"
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tr from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md"
            >
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <Image
                     fill
                     alt="menu"
                     src={prenotazione}
                     className="object-cover"
                     quality={10}
                  />
               </div>
               <p className="text-xl font-bold">Prenotare</p>
            </Link>
         </div>
      </div>
   )
}
