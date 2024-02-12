import { bannerBigTittle, bannerTittle } from '@/utils/animations/framers'
import LoadingBannerContent from '../../loaders/loadingBannerContent'
import { MotionDiv, MotionP } from '../../../helpers/MotionDiv'
import Image from 'next/image'
import { logo_white } from '@/utils/images'

interface HeroPageContentProps {
   title: string
   subtitle: string
   children?: React.ReactNode
}
export const HeroPageContent = ({
   title,
   subtitle,
   children,
}: HeroPageContentProps) => {
   return (
      <div className="flex flex-col text-white w-11/12 lg:w-2/3 xl:w-2/5 2xl:w-1/3 h-full justify-center items-center relative">
         <LoadingBannerContent />
         <div className="w-32 h-32 lg:w-44 lg:h-44 bg-primary/30 rounded-full z-10 overflow-hidden border-4 border-primary/50 relative -translate-y-5">
            <div className="w-full h-full bg-primary/30 z-10 absolute" />
            <Image
               src={logo_white}
               alt="logo"
               width={300}
               height={300}
               priority={true}
               className="w-full h-full object-cover"
            />
         </div>
         <MotionP
            variants={bannerTittle}
            initial="initial"
            animate="animate"
            className="text-slate-300 text-lg lg:text-xl"
         >
            {title}
         </MotionP>
         <MotionP
            variants={bannerBigTittle}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl text-center italic"
         >
            {subtitle}
         </MotionP>
         <MotionDiv
            variants={bannerTittle}
            initial="initial"
            animate="animate"
            className="py-4 z-20 flex flex-col justify-center items-center gap-2"
         >
            {children}
         </MotionDiv>
      </div>
   )
}
