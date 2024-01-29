import { AboutUs } from '@/components/pages/home/AboutUs'
import { BannerServices } from '@/components/pages/home/BannerServices'
import { PreferMenu } from '@/components/pages/home/PreferMenu'
import { Testimonials } from '@/components/pages/home/Testimonials'
import { Wy_US } from '@/components/pages/home/Wy-Us'
import { HeroPage } from '@/components/ui/globals/heroPage/HeroPage'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { SectionRoundedBehindBanner } from '@/components/ui/globals/SectionRoundedBehindBanner'
import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { BANNER_CONTENT } from '@/constants/common'
import { MENU_PAGE } from '@/constants/routes.app'
import { img_PageMenu, img_PageMenuMovil } from '@/utils/images'
import { Suspense } from 'react'
import { LoadingProductsMenu } from '@/components/ui/loaders/LoadingProductsMenu'

export default function Home() {
   return (
      <>
         <HeroPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <LinkButton href={MENU_PAGE} title="Menu" />
            </HeroPageContent>
         </HeroPage>
         <SectionRoundedBehindBanner>
            <Wy_US />
         </SectionRoundedBehindBanner>
         <AboutUs />
         <Suspense fallback={<LoadingProductsMenu />}>
            <PreferMenu />
         </Suspense>
         <BannerServices />
         <Testimonials />
      </>
   )
}
