export default function LoadingSkeletonProfile() {
   return (
      <div className="flex flex-col items-center w-full h-full animate-pulse">
         {/* Skeleton del banner que ocupa el 60% de la altura visible (vh) */}
         <div className="bg-white/5 h-[40vh] w-full mb-4 flex gap-2 justify-center items-center animate-pulse">
            <div className="p-10">
               <div className="w-44 h-44 rounded-full bg-white/20"></div>
            </div>
            <div className="grow grid md:grid-cols-2 gap-4 px-5">
               <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
               <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
               <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
               <div className="w-full h-10 bg-white/20 col-span-1 rounded-lg"></div>
            </div>
         </div>

         {/* Skeleton del contenido debajo del banner */}
         <div className="rounded-tr-[60px] relative -translate-y-8 bg-lightDarkMode w-full h-[40vh] max-h-[600px]">
            {/* Contenido del esqueleto (puede estar vacío ya que es solo un esqueleto) */}
         </div>
      </div>
   )
}
