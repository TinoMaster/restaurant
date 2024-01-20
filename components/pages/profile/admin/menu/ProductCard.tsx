import { TProduct } from '@/types/models/product'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

interface RenderMenusProps {
   _id: TProduct['_id']
   name: TProduct['name']
   image: TProduct['image']
}

export function ProductCard({ _id, name, image }: RenderMenusProps) {
   return (
      <Link
         href={`/profile/admin/menu/${_id}`}
         className="max-w-md mx-auto bg-lightDarkMode hover:scale-105 hover:cursor-pointer transition-transform rounded-xl overflow-hidden shadow-md"
      >
         <Image
            className="w-full h-24 lg:h-36 object-cover"
            width={500}
            height={500}
            src={texturaCemento}
            alt={`image of ${name}`}
         />
         <div className="p-4">
            <h2 className="font-bold mb-2 text-xs lg:text-base capitalize text-center">
               {name}
            </h2>
         </div>
      </Link>
   )
}
