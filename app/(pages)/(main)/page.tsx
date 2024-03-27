import { AboutUs } from '@/components/pages/home/AboutUs'
import { BannerServices } from '@/components/pages/home/BannerServices'
import { LinksSection } from '@/components/pages/home/LinksSection'
import { LinksSectionFallback } from '@/components/pages/home/LinksSectionFallback'
import { PreferMenu } from '@/components/pages/home/PreferMenu'
import { Testimonials } from '@/components/pages/home/Testimonials'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { LoadingProductsMenu } from '@/components/ui/loaders/LoadingProductsMenu'
import { BANNER_CONTENT } from '@/constants/common'
import { CONTACT_PAGE } from '@/constants/routes.app'
import { img_PageMenu } from '@/utils/images'
import Link from 'next/link'
import { Suspense } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function Home() {
   return (
      <div className="">
         <HeroCurve image={img_PageMenu}>
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <div className="col-span-2">
                  <Link
                     href={CONTACT_PAGE}
                     className="w-full flex flex-col justify-center items-center gap-2"
                  >
                     <button className="rounded-lg border-primary shadow-md shadow-black/40 border p-3 relative gap-1 flex justify-center items-center bg-gradient-to-tr from-primary/30 to-black/70">
                        <FaLocationDot className="w-7 h-7 text-gray-200 absolute -top-4" />
                        <p className="text-xl">Come arrivare</p>
                     </button>
                  </Link>
               </div>
            </HeroPageContent>
         </HeroCurve>
         <div className="py-10 lg:py-20 bg-gradient-to-t from-transparent via-lightDarkMode to-darkMode h-[35vh] -translate-y-[20px]">
            <Suspense fallback={<LinksSectionFallback />}>
               <LinksSection />
            </Suspense>
         </div>
         <div className="bg-gradient-to-r from-lightDarkMode via-darkMode to-lightDarkMode">
            <AboutUs />
         </div>
         <Suspense fallback={<LoadingProductsMenu />}>
            <PreferMenu />
         </Suspense>
         <BannerServices />
         <Testimonials />
      </div>
   )
}
