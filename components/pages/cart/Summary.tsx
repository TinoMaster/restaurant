'use client'

export const Summary = () => {
   return (
      <div className="w-full h-full p-5 bg-white/5 rounded-md">
         <h3 className="text-3xl text-center">Summary</h3>
         <div className="py-5 text-xl">
            <div className="flex justify-between">
               <p>Subtotal</p>
               <p>$ 100</p>
            </div>
            <div className="flex justify-between">
               <p>Shipping</p>
               <p>$ 100</p>
            </div>
         </div>
         <div className="flex justify-between text-2xl">
            <p className="font-bold">Total</p>
            <p>$ 100</p>
         </div>
         <button className="w-full h-10 bg-black text-white rounded-md mt-5">
            Checkout
         </button>
      </div>
   )
}
