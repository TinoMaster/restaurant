'use server'
import { AddressesModel } from '@/app/models/Addresses'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { InputsAddress } from '@/constants/forms/profiles.form'
import { authOptions } from '@/libs/authOptions'
import { TAddressCreate } from '@/types/models/address'
import { TUser } from '@/types/models/user'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export async function getAddresses() {
   const session = await getServerSession(authOptions)

   try {
      await mongoose.connect(db_config.URI)
      const user: TUser | null = await UserModel.findById(session?.user?.sub)
         .populate('addresses')
         .lean()

      if (user) {
         return user.addresses
      }

      return false
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getAddress(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      const address = await AddressesModel.findById(id)

      if (!address) {
         return false
      }

      return address
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function createAddress(formData: FormData) {
   const session = await getServerSession(authOptions)
   try {
      const address: TAddressCreate = {
         name: formData.get(InputsAddress.NAME) as string,
         street: formData.get(InputsAddress.STREET) as string,
         country: (formData.get(InputsAddress.COUNTRY) as string) ?? 'Italia',
         city:
            (formData.get(InputsAddress.CITY) as string) ??
            'Francavilla al mare',
         postal_code: formData.get(InputsAddress.POSTAL_CODE) as string,
         user: session?.user?.sub as string,
      }

      await mongoose.connect(db_config.URI)
      const savedAddress = await AddressesModel.create(address)

      if (!savedAddress) {
         throw new Error('Failed to save address')
      }

      const saveInUser = await UserModel.findOneAndUpdate(
         { _id: session?.user?.sub },
         { $push: { addresses: savedAddress._id } },
         { new: true }
      )

      if (!saveInUser) {
         throw new Error('Failed to save address in user')
      }
      revalidatePath('/profile/address')
      return JSON.stringify(savedAddress)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function deleteAddress(id: string) {
   const session = await getServerSession(authOptions)
   try {
      await mongoose.connect(db_config.URI)
      await UserModel.findOneAndUpdate(
         { _id: session?.user?.sub },
         { $pull: { addresses: id } }
      )
      await AddressesModel.deleteOne({ _id: id })
      revalidatePath('/profile/address')
   } catch (error) {
      console.log(error)
      return false
   }
}
