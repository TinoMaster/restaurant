import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

interface LinkButtonProps {
   title: string
   href: string
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
   return (
      <Link href={href} className="hover:cursor-pointer">
         <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c5924a_0%,#fbf9f1_50%,#c5924a_100%)]" />
            <span className="inline-flex gap-2 hover:gap-3 hover:bg-darkMode/60 transition-colors h-full w-full min-w-[150px] cursor-pointer items-center justify-center rounded-full bg-darkMode/80 px-3 py-1 font-medium text-white backdrop-blur-3xl">
               <span className="">{title}</span>{' '}
               <FaArrowRightLong className="relative" />
            </span>
         </div>
      </Link>
   )
}
