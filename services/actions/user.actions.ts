'use server'
import '@/app/models/Ingredients'
import '@/app/models/Products'
import { UserModel } from '@/app/models/User'
import { db_config } from '@/config/db.config'
import { authOptions } from '@/libs/authOptions'
import {
   TFavoritesResponse,
   TFavoritesResponseIds,
   TProductInCart,
   TProductInCartPopulated,
   TResponseProductInCartPopulated,
   TResponseProductInCartPopulatedIds,
} from '@/types/models/product'
import { TUser, TUserMainInfo, TUserMainInfoToEdit } from '@/types/models/user'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

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
      ).select(
         'name email phone image emailVerified phoneVerified -_id'
      )) as TUserMainInfo

      if (!userInfo) {
         return false
      }

      return formatServerResponse<TUserMainInfo>(userInfo)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getFavoritesId() {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }

      await mongoose.connect(db_config.URI as string)
      const favorites = await UserModel.findById(session?.user?.sub).select(
         'favorites'
      )

      if (!favorites) {
         return false
      }

      return formatServerResponse<TFavoritesResponseIds>(favorites)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getFavorites() {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }

      await mongoose.connect(db_config.URI as string)
      const favorites = await UserModel.findById(session?.user?.sub)
         .select('favorites')
         .populate({
            path: 'favorites',
            populate: { path: 'ingredients' },
         })

      if (!favorites) {
         return false
      }

      return formatServerResponse<TFavoritesResponse>(favorites)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getProductsCartIds() {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }

      await mongoose.connect(db_config.URI as string)
      const cart = await UserModel.findById(session?.user?.sub).select('cart')

      if (!cart) {
         return false
      }

      return formatServerResponse<TResponseProductInCartPopulatedIds>(cart)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getProductsCart() {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }

      await mongoose.connect(db_config.URI as string)
      const cart = await UserModel.findById(session?.user?.sub)
         .select('cart')
         .populate({
            path: 'cart',
            populate: { path: 'productId', populate: { path: 'ingredients' } },
         })

      if (!cart) {
         return false
      }

      return formatServerResponse<TResponseProductInCartPopulated>(cart)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function AddOrRemoveOneMoreProductToCart(
   userId: string,
   productId: string,
   quantity: number
) {
   try {
      await mongoose.connect(db_config.URI as string)
      const user = await UserModel.findById(userId)

      const productIndex = user.cart.findIndex(
         (item: TProductInCart) => item.productId.toString() === productId
      )

      if (productIndex !== -1) {
         user.cart[productIndex].quantity = quantity

         await user.save()
      }
      return true
   } catch (error) {
      console.log(error)
      return false
   } finally {
      revalidatePath('/cart/checkout')
   }
}

export async function getAmountCartAndFavs() {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }
      await mongoose.connect(db_config.URI as string)
      const amount = await UserModel.findById(session.user.sub).select(
         'favorites cart'
      )
      return {
         favorites: amount?.favorites.length ?? 0,
         cart: amount?.cart.length ?? 0,
      }
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getTotalSummaryFromCart(userId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const cart = await UserModel.findById(userId)
         .select('cart')
         .populate({
            path: 'cart',
            populate: { path: 'productId' },
         })

      const totalSummary = cart?.cart.reduce(
         (acc: number, item: TProductInCartPopulated) => {
            return acc + item.productId.price * (item.quantity ?? 1)
         },
         0
      )

      return totalSummary
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function updateUser(data: TUserMainInfoToEdit) {
   try {
      const session = await getServerSession(authOptions)

      if (!session) {
         return false
      }

      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(session?.user?.sub, data, {
         new: true,
      })
      revalidatePath('/profile/user_info')
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
