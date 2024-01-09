'use client'
import { linksPrincipalMenu } from '@/constants/links_navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { TbMenuDeep } from 'react-icons/tb'
import { NavbarLink } from './NabvarLink'
import { Registration } from './Registration'

export const NavBarScroll = () => {
   const [isActive, setIsActive] = useState(false)

   const variant = {
      open: {
         y: 0,
         opacity: 1,
         transition: {
            y: { stiffness: 1000, velocity: -100 },
         },
      },
      closed: {
         y: 50,
         opacity: 0,
         transition: {
            y: { stiffness: 1000 },
         },
      },
   }

   return (
      <>
         <motion.div
            onClick={() => setIsActive(false)}
            variants={variant}
            animate={isActive ? 'open' : 'closed'}
            className={`${
               isActive ? 'w-screen h-screen' : 'hidden'
            } fixed flex flex-col top-0 right-0 rounded-l-3xl text-slate-200 bg-gradient-to-r from-darkMode/90 via-lightDarkMode to-darkMode shadow-md py-2 `}
         >
            <div className="flex w-full flex-col z-10 grow">
               <ul className="flex w-[150vw] -translate-x-[25vw] flex-col text-xl justify-center items-center h-full gap-8 bg-lightDarkMode rounded-t-full">
                  {linksPrincipalMenu?.map((link) => (
                     <NavbarLink key={link.name} link={link} />
                  ))}
               </ul>
            </div>
            <div className="py-20">
               <small onClick={() => setIsActive(false)}>
                  <Registration />
               </small>
            </div>
         </motion.div>
         {/* Buttom section */}
         <section
            className={`fixed top-4 right-0 rounded-l-3xl text-slate-200 bg-gradient-to-r from-darkMode/90 via-lightDarkMode/90 to-darkMode/90 shadow-md py-2 z-40`}
         >
            <div className="lg:pr-5 lg:pl-10 px-3 flex justify-between items-center hover:-translate-x-1 transition-transform">
               <div
                  onClick={() => setIsActive(!isActive)}
                  className="lg:hidden select-none"
               >
                  {isActive ? (
                     <IoClose className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
                  ) : (
                     <TbMenuDeep className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
                  )}
               </div>
            </div>
         </section>
      </>
   )
}
