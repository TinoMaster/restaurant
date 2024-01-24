import { NavBar_pageMenu } from '@/components/pages/menu/navbar_products'
import { HeroPage } from '@/components/ui/HeroPage'
import { HeroPageContent } from '@/components/ui/HeroPageContent'
import { SectionRoundedBehindBanner } from '@/components/ui/SectionRoundedBehindBanner'
import { BANNER_CONTENT } from '@/constants/common'
import { banner_menuPage, banner_menuPageMovil } from '@/utils/images'

export default function LayoutMenuPage({ children }: { children: React.ReactNode }) {
   return (
      <>
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
         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}