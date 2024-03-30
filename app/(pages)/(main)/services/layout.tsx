import { ChoiceService } from '@/components/pages/services/ChoiceService'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Pizzeria Albatros | Servizi',
}

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <div className="mt-5 md:mt-10">
            <ChoiceService />
         </div>

         <section className="min-h-[500px]">{children}</section>
      </>
   )
}
