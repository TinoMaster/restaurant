interface HeroPageProps {
   children: React.ReactNode
}

export const HeroCurve = ({ children }: HeroPageProps) => {
   return (
      <section
         style={{ backgroundImage: 'url(/images/portadaMenu.jpeg)' }}
         className="w-full h-[60vh] max-h-[700px] relative mb-5 bg-cover bg-center bg-no-repeat curved overflow-hidden"
      >
         <article className="absolute flex justify-center items-center w-full h-full curved overflow-hidden z-10 bg-gradient-to-t from-black/80 to-black/90 ">
            {children}
         </article>
      </section>
   )
}
