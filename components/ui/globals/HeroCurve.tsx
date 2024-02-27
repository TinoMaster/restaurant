import Image, { StaticImageData } from 'next/image'

interface HeroPageProps {
   children: React.ReactNode
   image: StaticImageData
}

const PLACEHOLDER_IMAGE =
   'data:image/webp;base64,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'

export const HeroCurve = ({ children, image }: HeroPageProps) => {
   return (
      <section className="w-full h-[60vh] max-h-[700px] relative mb-5 bg-cover bg-center overflow-hidden">
         <article className="absolute flex justify-center items-center w-full h-full overflow-hidden z-10 bg-gradient-to-t from-darkMode via-black/60 to-black/70">
            {children}
         </article>
         {image ? (
            <div className="relative w-full h-full">
               <Image
                  fill={true}
                  src={image}
                  className="object-cover"
                  alt="immagine del banner principale"
                  blurDataURL={PLACEHOLDER_IMAGE}
               />
            </div>
         ) : null}
      </section>
   )
}
