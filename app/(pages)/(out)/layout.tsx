'use client'
import { SimulateOptions } from '@/components/helpers/SimulateOptions'
import { usePathname } from 'next/navigation'

export default function LayoutOutPages({
   children,
}: {
   children: React.ReactNode
}) {
   const pathname = usePathname()
   const pathNameAuth = ['/login', '/register']
   const isAuth = pathNameAuth.includes(pathname)

   return (
      <>
         {isAuth && <SimulateOptions />}
         {children}
      </>
   )
}
