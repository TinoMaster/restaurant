import { img_about_us1, img_about_us2 } from "@/utils/images";
import { ImagesRotates } from "./ImagesRotates";
import { LinkButton } from "./buttons/LinkButton";

export const AboutUs = () => {
  return (
    <article className="container flex flex-col lg:flex-row gap-10 lg:gap-0 py-20 lg:py-44">
      <ImagesRotates image1={img_about_us1} image2={img_about_us2} />
      <section className="flex flex-col w-full lg:w-1/2 gap-2 items-center lg:items-start justify-center">
        <p className="text-primary/50 text-center w-full">Chi Siamo</p>
        <h3 className="italic text-primary w-full text-center pb-2">
           La Nostra Storia
        </h3>
        <p className="text-slate-300 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          aliquam odio consequuntur temporibus suscipit, ratione beatae,
          cupiditate, placeat explicabo est blanditiis maiores. Illo modi fuga
          at odio vero laborum alias? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Inventore aliquam odio consequuntur temporibus
          suscipit, ratione beatae, cupiditate, placeat explicabo est blanditiis
          maiores. Illo modi fuga at odio vero laborum alias?
        </p>
        <p className="text-slate-300 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          aliquam odio consequuntur temporibus suscipit, ratione beatae,
          cupiditate, placeat explicabo est blanditiis maiores. Illo modi fuga
          at odio vero laborum alias? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Inventore aliquam odio consequuntur temporibus
          suscipit, ratione beatae, cupiditate, placeat explicabo est blanditiis
          maiores. Illo modi fuga at odio vero laborum alias?
        </p>
        <div className="w-full flex justify-center py-5">
          <LinkButton title="Scopri di piu" href="/history" />
        </div>
      </section>
    </article>
  );
};
