import { AboutUs } from '@/components/pages/home/AboutUs'
import { BannerBussines } from '@/components/pages/home/BannerBussines'
import { PreferMenu } from '@/components/pages/home/PreferMenu'
import { Testimonials } from '@/components/pages/home/Testimonials'
import { Wy_US } from '@/components/pages/home/Wy-Us'
import { HeroPage } from '@/components/ui/HeroPage'
import { HeroPageContent } from '@/components/ui/HeroPageContent'
import { SectionRoundedBehindBanner } from '@/components/ui/SectionRoundedBehindBanner'
import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { BANNER_CONTENT } from '@/constants/common'
import { FIRS_PATHNAME_MENU_PAGE } from '@/constants/links_navbar'
import { img_PageMenu, img_PageMenuMovil } from '@/utils/images'

export default function Home() {
   return (
      <>
         <HeroPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <LinkButton href={FIRS_PATHNAME_MENU_PAGE} title="Menu" />
            </HeroPageContent>
         </HeroPage>
         <SectionRoundedBehindBanner>
            <Wy_US />
         </SectionRoundedBehindBanner>
         <AboutUs />
         <PreferMenu />
         <BannerBussines />
         <Testimonials />
      </>
   )
}
