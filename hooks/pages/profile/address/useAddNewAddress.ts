import { ADDRESS_PATH } from '@/constants/routes.api'
import { ADDRESSES_PANEL } from '@/constants/routes.app'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addAddress } from '@/redux/reducers/user_slice'
import { address } from '@/services/address'
import { TAddress, TAddressCreate } from '@/types/models/address'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useAddNewAddress = () => {
   const router = useRouter()
   const { _id } = useAppSelector((state) => state.userReducer)
   const dispatch = useAppDispatch()

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      toast.loading('Adding address...')
      const formData = new FormData(e.currentTarget)

      const data: TAddressCreate = {
         name: formData.get('name') as string,
         city: (formData.get('city') as string) ?? 'Francavilla al mare',
         street: formData.get('street_address') as string,
         country: (formData.get('country') as string) ?? 'Italia',
         postal_code: formData.get('postal_code') as string,
         user: _id,
      }

      const response = await address.createAddress(ADDRESS_PATH, data)

      if (!response.success) {
         toast.dismiss()
         toast.error(response.message)
      }

      if (response.success) {
         toast.dismiss()
         toast.success('Address added successfully')
         dispatch(addAddress(response.data as TAddress))
         router.push(ADDRESSES_PANEL)
      }
   }

   return { handleSubmit }
}
