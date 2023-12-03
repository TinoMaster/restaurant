import { MenuItemPlusImage } from "@/components/ItemMenuPlusImage";
import { TitleTypeMenu } from "@/components/TitleTypeMenu";
import { img_about_us1 } from "@/utils/images";
import React from "react";

export default function PrimiPlateSectionMenu() {
  const array = [...Array(4)];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {array.map((_, index) => (
        <MenuItemPlusImage
          key={index}
          index={index}
          title="Plato 1"
          description="Esto es una prueba de un menu el cual estoy inventando ahora mismo y quiero saber que tal queda"
          imageSrc={img_about_us1}
        />
      ))}
    </div>
  );
}
