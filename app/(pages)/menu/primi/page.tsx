import { MenuItemPlusImage } from "@/components/ItemMenuPlusImage";
import { preferMenuData } from "@/constants/Menu.data";
import { img_about_us1 } from "@/utils/images";
import React from "react";

export default function PrimiPlateSectionMenu() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {preferMenuData.map((plate, index) => (
        <MenuItemPlusImage
          key={index}
          index={index}
          title={plate.name}
          price={plate.price}
          imageSrc={img_about_us1}
        />
      ))}
    </div>
  );
}
