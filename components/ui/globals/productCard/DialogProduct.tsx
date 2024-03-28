'use client'
import { Disponibility } from '@/components/pages/profile/admin/menu/view_product/Disponibility'
import { TProduct } from '@/types/models/product'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Dialog } from '../../modals/Dialog'
import { useSession } from 'next-auth/react'

export const DialogProduct = ({ product }: { product: TProduct }) => {
   const { data: session } = useSession()
   const params = useSearchParams()
   const id = params.get('id')
   const { image, name, available } = product

   if (product._id !== id || !session?.user.isAdmin) {
      return null
   }

   return (
      <Dialog title={name} dialog="viewProduct">
         <div className="text-primary space-y-2">
            <Image
               width={200}
               height={200}
               src={image}
               alt="image"
               className="w-36 h-36 m-auto object-cover"
            />
            <div className="flex justify-center pt-5">
               <Disponibility available={available} id={id} />
            </div>
         </div>
      </Dialog>
   )
}
