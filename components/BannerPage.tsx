import Image, { StaticImageData } from "next/image";

interface BannerPageProps {
  children: React.ReactNode;
  imagemovil: StaticImageData;
  imageDesktop: StaticImageData;
}

export const BannerPage = ({
  children,
  imagemovil,
  imageDesktop,
}: BannerPageProps) => {
  return (
    <section className="w-full h-[60vh] lg:h-[70vh] max-h-[600px] relative">
      <article className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50 z-10">
        {children}
      </article>

      <div className="absolute w-full h-full bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
      <Image
        priority={true}
        className="w-auto h-full object-cover md:hidden"
        src={imagemovil}
        alt="immagine di sfondo del banner principale"
      />
      <Image
        priority={true}
        className="w-full h-full object-cover hidden md:block"
        src={imageDesktop}
        alt="immagine di sfondo del banner principale"
      />
    </section>
  );
};
