'use server'
import '@/app/models/Ingredients'
import '@/app/models/Products'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { TResponseProductInCartPopulated } from '@/types/models/product'
import { TUser, TUserMainInfo, TUserMainInfoToEdit } from '@/types/models/user'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'

export async function getUser(id: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const user: TUser | null = (await UserModel.findById(id).populate({
         path: 'cart',
         populate: { path: 'productId' },
      })) as TUser

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
      await mongoose.connect(db_config.URI as string)
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
      await mongoose.connect(db_config.URI as string)
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

export async function updateUser(id: string, data: TUserMainInfoToEdit) {
   try {
      await mongoose.connect(db_config.URI as string)
      const user: TUser | null = await UserModel.findByIdAndUpdate(id, data, {
         new: true,
      })
      console.log(user)
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function ChangeAdminRole(id: string, isAdmin: boolean) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(id, { isAdmin })
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getProductsCart(userId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const productsCart = await UserModel.findById(userId)
         .select('cart')
         .populate({
            path: 'cart',
            populate: { path: 'productId' },
         })

      if (!productsCart) {
         return false
      }

      return formatServerResponse<TResponseProductInCartPopulated>(productsCart)
   } catch (error) {
      console.log(error)
      return false
   }
}
