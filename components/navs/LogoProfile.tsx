'use client'
import { linksLogoProfile } from '@/constants/links_profile'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'

export const LogoProfile = () => {
   const [menuProfile, setMenuProfile] = useState(false)
   const { data: session } = useSession()

   useEffect(() => {
      if (menuProfile) {
         window.addEventListener('click', () => {
            setMenuProfile(false)
         })
      }

      return () => {
         window.removeEventListener('click', () => {
            setMenuProfile(false)
         })
      }
   }, [menuProfile])

   return (
      <button
         onClick={(e) => {
            e.stopPropagation()
            setMenuProfile(!menuProfile)
         }}
         className="cursor-pointer flex justify-center items-center relative"
      >
         <div className="flex items-center">
            {session?.user.image ? (
               <Image
                  src={session.user.image}
                  alt="user image"
                  width={100}
                  height={100}
                  className="w-12 h-12 lg:w-8 lg:h-8 rounded-full object-cover object-top"
               />
            ) : (
               <div className="text-darkMode font-serif capitalize w-8 h-8 bg-gray-100 rounded-full flex justify-center items-center">
                  <FaUser />
               </div>
            )}
            <CiMenuKebab className="text-3xl lg:text-base" />
         </div>

         {menuProfile && (
            <div className="bg-gradient-to-r from-gray-100 to-white text-darkMode absolute z-20 top-[48px] right-2 lg:right-0 p-4 flex flex-col justify-center gap-2 rounded-lg">
               {linksLogoProfile.map(({ title, href }, idx) => (
                  <Link
                     key={title}
                     href={href}
                     className="flex items-center gap-1 p-2 rounded-lg hover:bg-white/90 hover:text-gray-800 transition-colors duration-150"
                  >
                     {}
                     <span className="capitalize text-sm">{title}</span>
                  </Link>
               ))}
               <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1 p-2 rounded-lg hover:bg-white/90 hover:text-gray-800 transition-colors duration-150"
               >
                  <RiLogoutCircleLine className="text-lg" />
                  <span className="capitalize text-sm">Logout</span>
               </button>
            </div>
         )}
      </button>
   )
}
