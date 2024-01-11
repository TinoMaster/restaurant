import { useAppSelector } from '@/redux/hooks'
import { deleteAddress } from '@/services/actions/address.action'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

export const useDialogsAddress = () => {
   const searchParams = useSearchParams()
   const idParam = searchParams.get('id')
   const id = idParam ? JSON.parse(idParam) : null
   const { addresses } = useAppSelector((state) => state.userReducer)
   const address = id ? addresses.find((address) => address._id === id) : null
   const router = useRouter()

   const onDelete = async () => {
      toast.loading('Eliminando...')
      if (!id) {
         toast.dismiss()
         toast.error('No existe el la nota')
         return
      }
      const res = await deleteAddress(id)

      if (res === false) {
         toast.dismiss()
         toast.error('No se pudo eliminar')
      } else {
         toast.dismiss()
         toast.success('Se ha eliminado correctamente')
         router.push('/profile/address')
      }
   }

   return {
      address,
      onDelete,
   }
}
