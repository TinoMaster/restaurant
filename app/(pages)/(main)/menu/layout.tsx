import { InnerPages } from '@/components/animation/InnerPages'
import { TitleTypeMenu } from '@/components/helpers/TitleTypeMenu'
import { NavBar_pageMenu } from '@/components/navs/NavBar_pageMenu'
import { HeroPage } from '@/components/ui/HeroPage'
import { HeroPageContent } from '@/components/ui/HeroPageContent'
import { SectionRoundedBehindBanner } from '@/components/ui/SectionRoundedBehindBanner'
import { BANNER_CONTENT } from '@/constants/common'
import {
   banner_menuPage,
   banner_menuPageMovil
} from '@/utils/images'

export default function Menu({ children }: { children: React.ReactNode }) {
   return (
      <InnerPages>
         <HeroPage
            imageDesktop={banner_menuPage}
            imagemovil={banner_menuPageMovil}
         >
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            ></HeroPageContent>
         </HeroPage>
         <SectionRoundedBehindBanner>
            <NavBar_pageMenu />
         </SectionRoundedBehindBanner>
         <section className="min-h-[500px] container pb-10">
            <TitleTypeMenu />
            {children}
         </section>
      </InnerPages>
   )
}
