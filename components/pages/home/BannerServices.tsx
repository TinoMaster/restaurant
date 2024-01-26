import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { SERVICES_PAGE } from '@/constants/routes.app'
import { img_about_us1 } from '@/utils/images'
import Image from 'next/image'

img_about_us1
export const BannerServices = () => {
   return (
      <article className="relative flex justify-center items-center">
         <div className="gradient"></div>
         <div className="absolute w-full h-full">
            <Image
               src={img_about_us1}
               alt="image banner services"
               className="w-full h-full object-cover brightness-50 grayscale"
            />
         </div>
         <div className="absolute w-full h-full bg-gradient-to-tr from-darkMode/80 via-darkMode/60 to-darkMode/80"></div>
         <section className="text-gray-400 z-10">
            <div className="container px-5 py-24">
               <div className="text-center mb-20">
                  <h3 className="text-white mb-4">Scopri i nostri servizi</h3>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 text-opacity-80">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                     deleniti mollitia ratione perspiciatis, porro excepturi
                     aperiam, alias hic, facere modi quos necessitatibus autem.
                     Dolor, id quam maxime sit quasi quisquam.
                  </p>
                  <div className="flex mt-6 justify-center">
                     <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                  </div>
               </div>
               <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0">
                        <svg
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-10 h-10"
                           viewBox="0 0 24 24"
                        >
                           <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           Shooting Stars
                        </h2>
                        <p className="leading-relaxed text-base">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a className="mt-3 text-primary inline-flex items-center">
                           Learn More
                           <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                           >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0">
                        <svg
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-10 h-10"
                           viewBox="0 0 24 24"
                        >
                           <circle cx="6" cy="6" r="3"></circle>
                           <circle cx="6" cy="18" r="3"></circle>
                           <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           The Catalyzer
                        </h2>
                        <p className="leading-relaxed text-base">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a className="mt-3 text-primary inline-flex items-center">
                           Learn More
                           <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                           >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0">
                        <svg
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           className="w-10 h-10"
                           viewBox="0 0 24 24"
                        >
                           <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                           <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           Neptune
                        </h2>
                        <p className="leading-relaxed text-base">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a className="mt-3 text-primary inline-flex items-center">
                           Learn More
                           <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                           >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
               <div className='flex justify-center mt-20'>

               <LinkButton href={SERVICES_PAGE} title="Vedi Servizi" />
               </div>
            </div>
         </section>
      </article>
   )
}
