'use server'
import { AddressesModel } from '@/app/models/Addresses'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import { TAddressCreate } from '@/types/models/address'
import { TUser } from '@/types/models/user'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export async function getAddresses() {
   try {
      const session = await getServerSession(authOptions)

      await mongoose.connect(db_config.URI as string)
      const user: TUser | null = await UserModel.findById(session?.user?.sub)
         .populate('addresses')
         .lean()

      if (!user) {
         return false
      }

      return user.addresses
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getAddress(id: string) {
   try {
      await mongoose.connect(db_config.URI as string)
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

export async function createAddress(data: TAddressCreate) {
   const session = await getServerSession(authOptions)
   try {
      const newData = {
         ...data,
         user: session?.user?.sub,
      }

      await mongoose.connect(db_config.URI as string)
      const savedAddress = await AddressesModel.create(newData)

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
      await mongoose.connect(db_config.URI as string)
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
