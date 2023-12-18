import React from "react";

export const LoadingMainInfo = () => {
  return (
    <div className="grid grid-cols-4 justify-center items-center -translate-y-5 gap-10 md:gap-0 animate-pulse">
      <div className="flex justify-center items-center col-span-4 md:col-span-1">
        <div className="w-44 h-44 border border-primary relative rounded-full flex justify-center items-center bg-white/20"></div>
      </div>
      <div className="col-span-4 md:col-span-3">
        <h3 className="text-3xl mb-5">User Info</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <span className="font-bold text-gray-300/80 text-sm ml-1">-</span>
            <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg space-y-2"></div>
          </div>
          <div className="col-span-1 space-y-2">
            <span className="font-bold text-gray-300/80 text-sm ml-1">-</span>
            <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg space-y-2"></div>
          </div>
          <div className="col-span-1 space-y-2">
            <span className="font-bold text-gray-300/80 text-sm ml-1">-</span>
            <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg space-y-2"></div>
          </div>
          <div className="col-span-1 space-y-2">
            <span className="font-bold text-gray-300/80 text-sm ml-1">-</span>
            <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg space-y-2"></div>
          </div>
        </div>
      </div>
      {/* Buttons box */}
      <div className="col-span-4 flex justify-end pt-5">
        <button className="py-2 px-8 bg-white/5 rounded-lg text-white">
          ------
        </button>
      </div>
    </div>
  );
};
