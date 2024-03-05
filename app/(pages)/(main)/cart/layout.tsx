import { prenotazione } from '@/utils/images'
import Image from 'next/image'

export default function CartLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <div className="w-full h-full relative bg-red-600 -translate-y-[100px] lg:-translate-y-[120px]">
         <Image
            src={prenotazione}
            alt="fondo auth"
            className="w-full h-full absolute object-cover brightness-25"
         />
         <div className="w-full h-full relative translate-y-[100px] lg:translate-y-[120px]">
            {children}
         </div>
      </div>
   )
}
