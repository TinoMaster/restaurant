import React from 'react'

export const RenderAddressesFallback = () => {
   return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 animate-pulse w-full relative">
         <div className="items-start justify-between md:flex w-full">
            <div className="relative w-full py-3">
               <p className="w-[200px] h-5 bg-gray-200/20 rounded-md"></p>
               <p className="max-w-full w-[400px] h-5 bg-gray-200/20 rounded-md mt-5"></p>
               <p className="max-w-full w-[400px] h-5 bg-gray-200/20 rounded-md mt-2"></p>
               <button className="lg:absolute top-0 right-0 w-[100px] h-10 bg-gray-200/20 rounded-md mt-4"></button>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
               <div
                  key={item}
                  className="w-full h-24 bg-gray-200/20 rounded-lg"
               ></div>
            ))}
         </div>
      </div>
   )
}
