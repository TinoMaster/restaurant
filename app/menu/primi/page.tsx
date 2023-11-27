import { MenuItemPlusImage } from "@/components/ItemMenuPlusImage";
import { img_about_us1 } from "@/utils/images";
import React from "react";

export default function PrimiPlateSectionMenu() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <MenuItemPlusImage
        title="Plato 1"
        description="Esto es una prueba de un menu el cual estoy inventando ahora mismo y quiero saber que tal queda"
        imageSrc={img_about_us1}
      />
      <MenuItemPlusImage
        title="Plato 1"
        description="Esto es una prueba de un menu el cual estoy inventando ahora mismo y quiero saber que tal queda"
        imageSrc={img_about_us1}
      />
      <MenuItemPlusImage
        title="Plato 1"
        description="Esto es una prueba de un menu el cual estoy inventando ahora mismo y quiero saber que tal queda"
        imageSrc={img_about_us1}
      />
      <MenuItemPlusImage
        title="Plato 1"
        description="Esto es una prueba de un menu el cual estoy inventando ahora mismo y quiero saber que tal queda"
        imageSrc={img_about_us1}
      />
    </div>
  );
}
