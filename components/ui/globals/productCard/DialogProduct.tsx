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
   const { image, available } = product

   if (product._id !== id || !session?.user.isAdmin) {
      return null
   }

   return (
      <Dialog title="Cambiare disponibilità" dialog="viewProduct">
         <div className="text-primary w-full flex justify-between">
            <Image
               width={200}
               height={200}
               src={image}
               alt="image"
               className="w-24 h-24 m-auto object-cover"
            />
            <div className="flex grow justify-end pt-5">
               <Disponibility available={available} id={id} />
            </div>
         </div>
      </Dialog>
   )
}
