import { LinkButton } from '@/components/ui/buttons/LinkButton'
import { SERVICES_PAGE } from '@/constants/routes.app'
import { img_PageMenu } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidBusiness } from 'react-icons/bi'
import { GoArrowRight } from 'react-icons/go'
import { MdNightlife } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'

export const BannerServices = () => {
   return (
      <article className="relative flex justify-center items-center">
         <div className="gradient"></div>
         <div className="absolute overflow-hidden w-full h-full">
            <Image
               fill
               src={img_PageMenu}
               alt="image banner services"
               className="w-full h-full object-cover brightness-25 grayscale"
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
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0 text-4xl">
                        <MdNightlife />
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           Eventi
                        </h2>
                        <p className="leading-relaxed text-base text-pretty">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <Link
                           href={SERVICES_PAGE}
                           className="mt-3 text-primary inline-flex items-center gap-2 hover:text-pri-300 hover:scale-105 transition-transform"
                        >
                           Learn More
                           <GoArrowRight />
                        </Link>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0 text-4xl">
                        <SiHomeassistantcommunitystore />
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           locazione di locali
                        </h2>
                        <p className="leading-relaxed text-base text-pretty">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <Link
                           href={SERVICES_PAGE}
                           className="mt-3 text-primary inline-flex items-center gap-2 hover:text-pri-300 hover:scale-105 transition-transform"
                        >
                           Learn More
                           <GoArrowRight />
                        </Link>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                     <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-darkMode text-primary mb-5 flex-shrink-0 text-4xl">
                        <BiSolidBusiness />
                     </div>
                     <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">
                           attività imprenditoriale
                        </h2>
                        <p className="leading-relaxed text-base text-pretty">
                           Blue bottle crucifix vinyl post-ironic four dollar
                           toast vegan taxidermy. Gastropub indxgo juice
                           poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <Link
                           href={SERVICES_PAGE}
                           className="mt-3 text-primary inline-flex items-center gap-2 hover:text-pri-300 hover:scale-105 transition-transform"
                        >
                           Learn More
                           <GoArrowRight />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center mt-20">
                  <LinkButton href={SERVICES_PAGE} title="Vedi Servizi" />
               </div>
            </div>
         </section>
      </article>
   )
}
