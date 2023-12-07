import { preferMenuData } from "../constants/Menu.data";
import { ItemMenu } from "./ItemMenu";
import { LinkButton } from "./buttons/LinkButton";
import { BrokeBackground } from "./backgrounds/BrokeBackground";
import { MenuItemPlusImage } from "./ItemMenuPlusImage";
import { img_about_us1 } from "@/utils/images";

export const PreferMenu = () => {
  return (
    <section className="py-20 lg:py-44 px-2 z-10 bg-lightDarkMode text-slate-100 relative flex flex-col items-center justify-center">
      <BrokeBackground />
      <h6 className="text-primary/80 font-bold text-center w-full">Menu</h6>
      <h3 className="italic text-white pb-10">Il Vostro Preferito</h3>
      <article className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:p-10 py-5">
          {preferMenuData.slice(0, 3).map((item, index) => (
            <MenuItemPlusImage
              key={index}
              index={index}
              title={item.name}
              price={item.price}
              imageSrc={img_about_us1}
            />
          ))}
          {preferMenuData.slice(0, 3).map((item, index) => (
            <MenuItemPlusImage
              key={index}
              index={index}
              title={item.name}
              price={item.price}
              imageSrc={img_about_us1}
            />
          ))}
        </div>
      </article>
      <div className="flex justify-center pt-20">
        <LinkButton href="/menu" title="Vedi Menu" />
      </div>
    </section>
  );
};
