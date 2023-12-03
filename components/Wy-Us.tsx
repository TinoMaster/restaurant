import { RiMapPinTimeLine } from "react-icons/ri";
import { GiStaryu } from "react-icons/gi";

export const Wy_US = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-white px-2">
        Scopri La Nostra Essenza
      </h2>
      <p className="text-white text-3xl">
        ★★★★★
      </p>
      <div className="flex w-full justify-around gap-2 py-3">
        {/* Experience */}
        <div className="flex flex-col lg:flex-row w-1/2 items-center border-r border-primaryPal-200 gap-3 lg:gap-0">
          <div className="text-5xl flex justify-center items-center rounded-full">
            <RiMapPinTimeLine className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-gradient-to-l from-primary to-darkMode text-slate-300" />
          </div>
          <div className="text-center">
            <h3 className="py-1 italic">Experience</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit
            </p>
          </div>
        </div>
        {/* Qualita */}
        <div className="flex flex-col-reverse lg:flex-row w-1/2 justify-center items-center border-l border-primaryPal-200 gap-3 lg:gap-0">
          <div className="text-center">
            <h3 className="py-1 italic">Qualita</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit{" "}
            </p>
          </div>
          <div className="text-5xl flex justify-center items-center rounded-full">
            <GiStaryu className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-gradient-to-l from-darkMode to-primary text-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
