import { AboutUs } from '@/components/pages/home/AboutUs'
import { BannerServices } from '@/components/pages/home/BannerServices'
import { LinksSection } from '@/components/pages/home/LinksSection'
import { PreferMenu } from '@/components/pages/home/PreferMenu'
import { Testimonials } from '@/components/pages/home/Testimonials'
import { Wy_US } from '@/components/pages/home/Wy-Us'
import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { SectionRoundedBehindBanner } from '@/components/ui/globals/SectionRoundedBehindBanner'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { LoadingProductsMenu } from '@/components/ui/loaders/LoadingProductsMenu'
import { BANNER_CONTENT } from '@/constants/common'
import { CONTACT_PAGE, MENU_PAGE } from '@/constants/routes.app'
import { img_PageMenu, img_PageMenuMovil } from '@/utils/images'
import Link from 'next/link'
import { Suspense } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function Home() {
   return (
      <div className="-translate-y-[80px]">
         <HeroCurve imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <div className="col-span-2">
                  <Link
                     href="/menu"
                     className="w-full flex flex-col justify-center items-center gap-2"
                  >
                     <div className="rounded-full border-primary border-2 p-2 gap-2 flex justify-center items-center">
                        <FaLocationDot className="w-6 h-6 text-gray-200" />
                        <p className="text-xl">Come Arrivare</p>
                     </div>
                  </Link>
               </div>
            </HeroPageContent>
         </HeroCurve>
         <div className="py-10 lg:py-20 h-[30vh] rounded-t-3xl">
            <LinksSection />
         </div>
         {/* <SectionRoundedBehindBanner>
            <Wy_US />
         </SectionRoundedBehindBanner> */}
         <AboutUs />
         <Suspense fallback={<LoadingProductsMenu />}>
            <PreferMenu />
         </Suspense>
         <BannerServices />
         <Testimonials />
      </div>
   )
}
