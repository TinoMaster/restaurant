import { MenuInfinite } from '@/components/ui/globals/MenuInfinite'
import { linksAdminPanel } from '@/constants/links_profile'
import { authOptions } from '@/libs/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AdminPanellayout({
   children,
}: {
   children: React.ReactNode
}) {
   const session = await getServerSession(authOptions)

   if (!session?.user.isAdmin) {
      redirect('/')
   }

   return (
      <div>
         <MenuInfinite
            links={linksAdminPanel}
            cutPath={[1, 4]}
            position="right"
         />
         {children}
      </div>
   )
}
