import { TProduct } from '@/types/models/product'
import Image from 'next/image'
import Link from 'next/link'

interface RenderMenusProps {
   readonly _id: TProduct['_id']
   readonly name: TProduct['name']
   readonly image: TProduct['image']
}

export function ProductCard({ _id, name, image }: RenderMenusProps) {
   return (
      <Link
         href={`/profile/admin/menu/${_id}`}
         className="max-w-md w-full mx-auto bg-lightDarkMode hover:scale-105 hover:cursor-pointer transition-transform rounded-xl overflow-hidden shadow-md"
      >
         <div className="w-full h-24 lg:h-36 relative">
            <Image
               className="w-full h-full object-cover"
               fill
               src={image}
               alt={`image of ${name}`}
            />
         </div>
         <div className="p-4">
            <h2 className="font-bold mb-2 text-xs lg:text-base capitalize text-center">
               {name}
            </h2>
         </div>
      </Link>
   )
}
