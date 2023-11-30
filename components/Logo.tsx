import Link from "next/link";
import { GiHotMeal } from "react-icons/gi";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex text-sm flex-col items-center p-3 rounded-full">
      <GiHotMeal className="text-lg text-white" />
      <h1 className="text-xl text-white">
        Noah
      </h1>
    </Link>
  );
};
