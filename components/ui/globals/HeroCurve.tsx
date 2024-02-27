import Image, { StaticImageData } from 'next/image'

interface HeroPageProps {
   children: React.ReactNode
   image: StaticImageData
}

export const HeroCurve = ({ children, image }: HeroPageProps) => {
   return (
      <section className="w-full h-[60vh] max-h-[700px] relative mb-5 bg-cover bg-center bg-no-repeat curved overflow-hidden shadow-md shadow-black">
         <article className="absolute flex justify-center items-center w-full h-full curved overflow-hidden z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/70">
            {children}
         </article>
         {image ? (
            <div className="relative w-full h-full">
               <Image
                  priority={true}
                  fill={true}
                  src={image}
                  className='object-cover'
                  alt="immagine del banner principale"
               />
            </div>
         ) : null}
      </section>
   )
}
