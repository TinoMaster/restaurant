'use client'
import useCartFav from '@/context/cartFavContext'
import { changeAvailability } from '@/services/actions/product.action'
import toast from 'react-hot-toast'
import { TbArrowsExchange } from 'react-icons/tb'
export const Disponibility = ({
   available,
   id,
}: {
   available: boolean
   id: string
}) => {
   const { editProductInCartAndFavorites } = useCartFav()
   const handleDisponibility = async (id: string, available: boolean) => {
      toast.loading('Changing availability...')
      const res = await changeAvailability(id, !available)
      toast.remove()

      if (res) {
         toast.success('Availability changed')
         editProductInCartAndFavorites(id, { available: !available })
      } else {
         toast.error('Something went wrong')
      }
   }

   return (
      <div className="flex items-center gap-2">
         <p
            className={`px-3 py-1 rounded text-white text-sm ${
               available ? 'bg-green-500/40' : 'bg-red-500/40'
            }`}
         >
            {available ? 'Disponible' : 'No disponible'}
         </p>
         <button onClick={() => handleDisponibility(id, available)}>
            <TbArrowsExchange />
         </button>
      </div>
   )
}
