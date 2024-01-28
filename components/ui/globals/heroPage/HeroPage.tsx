import Image, { StaticImageData } from 'next/image'

interface HeroPageProps {
   children: React.ReactNode
   imagemovil?: StaticImageData
   imageDesktop?: StaticImageData
}

export const HeroPage = ({
   children,
   imagemovil,
   imageDesktop,
}: HeroPageProps) => {
   return (
      <section className="w-full h-[60vh] lg:h-[80vh] max-h-[700px] relative">
         <article className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50 z-10">
            {children}
         </article>
         {imagemovil && imageDesktop ? (
            <>
               <div className="absolute w-full h-full bg-gradient-to-t from-black/30 via-transparent to-black/70"></div>
               <Image
                  priority={true}
                  className="w-full h-full object-cover md:hidden"
                  src={imagemovil}
                  alt="immagine del banner principale"
               />
               <Image
                  priority={true}
                  className="w-full h-full object-cover hidden md:block"
                  src={imageDesktop}
                  alt="immagine del banner principale"
               />
            </>
         ) : (
            <div className="w-full h-full object-cover bg-gradient-to-t from-darkMode via-pri-400/30 to-darkMode"></div>
         )}
      </section>
   )
}
