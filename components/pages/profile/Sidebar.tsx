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
         className={`md:h-full bg-lightDarkMode absolute transition-all z-30 overflow-y-auto overflow-x-hidden py-1 ${
            menuIsOpen ? 'w-60' : 'w-full md:w-14'
         }`}
      >
         <div className="flex md:flex-col md:h-full justify-between items-center px-2 md:px-0">
            <div className="flex md:flex-col items-center justify-center gap-5 px-2 pr-4 md:pr-0 md:py-2 border-r md:border-r-0 md:border-b border-gray-600 md:pb-10">
               <button onClick={toggleMenu} className="p-2 hidden md:block">
                  <IoMenu className="text-3xl" />
               </button>
               <button
                  onClick={goHome}
                  className="flex items-center justify-center gap-2 p-2"
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

            <ul className="p-2 sm:p-4 text-sm font-medium md:space-y-4 flex md:flex-col gap-1">
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
            <div className="md:pt-5 border-l md:border-l-0 border-gray-600 pl-2 md:pb-10 sm:px-4 flex">
               <button
                  onClick={() => signOut()}
                  className="gap-2 flex relative justify-center items-center p-2 rounded-md md:mt-2 text-primary w-full max-w-sm m-auto"
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
