import { ChoiceService } from '@/components/pages/services/ChoiceService'
import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { BANNER_CONTENT } from '@/constants/common'
import { MENU_PAGE } from '@/constants/routes.app'
import { banner_servicesPage, banner_servicesPageMovil } from '@/utils/images'

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroCurve
            imageDesktop={banner_servicesPage}
            imagemovil={banner_servicesPageMovil}
         >
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <LinkButton href={MENU_PAGE} title="Menu" />
            </HeroPageContent>
         </HeroCurve>
         <ChoiceService />

         <section className="min-h-[500px] py-10">{children}</section>
      </>
   )
}
