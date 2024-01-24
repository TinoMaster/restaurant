'use client'
import { linksProfile } from '@/constants/links_profile'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { IoMenu } from 'react-icons/io5'
import { FaArrowLeft, FaHouse } from 'react-icons/fa6'
import { useState } from 'react'
import { ADMIN_PANEL } from '@/constants/routes.app'
import { GrUserAdmin } from 'react-icons/gr'
import { cutPathnameByPiece } from '@/utils/cutPathname'
import { useAppSelector } from '@/redux/hooks'

export const Sidebar = () => {
   const pathname = usePathname()
   const path = cutPathnameByPiece(pathname, 1, 3)
   const [menuIsOpen, setMenuIsOpen] = useState(false)
   const router = useRouter()
   const isAdmin = useAppSelector((state) => state.userReducer.isAdmin)

   const handlerBack = () => {
      router.back()
   }

   const goHome = () => {
      router.push('/')
   }

   const toggleMenu = () => {
      setMenuIsOpen(!menuIsOpen)
   }
   return (
      <nav
         className={`h-full bg-lightDarkMode absolute transition-all z-30 overflow-y-auto overflow-x-hidden ${
            menuIsOpen ? 'w-60' : 'w-14'
         }`}
      >
         <div className="flex flex-col h-full justify-between items-center">
            <div className="flex flex-col gap-5 py-2">
               <button onClick={toggleMenu} className="p-2">
                  <IoMenu className="text-3xl" />
               </button>
               <button
                  onClick={goHome}
                  className="flex items-center justify-center gap-2 pt-4"
               >
                  <FaHouse className="text-xl" />
                  <span className={`${menuIsOpen ? 'block' : 'hidden'}`}>
                     Home
                  </span>
               </button>
               <button
                  onClick={handlerBack}
                  className="flex items-center justify-center gap-2"
               >
                  <FaArrowLeft className="text-xl" />
                  <span className={`${menuIsOpen ? 'block' : 'hidden'}`}>
                     back
                  </span>
               </button>
            </div>

            <ul className="p-2 pt-5 sm:p-4 text-sm font-medium space-y-4">
               {linksProfile.map((item, idx) => (
                  <li key={idx}>
                     <Link
                        href={item.href}
                        className={`flex items-center capitalize gap-2 text-gray-400 p-2 rounded-lg ${
                           path === item.href
                              ? 'bg-white/90 text-gray-700'
                              : 'hover:bg-white/10'
                        }   active:bg-pri-900 duration-150`}
                     >
                        <item.icon className="text-xl" />
                        <span className={`${menuIsOpen ? 'block' : 'hidden'}`}>
                           {item.title}
                        </span>
                     </Link>
                  </li>
               ))}
               {isAdmin && (
                  <li>
                     <Link
                        href={ADMIN_PANEL}
                        className={`flex items-center capitalize gap-2 text-gray-400 p-2 rounded-lg ${
                           path === cutPathnameByPiece(ADMIN_PANEL, 1, 3)
                              ? 'bg-white/90 text-gray-700'
                              : 'hover:bg-white/10'
                        }   active:bg-pri-900 duration-150`}
                     >
                        <div className="p-1">
                           <GrUserAdmin />
                        </div>
                        <span className={`${menuIsOpen ? 'block' : 'hidden'}`}>
                           Admin Panel
                        </span>
                     </Link>
                  </li>
               )}
            </ul>
            <div className="pt-5 pb-10 sm:px-4 flex">
               <button
                  onClick={() => signOut()}
                  className="gap-2 flex relative justify-center items-center p-2 rounded-md mt-2 text-primary w-full max-w-sm m-auto"
               >
                  <RiLogoutCircleLine />
                  <span className={`${menuIsOpen ? 'block' : 'hidden'}`}>
                     Logout
                  </span>
               </button>
            </div>
         </div>
      </nav>
   )
}
