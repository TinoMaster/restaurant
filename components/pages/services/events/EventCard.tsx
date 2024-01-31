import { img_about_us1 } from '@/utils/images'
import Image from 'next/image'
import { FaEvernote } from 'react-icons/fa'

export const EventCard = () => {
   return (
      <section className="text-gray-300/80 body-font overflow-hidden">
         <div className="container">
            <div className="flex flex-wrap py-4">
               <div className="lg:w-1/2 w-full relative lg:h-[600px] h-64 rounded-md bg-primary/10 shadow-md shadow-black/50">
                <div className='absolute inset-0 w-full h-full border-2 border-primary rounded-md'></div>
                  <Image
                     alt="ecommerce"
                     className="w-full h-full translate-x-[20px] translate-y-[20px] object-cover object-center rounded-md"
                     src={img_about_us1}
                  />
               </div>
               <div className="lg:w-1/2 w-full lg:pl-10 pt-10">
                  <h2 className="text-sm title-font text-primary tracking-widest">
                     Dance event
                  </h2>
                  <h1 className="text-white text-4xl title-font font-medium mb-1">
                     Welcome to our Events where you can find the best events
                  </h1>

                  <p className="leading-relaxed">
                     Fam locavore kickstarter distillery. Mixtape chillwave
                     tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                     fam indxgo juiceramps cornhole raw denim forage brooklyn.
                     Everyday carry +1 seitan poutine tumeric. Gastropub blue
                     bottle austin listicle pour-over, neutra jean shorts keytar
                     banjo tattooed umami cardigan.
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-8">
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEvernote className="text-primary" />
                        <p>Dance for the whole family</p>
                     </div>
                  </div>
                  <button className="flex text-white bg-pri-600 border-0 py-2 px-6 focus:outline-none hover:bg-pri-700 rounded-md">
                     View Calendar
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}
