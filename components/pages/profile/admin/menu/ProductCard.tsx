import { TProduct } from '@/types/models/product'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'

interface RenderMenusProps {
   product: TProduct
}

export function ProductCard({ product }: RenderMenusProps) {
   return (
      <div className="max-w-md mx-auto bg-lightDarkMode rounded-xl overflow-hidden shadow-md">
         <Image
            className="w-full h-36 object-cover"
            width={500}
            height={500}
            src={texturaCemento}
            alt={`image of ${product.name}`}
         />
         <div className="p-4">
            <h2 className="font-bold mb-2 text-base">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
            <p className="text-gray-100 font-bold text-base mb-2">
               ${product.price}
            </p>
         </div>
      </div>
   )
}
