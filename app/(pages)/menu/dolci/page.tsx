import { MenuItemPlusImage } from "@/components/ItemMenuPlusImage";
import { preferMenuData } from "@/constants/Menu.data";

export default function DolciSectionMenu() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {preferMenuData.map((plate, index) => (
        <MenuItemPlusImage
          key={index}
          index={index}
          title={plate.name}
          price={plate.price}
        />
      ))}
    </div>
  );
}