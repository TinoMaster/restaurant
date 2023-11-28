import Image, { StaticImageData } from "next/image";
import { MotionDiv } from "./MotionDiv";

interface MenuItemPlusImageProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  index?: number;
}

export const MenuItemPlusImage = ({
  title,
  description,
  imageSrc,
  index,
}: MenuItemPlusImageProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index ? index * 0.1 : 0 }}
      className="col-span-1"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-11/12 h-1/2 rounded overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="w-11/12 py-4">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </MotionDiv>
  );
};
