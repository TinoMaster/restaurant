export const LinksSectionFallback = () => {
   return (
      <div className="container grid grid-cols-2 gap-4">
         <div className="col-span-1">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tl from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md">
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <div className="w-full h-full animate-pulse bg-slate-600/30"></div>
               </div>
               <div className="animate-pulse bg-slate-600/30 h-10 w-1/2 rounded-lg"></div>
            </div>
         </div>
         <div className="col-span-1">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tr from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md">
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <div className="w-full h-full animate-pulse bg-slate-600/30"></div>
               </div>
               <div className="animate-pulse bg-slate-600/30 h-10 w-1/2 rounded-lg"></div>
            </div>
         </div>
      </div>
   )
}
