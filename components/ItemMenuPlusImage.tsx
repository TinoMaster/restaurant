import Image, { StaticImageData } from "next/image";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MotionButton, MotionDiv } from "./MotionDiv";
import { texturaCemento } from "@/utils/images";

interface MenuItemPlusImageProps {
  title: string;
  price: number;
  imageSrc: StaticImageData;
  index?: number;
}

export const MenuItemPlusImage = ({
  title,
  price,
  imageSrc,
  index,
}: MenuItemPlusImageProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index ? index * 0.1 : 0 }}
      whileHover={{
        scale: 1.01,
        transition: { delay: 0, duration: 0.2, type: "spring" },
        cursor: "pointer",
      }}
      className="col-span-1 max-w-md mx-auto bg-lightDarkMode rounded-xl overflow-hidden shadow-md"
    >
      <div className="w-full h-56 flex justify-center items-center relative">
        <Image
          className="w-full h-full lg:h-56 object-cover absolute"
          src={texturaCemento}
          alt="imagen fondo del plato"
        />
        <div className="w-32 h-32 lg:w-44 lg:h-44 bg-primary/30 rounded-full z-10"></div>
      </div>
      <div className="p-2 lg:p-4">
        <h2 className="text-base lg:text-xl text-primary">{title}</h2>
        <p className="text-gray-300 text-sm lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          aspernatur pariatur.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="lg:text-xl text-primary font-bold">${price}</span>
          <div className="flex gap-2 items-center">
            <button className="text-white/70 px-2 text-2xl rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out">
              <IoMdHeartEmpty />
            </button>
            <MotionButton
              whileHover={{ y: [0, -5, 0, -5, 0] }}
              className="bg-primaryPal-800 text-white p-2 rounded-full focus:outline-none"
            >
              <FaCartArrowDown />
            </MotionButton>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

{
  /* <MotionDiv
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: index ? index * 0.1 : 0 }}
  className="col-span-1 bg-lightDarkMode shadow-md p-5 rounded-md m-auto"
>
  <div className="flex flex-col items-center">
    <div className="w-[250px] rounded overflow-hidden">
      <Image
        className="h-full w-full object-cover"
        src={imageSrc}
        alt={title}
      />
    </div>
    <div className="w-11/12 py-4">
      <p className="mb-2 text-gray-300 opacity-50 font-bold text-lg">
        {price}
      </p>
      <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">
        {title}
      </div>
    </div>
  </div>
</MotionDiv> */
}
