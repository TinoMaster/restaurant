import Image, { StaticImageData } from 'next/image'

interface HeroPageProps {
   children: React.ReactNode
   imagemovil?: StaticImageData
   imageDesktop?: StaticImageData
}

export const HeroCurve = ({
   children,
   imagemovil,
   imageDesktop,
}: HeroPageProps) => {
   return (
      <section className="w-full h-[70vh] max-h-[700px] relative mb-5 bg-cover bg-center bg-no-repeat curved overflow-hidden shadow-md shadow-black">
         <article className="absolute flex justify-center items-center w-full h-full curved overflow-hidden z-10 bg-gradient-to-t from-black/80 via-black/60 to-black/70">
            {children}
         </article>
         {imagemovil && imageDesktop ? (
            <>
               <Image
                  width={500}
                  height={500}
                  priority={true}
                  className="w-full h-full object-cover md:hidden"
                  src={imagemovil}
                  alt="immagine del banner principale"
               />
               <Image
                  width={1000}
                  height={1000}
                  priority={true}
                  className="w-full h-full object-cover hidden md:block"
                  src={imageDesktop}
                  alt="immagine del banner principale"
               />
            </>
         ) : null}
      </section>
   )
}
