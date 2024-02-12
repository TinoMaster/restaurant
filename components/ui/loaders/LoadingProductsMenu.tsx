import React from 'react'

export const LoadingProductsMenu = () => {
   return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 animate-pulse w-full relative z-10">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
               <div
                  key={item}
                  className="w-full h-60 bg-gray-300/20 rounded-lg"
               ></div>
            ))}
         </div>
      </div>
   )
}
