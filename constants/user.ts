import { TUser } from '@/types/models/user'

export const INITIAL_DATA_SESSION: TUser = {
   _id: '',
   name: '',
   email: '',
   image: '',
   addresses: [],
   cart: [],
   notifications: [],
   favorites: [],
   emailVerified: false,
   phoneVerified: false,
   phone: '',
   isAdmin: false,
   orders: [],
   createdAt: '',
   updatedAt: '',
   isVerified: false,
}
