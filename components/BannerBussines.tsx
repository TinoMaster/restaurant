import { img_about_us1 } from "@/utils/images";
import Image from "next/image";

img_about_us1;
export const BannerBussines = () => {
  return (
    <article className="h-[800px] relative flex justify-center items-center">
      <div className="absolute w-full h-full">
        <Image
          src={img_about_us1}
          alt="imagen de fondo seccion azienda"
          className="w-full h-full object-cover brightness-25 grayscale"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-tr from-darkMode/80 via-darkMode/60 to-darkMode/80"></div>
      <div className="absolute container">
        <h2 className="text-2xl text-white italic text-center">
          ¿Quieres hacer negocios con nosotros?
        </h2>
        <h3 className="text-3xl text-primary italic text-center lg:text-4xl pb-10">
          ~~ Contáctanos ~~
        </h3>
        <div className="flex justify-center">
          <a
            href="https://wa.me/51959445919"
            target="_blank"
            rel="noopener noreferrer"
            className="cta inline-block mt-4 px-6 py-2 bg-primary text-white rounded"
          >
            Contáct
          </a>
        </div>
      </div>
    </article>
  );
};
