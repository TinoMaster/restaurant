'use client'
import { CardServiceProps } from '@/constants/pages/services'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const CardService = ({ Icon, title, href }: CardServiceProps) => {
   const pathName = usePathname()
   const isActive = pathName === href

   if (isActive) {
      return (
         <div className="relative w-24 h-24 lg:h-56 lg:w-48 m-auto overflow-hidden rounded-xl border border-primary p-[1px] backdrop-blur-3xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c5924a_0%,#fbf9f1_50%,#c5924a_100%)]" />
            <div className="flex flex-col gap-1 h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-darkMode via-darkMode/80 to-darkMode px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
               <div className="w-10 h-10 lg:w-20 lg:h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary flex-shrink-0 lg:text-4xl">
                  {Icon}
               </div>
               <p className="text-white capitalize absolute bottom-1 text-xs lg:text-lg title-font font-medium">
                  {title}
               </p>
            </div>
         </div>
      )
   }

   return (
      <Link
         href={href}
         className="relative w-24 h-24 lg:h-56 lg:w-48 bg-black/10 hover:bg-white/5 transition-colors m-auto overflow-hidden rounded-xl  p-[1px]"
      >
         <div className="flex flex-col gap-1 h-full w-full items-center justify-center rounded-xl px-3 py-1 text-sm font-medium text-white">
            <div className="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-darkMode text-primary/30 lg:text-4xl">
               {Icon}
            </div>
            <p className="text-white/50 capitalize absolute bottom-1 text-xs lg:text-lg title-font font-medium">
               {title}
            </p>
         </div>
      </Link>
   )
}
