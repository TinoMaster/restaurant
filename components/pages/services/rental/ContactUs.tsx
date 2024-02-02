
export const ContactUs = () => {
   return (
      <section className="relative overflow-hidden py-28 px-4 bg-darkMode/10 md:px-8">
         <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-600 to-gray-200 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
         <div className="max-w-xl mx-auto text-center relative">
            <div className="py-4">
               <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                  Get Unlimited Access To All Templates
               </h3>
               <p className="text-gray-300 leading-relaxed mt-3">
                  Nam erat risus, sodales sit amet lobortis ut, finibus eget
                  metus. Cras aliquam ante ut tortor posuere feugiat. Duis
                  sodales nisi id porta lacinia.
               </p>
            </div>
            <div className="mt-5 items-center justify-center gap-3 sm:flex">
               <a
                  href="javascript:void()"
                  className="block w-full mt-2 py-2.5 px-8 text-gray-100 bg-pri-600 rounded-md duration-150 hover:bg-pri-700 sm:w-auto"
               >
                  Try It Out
               </a>
               <a
                  href="javascript:void()"
                  className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
               >
                  Get Started
               </a>
            </div>
         </div>
      </section>
   )
}
