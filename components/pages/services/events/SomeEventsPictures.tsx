import { texturaCemento } from '@/utils/images'
import Image from 'next/image'

export const SomeEventsPictures = () => {
   return (
      <section className="text-gray-300/80 body-font">
         <div className="px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-col">
               <h3 className="sm:text-4xl text-4xl font-medium title-font text-white text-center">
                  Some of our events
               </h3>
               <p className="text-center leading-relaxed text-lg max-w-3xl mx-auto">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably heard of them man bun deep jianbing selfies
                  heirloom.
               </p>
            </div>
            <div className="gap-6 columns-1 w-full sm:columns-2 lg:columns-3 space-y-5">
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
               <Image className='w-full' width={350} height={250} alt="gallery" src={texturaCemento} />
            </div>
         </div>
      </section>
   )
}
