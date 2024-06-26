import { texturaCemento } from '@/utils/images'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
   title: 'Pizzeria Albatros | Storia',
}

export default function HistoryPage() {
   return (
      <div className="mt-5 md:mt-10">
         <div className="italian-restaurant-story text-white rounded-md shadow-lg container">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
               Historia del Restaurante Italiano
            </h2>
            <div className="w-full h-96">
               <Image
                  src={texturaCemento}
                  alt="map"
                  className="w-full h-full object-cover py-4 m-auto rounded-md"
               />
            </div>
            {[...Array(2)].map((i) => (
               <p
                  key={i}
                  className="mb-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-pretty leading-relaxed text-gray-200"
               >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  accusantium corrupti eligendi rem. Tempore fugit mollitia amet
                  beatae. Non quisquam corporis modi amet illo facilis minima,
                  maiores neque nobis earum.
               </p>
            ))}
         </div>
      </div>
   )
}
