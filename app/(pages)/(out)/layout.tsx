'use client'
import { useSimulatingOptions } from '@/hooks/useSimulatingOptions'
import { usePathname } from 'next/navigation'
import { IoIosOptions } from 'react-icons/io'

export default function LayoutOutPages({
   children,
}: {
   children: React.ReactNode
}) {
   const pathname = usePathname()
   const pathNameAuth = ['/login', '/register']
   const isAuth = pathNameAuth.includes(pathname)
   const { toggleMenu, menuOpen } = useSimulatingOptions()
   
   return (
      <>
         {/* Panel simulate options of the page */}
         <button
            onClick={toggleMenu}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-darkMode z-30 flex justify-center items-center"
         >
            <IoIosOptions className="w-6 h-6 text-white" />
         </button>
         {menuOpen && (
            <div className="flex flex-col items-start gap-2 p-3 pb-10 bg-darkMode text-white absolute bottom-10 right-10 z-20 rounded-md text-sm">
               {isAuth ? (
                  <button className="py-2 px-4 rounded-md bg-white/5 hover:bg-white/10">
                     simulate login
                  </button>
               ) : (
                  <>
                     <button className="py-2 px-4 rounded-md bg-white/5 hover:bg-white/10">
                        change to admin
                     </button>
                     <button className="py-2 px-4 rounded-md bg-white/5 hover:bg-white/10">
                        Verified phone
                     </button>
                     <button className="py-2 px-4 rounded-md bg-white/5 hover:bg-white/10">
                        Verified email
                     </button>
                  </>
               )}
            </div>
         )}
         {children}
      </>
   )
}
