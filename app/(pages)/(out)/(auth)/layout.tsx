'use client'
import { SimulateOptions } from '@/components/helpers/SimulateOptions'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoadingSkeletonPages from '../../(main)/loading'

export default function LayoutOutPages({
   children,
}: {
   readonly children: React.ReactNode
}) {
   const router = useRouter()
   const { status } = useSession()

   if (status === 'loading') {
      return <LoadingSkeletonPages />
   }

   if (status === 'authenticated') {
      router.push('/')
   }

   if (status === 'unauthenticated') {
      return (
         <>
            <SimulateOptions />
            {children}
         </>
      )
   }
}
