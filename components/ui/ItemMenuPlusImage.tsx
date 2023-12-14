import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { MotionButton, MotionDiv } from "../helpers/MotionDiv";
import { texturaCemento } from "@/utils/images";

interface MenuItemPlusImageProps {
  title: string;
  price: number;
  index?: number;
}

export const MenuItemPlusImage = ({
  title,
  price,
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
          <span className="lg:text-xl text-primary font-bold text-sm">
            € {price}
          </span>
          <div className="flex gap-2 items-center">
            <button className="text-white/70 px-2 lg:text-2xl rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out">
              <IoMdHeartEmpty />
            </button>
            <MotionButton
              whileHover={{ y: [0, -5, 0, -5, 0] }}
              className="bg-primaryPal-800 text-white text-xs lg:text-base p-2 rounded-full focus:outline-none"
            >
              <FaCartArrowDown />
            </MotionButton>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
