import { userAdapter } from '@/adapters/UserAdapter'
import { ServerResponse } from '@/types/api_responses'
import {
   TCreateAdminUserForTest,
   TUserMainInfoToEdit,
   TUserRegister,
} from '@/types/models/user'
import { AddOrRemoveOneMoreProductToCart } from './actions/user.actions'

class User {
   async register(route: string, data: TUserRegister) {
      let dataToSend: TCreateAdminUserForTest | TUserRegister | null
      if (data.email === 'testemail@example.com') {
         dataToSend = {
            ...data,
            isAdmin: true,
            emailVerified: true,
            phoneVerified: true,
            phone: '1234567891',
         }
      } else {
         dataToSend = data
      }

      const requestOptions = {
         method: 'POST',
         body: JSON.stringify(dataToSend),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async UpdateInfo(route: string, data: TUserMainInfoToEdit) {
      const requestOptions = {
         method: 'PUT',
         body: JSON.stringify(data),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      const res = userAdapter(docs)
      return res
   }

   async addOrRemoveProductToCart(productId: string) {
      const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            productId,
         }),
      }

      const response = await fetch(`/api/user/cart`, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async addOrRemoveProductToFavorites(productId: string) {
      const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            productId,
         }),
      }

      const response = await fetch(`/api/user/favorites`, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async addOrRemoveProductQuantity(
      userId: string,
      productId: string,
      quantity: number
   ) {
      const savedQuantity = await AddOrRemoveOneMoreProductToCart(
         userId,
         productId,
         quantity
      )
      return savedQuantity
   }
}

export const user = new User()
