import Image, { StaticImageData } from 'next/image'
import { MotionDiv } from '../../helpers/MotionDiv'
import LoadingImagesRotates from '../../ui/loaders/LoadingImagesRotates'
import {
   image1historyHome,
   image2historyHome,
} from '@/utils/animations/framers'

interface ImagesRotatesProps {
   image1: StaticImageData
   image2: StaticImageData
}

/* //TODO: fix loading animation */
export const ImagesRotates = ({ image1, image2 }: ImagesRotatesProps) => {
   return (
      <article className="lg:w-1/2 flex gap-3 lg:gap-10 relative">
         <LoadingImagesRotates />
         {/* block1 */}
         <MotionDiv
            variants={image1historyHome}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.8 }}
            className="w-1/2 flex flex-col gap-2 justify-center items-end"
         >
            <div className="w-[150px] h-[200px] lg:w-[300px] lg:h-[400px] p-1 bg-gradient-to-tr from-primary to-black shadow-lg shadow-black/40 rounded-md">
               <Image
                  src={image1}
                  alt="1"
                  className="w-full h-full object-cover saturate-50"
               />
            </div>
         </MotionDiv>
         {/* block2 */}
         <MotionDiv
            variants={image2historyHome}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1.8 }}
            className="w-1/2 flex flex-col gap-2 justify-center items-start "
         >
            <div className="w-[150px] h-[200px] lg:w-[300px] lg:h-[400px] p-1 bg-gradient-to-tr from-black to-primary shadow-lg shadow-black/40 rounded-md">
               <Image
                  src={image2}
                  alt="1"
                  className="w-full h-full object-cover saturate-50"
               />
            </div>
         </MotionDiv>
      </article>
   )
}
