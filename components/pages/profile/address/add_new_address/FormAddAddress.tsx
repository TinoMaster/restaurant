'use client'
import { addressProfilePageInputs } from '@/constants/forms/profiles.form'
import { createAddress } from '@/services/actions/address.action'
import {
   addressSchema,
   TAddressCreateZod,
} from '@/services/validators/schemas/address.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ButtomAddNewAddress } from './Buttom_add_new_address'
import { InputAddNewAddress } from './Input_add_new_address'

export const FormAddAddress = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TAddressCreateZod>({
      resolver: zodResolver(addressSchema),
   })
   const router = useRouter()

   const onSubmit: SubmitHandler<TAddressCreateZod> = async (data) => {
      console.log(data)
      toast.loading('Adding address...')
      const response = await createAddress(data)
      if (!response) {
         toast.dismiss()
         toast.error('Something went wrong')
         return
      }
      toast.dismiss()
      toast.success('Address added successfully')
      router.push('/profile/address')
   }
   console.log(errors)

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-5 rounded-xl"
      >
         {addressProfilePageInputs.map((inp) => (
            <InputAddNewAddress
               key={inp.id}
               type={inp.type}
               label={inp.label}
               name={inp.name}
               id={inp.id}
               placeholder={inp.placeholder}
               disabled={!inp.editable}
               value={inp.value}
               register={register}
               error={errors[inp.name as keyof TAddressCreateZod]?.message}
            />
         ))}
         <div className="flex justify-end col-span-full">
            <ButtomAddNewAddress />
         </div>
      </form>
   )
}
