'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface InnerPagesProps {
   children: React.ReactNode
}

export const InnerPages = ({ children }: InnerPagesProps) => {
   const anim = (variant: any) => {
      return {
         initial: 'initial',
         animate: 'enter',
         exit: 'exit',
         variants: variant,
      }
   }

   const opacity = {
      initial: {
         opacity: 0,
      },
      enter: {
         opacity: 1,
         transition: {
            duration: 0.5,
         },
      },
      exit: {
         opacity: 1,
      },
   }

   return (
      <motion.div {...anim(opacity)} className="">
         {children}
      </motion.div>
   )
}
