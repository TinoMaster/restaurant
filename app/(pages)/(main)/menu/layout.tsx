import { NavBar_pageMenu } from '@/components/pages/menu/navbar_products'
import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { HeroCurve } from '@/components/ui/globals/HeroCurve'
import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { BANNER_CONTENT } from '@/constants/common'
import { MENU_PAGE } from '@/constants/routes.app'
import {
   texturaCemento
} from '@/utils/images'
import { Suspense } from 'react'

export default function LayoutMenuPage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroCurve imageDesktop={texturaCemento} imagemovil={texturaCemento}>
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            >
               <LinkButton href={MENU_PAGE} title="Menu" />
            </HeroPageContent>
         </HeroCurve>
         <Suspense fallback={<LoadingCategories />}>
            <NavBar_pageMenu />
         </Suspense>
         <section className="min-h-[500px] container py-10">{children}</section>
      </>
   )
}
