'use client'
import { cutPathnameByPiece } from '@/utils/cutPathname'
import { usePathname } from 'next/navigation'

export const TitleTypeMenu = () => {
   const pathname = usePathname()
   const title = cutPathnameByPiece(pathname, 2)
   return (
      <article className="text-center pb-5">
         <h2 className="uppercase text-slate-200 font-serif text-3xl italic">
            {title ? title : 'antipasti'}
         </h2>
      </article>
   )
}
