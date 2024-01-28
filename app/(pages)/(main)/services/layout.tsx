import { ChoiceService } from '@/components/pages/services/ChoiceService'
import { HeroPage } from '@/components/ui/globals/heroPage/HeroPage'

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <HeroPage>
            <ChoiceService />
         </HeroPage>

         <section className="min-h-[500px] container pb-10">{children}</section>
      </>
   )
}
