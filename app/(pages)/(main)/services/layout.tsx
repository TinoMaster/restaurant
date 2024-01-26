import { SectionRoundedBehindBanner } from '@/components/ui/globals/SectionRoundedBehindBanner'
import { HeroPage } from '@/components/ui/globals/heroPage/HeroPage'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { BANNER_CONTENT } from '@/constants/common'
import { banner_servicesPage, banner_servicesPageMovil } from '@/utils/images'

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroPage
            imageDesktop={banner_servicesPage}
            imagemovil={banner_servicesPageMovil}
         >
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            ></HeroPageContent>
         </HeroPage>
         <SectionRoundedBehindBanner>
            <div>prueba</div>
         </SectionRoundedBehindBanner>
         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}
