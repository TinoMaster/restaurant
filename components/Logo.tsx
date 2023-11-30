import Link from "next/link";
import { GiHotMeal } from "react-icons/gi";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex text-sm flex-col items-center">
      <GiHotMeal className="text-xl text-white" />
      <h1 className="text-3xl text-white">
        Noah
      </h1>
    </Link>
  );
};
