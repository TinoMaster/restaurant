'use client'
import { addressProfilePageInputs } from '@/constants/forms/profiles.form'
import { createAddress } from '@/services/actions/address.action'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { ButtomAddNewAddress } from './Buttom_add_new_address'
import { InputAddNewAddress } from './Input_add_new_address'

/* //TODO: Add validation and add update form */
export const FormAddAddress = () => {
   const router = useRouter()

   const onSubmit = async (formData: FormData) => {
      toast.loading('Adding address...')
      const response = await createAddress(formData)
      if (!response) {
         toast.dismiss()
         toast.error('Something went wrong')
         return
      }
      toast.dismiss()
      toast.success('Address added successfully')
      router.push('/profile/address')
   }

   return (
      <form
         action={onSubmit}
         className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-5 rounded-xl"
      >
         {addressProfilePageInputs.map((inp, idx) => (
            <InputAddNewAddress
               key={inp.id}
               type={inp.type}
               label={inp.label}
               name={inp.name}
               id={inp.id}
               placeholder={inp.placeholder}
               disabled={!inp.editable}
               value={inp.value}
            />
         ))}
         <div className="flex justify-end col-span-full">
            <ButtomAddNewAddress />
         </div>
      </form>
   )
}
