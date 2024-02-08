import { INITIAL_DATA_SESSION } from '@/constants/user'
import { TAddress } from '@/types/models/address'
import { TProductInCart, TProductInCartPopulated } from '@/types/models/product'
import { TDataUserToUpdate, TUser } from '@/types/models/user'
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TUserActions {
   login: (payload: TUser) => Action
   logout: () => Action
   updateMainInfo: (payload: Pick<TUser, 'name' | 'email' | 'phone'>) => Action
   updateImage: (payload: string) => Action
   updateVerificationEmail: (payload: boolean) => Action
   updateVerificationPhone: (payload: boolean) => Action
   updateRole: (payload: boolean) => Action
   addFavorite: (payload: string) => Action
   removeFavorite: (payload: string) => Action
   addAddress: (payload: TAddress) => Action
   addToCart: (payload: TProductInCart) => Action
   removeFromCart: (payload: string) => Action
   addQuantityOfOneProduct: (payload: string) => Action
   removeQuantityOfOneProduct: (payload: string) => Action
}

export const userSlice = createSlice({
   name: 'user',
   initialState: INITIAL_DATA_SESSION,
   reducers: {
      login: (state, action: PayloadAction<TUser>) => {
         state._id = action.payload._id
         state.name = action.payload.name
         state.email = action.payload.email
         state.image = action.payload.image
         state.emailVerified = action.payload.emailVerified
         state.isAdmin = action.payload.isAdmin
         state.isVerified = action.payload.isVerified
         state.phone = action.payload.phone
         state.phoneVerified = action.payload.phoneVerified
         state.addresses = action.payload.addresses
         state.favorites = action.payload.favorites
         state.orders = action.payload.orders
         state.cart = action.payload.cart
         state.notifications = action.payload.notifications
         state.createdAt = action.payload.createdAt
         state.updatedAt = action.payload.updatedAt
      },
      logout: (state) => {
         state = INITIAL_DATA_SESSION
      },
      updateMainInfo: (state, action: PayloadAction<TDataUserToUpdate>) => {
         state.name = action.payload.name
         state.email = action.payload.email
         state.phone = action.payload.phone
      },
      updateImage: (state, action: PayloadAction<string>) => {
         state.image = action.payload
      },
      updateVerificationEmail: (state, action: PayloadAction<boolean>) => {
         state.emailVerified = action.payload
      },
      updateRole: (state, action: PayloadAction<boolean>) => {
         state.isAdmin = action.payload
      },
      updateVerificationPhone: (state, action: PayloadAction<boolean>) => {
         state.phoneVerified = action.payload
      },
      addFavorite: (state, action: PayloadAction<string>) => {
         state.favorites.push(action.payload)
      },
      removeFromFavorite: (state, action: PayloadAction<string>) => {
         state.favorites = state.favorites.filter(
            (favorite) => favorite !== action.payload
         )
      },
      addToCart: (state, action: PayloadAction<TProductInCartPopulated>) => {
         state.cart.push(action.payload)
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
         state.cart = state.cart.filter(
            (cart) => cart.productId._id !== action.payload
         )
      },
      addQuantityOfOneProduct: (state, action: PayloadAction<string>) => {
         state.cart = state.cart.map((cart) => {
            if (cart.productId._id === action.payload) {
               cart.quantity = cart.quantity + 1
            }
            return cart
         })
      },
      removeQuantityOfOneProduct: (state, action: PayloadAction<string>) => {
         state.cart = state.cart.map((cart) => {
            if (cart.productId._id === action.payload) {
               cart.quantity = cart.quantity - 1
            }
            return cart
         })
      },
      addAddress: (state, action: PayloadAction<TAddress>) => {
         state.addresses.push(action.payload)
      },
   },
})

export const {
   login,
   logout,
   updateMainInfo,
   updateImage,
   updateVerificationEmail,
   updateVerificationPhone,
   addFavorite,
   removeFromFavorite,
   updateRole,
   addAddress,
   addToCart,
   removeFromCart,
   addQuantityOfOneProduct,
   removeQuantityOfOneProduct,
} = userSlice.actions

export default userSlice.reducer
