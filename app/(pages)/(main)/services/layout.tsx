import { ChoiceService } from '@/components/pages/services/ChoiceService'

export default function LayoutServicePage({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         {/* <HeroCurve
            imageDesktop={banner_servicesPage}
            imagemovil={banner_servicesPageMovil}
         >
            <HeroPageContent
               title={BANNER_CONTENT.home.title}
               subtitle={BANNER_CONTENT.home.subtitle}
            ></HeroPageContent>
         </HeroCurve> */}
         <div className="mt-5 md:mt-10">
            <ChoiceService />
         </div>

         <section className="min-h-[500px]">{children}</section>
      </>
   )
}
