'use client'
import { addressProfilePageInputs } from '@/constants/forms/profiles.form'
import { useAppDispatch } from '@/redux/hooks'
import { addAddress } from '@/redux/reducers/user_slice'
import { createAddress } from '@/services/actions/address.action'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Buttom_add_new_address } from './Buttom_add_new_address'
import { InputAddNewAddress } from './Input_add_new_address'

export const FormAddAddress = () => {
   const dispatch = useAppDispatch()
   const router = useRouter()
   return (
      <form
         action={async (formData: FormData) => {
            toast.loading('Adding address...')
            const response = await createAddress(formData)
            if (!response) {
               toast.dismiss()
               toast.error('Something went wrong')
               return
            }
            const res = JSON.parse(response)
            dispatch(addAddress(res))
            toast.dismiss()
            toast.success('Address added successfully')
            router.push('/profile/address')
         }}
         className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-5 rounded-xl"
      >
         {addressProfilePageInputs.map((inp, idx) => (
            <InputAddNewAddress
               key={idx}
               type={inp.type}
               label={inp.label}
               name={inp.name}
               id={inp.id}
               placeholder={inp.placeholder}
               disabled={inp.editable ? false : true}
               value={inp.value}
            />
         ))}
         <div className="flex justify-end col-span-full">
            <Buttom_add_new_address />
         </div>
      </form>
   )
}
