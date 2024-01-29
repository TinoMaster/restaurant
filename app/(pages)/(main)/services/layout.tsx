import { ChoiceService } from '@/components/pages/services/ChoiceService'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { banner_servicesPage, banner_servicesPageMovil } from '@/utils/images'

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroCurve imageDesktop={banner_servicesPage} imagemovil={banner_servicesPageMovil}>
            <ChoiceService />
         </HeroCurve>

         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}
