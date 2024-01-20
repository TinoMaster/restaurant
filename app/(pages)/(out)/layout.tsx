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
   const { toggleMenu, menuOpen, handleLogin } = useSimulatingOptions()

   return (
      <>
         {/* Panel simulate options of the page */}
         <div
            onClick={toggleMenu}
            className="absolute bottom-4 right-4 p-3 gap-3 rounded-full z-30 flex items-center"
         >
            <p className="text-white flex items-center gap-2 animate-bounce hover:animate-none bg-gradient-to-tr from-darkMode via-pri-600/80 to-primary/50 p-3 rounded-full hover:cursor-pointer">
               {isAuth ? (
                  <span>
                     Simula la entrada del usuario <small> →</small>
                  </span>
               ) : (
                  <span>
                     Simula las opciones del usuario <small> →</small>
                  </span>
               )}
            </p>
            <button className="bg-darkMode p-3 rounded-full flex justify-center items-center">
               <IoIosOptions className="w-6 h-6 text-white" />
            </button>
         </div>
         {menuOpen && (
            <div className="flex flex-col items-start gap-2 p-3 pb-10 bg-darkMode text-white absolute bottom-20 right-10 z-30 rounded-md text-sm">
               {isAuth ? (
                  <button
                     onClick={handleLogin}
                     className="py-2 px-4 rounded-md bg-white/5 hover:bg-white/10"
                  >
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
