import { INITIAL_DATA_SESSION } from '@/constants/user'
import { TAddress } from '@/types/models/address'
import { TDataUserToUpdate, TUser } from '@/types/models/user'
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TUserActions {
   login: (payload: TUser) => Action
   logout: () => Action
   updateMainInfo: (payload: Pick<TUser, 'name' | 'email' | 'phone'>) => Action
   updateImage: (payload: string) => Action
   updateVerificationEmail: (payload: boolean) => Action
   updateVerificationPhone: (payload: boolean) => Action
   addAddress: (payload: TAddress) => Action
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
      updateVerificationPhone: (state, action: PayloadAction<boolean>) => {
         state.phoneVerified = action.payload
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
   addAddress,
} = userSlice.actions

export default userSlice.reducer
