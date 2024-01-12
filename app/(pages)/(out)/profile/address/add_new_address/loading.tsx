export default function LoadingSkeletonProfile() {
   return (
      <div className="max-w-screen-xl h-full flex flex-col mx-auto px-4 py-5 md:px-8 animate-pulse">
         <p className="w-[200px] h-10 bg-gray-200/20 rounded-md"></p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative w-full py-10">
            <p className="w-full h-10 bg-white/10 rounded-md"></p>
            <p className="w-full h-10 bg-white/10 rounded-md"></p>
            <p className="w-full h-10 bg-white/10 rounded-md"></p>
            <p className="w-full h-10 bg-white/10 rounded-md"></p>
            <p className="w-full h-10 bg-white/10 rounded-md"></p>
         </div>
         <div className="w-full h-full bg-white/5 rounded-md"></div>
      </div>
   )
}
