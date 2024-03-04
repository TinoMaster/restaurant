import React from "react";

export const FallbackMainInfo = () => {
  return (
    <div className="bg-white/5 grid grid-cols-4 min-h-[40vh] w-full justify-center items-center rounded-lg mb-4 gap-2 animate-pulse pb-4">
      <div className="p-10 col-span-4 lg:col-span-1 m-auto">
        <div className="w-44 h-44 rounded-full bg-white/20"></div>
      </div>
      <div className="col-span-4 lg:col-span-3 grid md:grid-cols-2 gap-4 px-5">
        <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
        <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
        <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
        <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
      </div>
    </div>
  );
};
