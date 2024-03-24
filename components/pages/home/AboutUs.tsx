import { prenotazione } from '@/utils/images'
import { LinkButton } from '../../ui/buttons/LinkButton'
import { ImagesRotates } from './ImagesRotates'

export const AboutUs = () => {
   return (
      <article className="container flex flex-col lg:flex-row gap-10 lg:gap-0 py-20 lg:py-44 text-gray-300">
         <ImagesRotates image1={prenotazione} image2={prenotazione} />
         <section className="flex flex-col w-full lg:w-1/2 gap-2 items-center lg:items-end justify-center lg:pl-32">
            <h3 className="text-primary/80 font-bold w-full text-center lg:text-start">
               Chi Siamo
            </h3>
            <p className=" text-white w-full pb-2 italic text-center lg:text-start">
               La Nostra Storia
            </p>
            <div className="grid grid-cols-2 gap-5">
               <p className="col-span-2 text-center lg:text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore aliquam odio consequuntur temporibus suscipit,
                  ratione beatae, cupiditate, placeat explicabo est blanditiis
                  maiores. Illo modi fuga at odio vero laborum alias?
               </p>
               <p className="col-span-2 text-center lg:text-start">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore aliquam odio consequuntur temporibus suscipit,
                  ratione beatae, cupiditate, placeat explicabo est blanditiis
                  maiores. Illo modi fuga at odio vero laborum alias?
               </p>
            </div>
            <div className="w-full flex justify-center lg:justify-start py-5">
               <LinkButton title="Scopri di piu" href="/history" />
            </div>
         </section>
      </article>
   )
}
