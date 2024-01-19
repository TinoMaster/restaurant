import { RiMapPinTimeLine } from 'react-icons/ri'
import { GiStaryu } from 'react-icons/gi'

export const Wy_US = () => {
   return (
      <div className="flex flex-col items-center text-white font-serif">
         <h2 className="text-pri-300 px-2 text-center font-light">
            Scopri La Nostra Essenza
         </h2>
         <p className="text-pri-200 text-3xl">★★★★★</p>
         <div className="flex flex-wrap w-full items-center space-y-10 sm:space-y-0 py-10 lg:py-0 lg:pb-10">
            {/* Experience */}
            <div className="flex flex-col w-full lg:flex-row sm:w-1/2 items-center gap-3 lg:gap-0">
               <div className="text-5xl flex justify-center items-center rounded-full">
                  <RiMapPinTimeLine className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full border border-primary/50 shadow-lg shadow-pri-400/10 text-pri-300" />
               </div>
               <div className="text-center">
                  <h3 className="py-1 text-pri-300 italic">Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Inventore dignissimos praesentium atque, fugit sint
                     voluptatem! Impedit
                  </p>
               </div>
            </div>
            {/* Qualita */}
            <div className="flex flex-col-reverse lg:flex-row w-full sm:w-1/2 justify-center items-center gap-3 lg:gap-0">
               <div className="text-center">
                  <h3 className="py-1 italic text-pri-300">Qualita</h3>
                  <p className="text-gray-300 leading-relaxed">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Inventore dignissimos praesentium atque, fugit sint
                     voluptatem! Impedit{' '}
                  </p>
               </div>
               <div className="text-5xl flex justify-center items-center rounded-full">
                  <GiStaryu className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full border border-primary/50 shadow-lg shadow-pri-400/10 text-pri-300" />
               </div>
            </div>
         </div>
      </div>
   )
}
