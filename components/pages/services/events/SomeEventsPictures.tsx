import { banner_menuPage, banner_menuPageMovil, banner_servicesPage, img_about_us2 } from '@/utils/images'
import Image from 'next/image'
import React from 'react'

export const SomeEventsPictures = () => {
   return (
      <section className="text-gray-300/80 body-font">
         <div className="px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-col">
               <h1 className="sm:text-4xl text-3xl font-medium title-font text-white text-center">
                  Some of our events
               </h1>
               <p className="text-center leading-relaxed text-lg max-w-3xl mx-auto">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably heard of them man bun deep jianbing selfies
                  heirloom.
               </p>
            </div>
            <div className="gap-6 columns-1 sm:columns-2 lg:columns-3 space-y-5">
               <Image alt="gallery" src={img_about_us2} />
               <Image alt="gallery" src={banner_menuPage} />
               <Image alt="gallery" src={banner_menuPageMovil} />
               <Image alt="gallery" src={banner_servicesPage} />
               <Image alt="gallery" src={img_about_us2} />
               <Image alt="gallery" src={img_about_us2} />
            </div>
         </div>
      </section>
   )
}
