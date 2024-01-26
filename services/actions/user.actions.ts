'use server'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { TUser, TUserMainInfo } from '@/types/models/user'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'

export async function getUser(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      const user: TUser | null = await UserModel.findById(id)

      if (!user) {
         return false
      }

      return formatServerResponse<TUser>(user)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getUserInfo(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      const userInfo: TUserMainInfo | null = (await UserModel.findById(
         id
      ).select('name email phone image -_id')) as TUserMainInfo

      if (!userInfo) {
         return false
      }

      return formatServerResponse<TUserMainInfo>(userInfo)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getFavorites(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      const favorites = await UserModel.findById(id)
         .select('favorites')
         .populate({
            path: 'favorites',
            populate: { path: 'ingredients' },
         })

      if (!favorites) {
         return false
      }

      return formatServerResponse(favorites)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function updateUser(id: string, data: TUser) {
   try {
      await mongoose.connect(db_config.URI)
      const user: TUser | null = await UserModel.findByIdAndUpdate(id, data, {
         new: true,
      })
      console.log(user)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function ChangeAdminRole(id: string, isAdmin: boolean) {
   try {
      await mongoose.connect(db_config.URI)
      await UserModel.findByIdAndUpdate(id, { isAdmin })
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}
