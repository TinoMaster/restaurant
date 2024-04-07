import { MenuInfinite } from '@/components/ui/globals/MenuInfinite'
import { linksAdminPanel } from '@/constants/links_profile'
import React from 'react'

export default function AdminPanelLayout({
   children,
}: {
   readonly children: React.ReactNode
}) {
   return (
      <div className="">
         <div className="sticky top-0 -translate-y-10">
            <MenuInfinite
               links={linksAdminPanel}
               cutPath={[1, 4]}
               position="right"
            />
         </div>
         {children}
      </div>
   )
}
