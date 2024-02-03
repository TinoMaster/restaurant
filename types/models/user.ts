import { TAddress } from './address'
import { TNotification } from './notification'
import { TOrder } from './order'
import { TProduct, TProductInCart } from './product'

export interface TUserSession {
   name?: string | null
   email?: string | null
   image?: string | null
   [key: string]: any
}

export interface TUser {
   _id: string
   name: string
   email: string
   phone: string
   addresses: TAddress[]
   image: string
   isAdmin: boolean
   isVerified: boolean
   emailVerified: boolean
   phoneVerified: boolean
   orders: TOrder[]
   cart: TProductInCart[]
   favorites: TProduct['_id'][]
   notifications: TNotification[]
   createdAt: string
   updatedAt: string
   [key: string]: any
}

export interface TCreateAdminUserForTest
   extends Pick<
      TUser,
      | 'name'
      | 'isAdmin'
      | 'email'
      | 'password'
      | 'phone'
      | 'phoneVerified'
      | 'emailVerified'
   > {}

export interface TUserRegister {
   name: string
   email: string
   password: string
}

export interface TUserMainInfo
   extends Pick<TUser, 'name' | 'email' | 'phone' | 'image'> {
   [key: string]: string
}

export interface TDataUserToUpdate {
   name: string
   email: string
   phone: string
   [key: string]: any
}
