import { MapAndFeedback } from '@/components/pages/contacts/MapAndFeedback'
import React from 'react'

export const metadata = {
   title: 'Pizzeria Albatros | Contatti',
}

export default function ContactPage() {
   return (
      <div className="mt-5 md:mt-10">
         <MapAndFeedback />
      </div>
   )
}
