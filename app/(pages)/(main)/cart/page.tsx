import { texturaCemento } from '@/utils/images'
import Image from 'next/image'

export default function CartPage() {
   return (
      <div className="w-full h-full container min-h-screen py-20 lg:py-32">
         <div className="w-full h-[70vh] min-h-[600px] bg-white/5 rounded-md flex flex-wrap relative">
            <div className="w-full lg:w-2/3 h-full space-y-5 bg-black/20 p-5 lg:p-20">
               <h3>Shopping Cart</h3>
               <div>
                  <div className="w-full flex shadow-md rounded-md items-center">
                     <Image
                        width={200}
                        height={200}
                        className="w-32 h-32 rounded-md object-cover"
                        src={texturaCemento}
                        alt="textura cemento"
                     />
                     <div className="p-2">
                        <p>Title of product</p>
                        <p className="text-sm text-gray-300">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Eaque iste dolor nemo aspernatur atque
                           consequuntur corporis voluptatem.
                        </p>
                        <p className="text-lg font-bold">Price</p>
                     </div>
                     <div className="w-32 h-full p-4">
                        <div className="bg-white/10 w-full h-full rounded-md space-y-2 overflow-hidden">
                           <button className="w-full h-full flex justify-center items-center text-lg bg-black py-1">
                              +
                           </button>
                           <small className="w-full h-full flex justify-center items-center">
                              5
                           </small>
                           <button className="w-full h-full flex justify-center items-center text-lg bg-black py-1">
                              -
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/3 h-full bg-white/5"></div>
         </div>
      </div>
   )
}
