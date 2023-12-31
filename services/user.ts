import { userAdapter } from '@/adapters/UserAdapter'
import { ServerResponse } from '@/types/api_responses'
import { IDataToVerifyEmail } from '@/types/common'
import { TDataUserToUpdate, TUserRegister } from '@/types/models/user'

class User {
   async register(route: string, data: TUserRegister) {
      const requestOptions = {
         method: 'POST',
         body: JSON.stringify(data),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async getInfo(route: string) {
      const response = await fetch(route, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
         cache: 'no-store',
      })

      const docs: ServerResponse = await response.json()
      const res = userAdapter(docs)

      return res
   }

   async UpdateInfo(route: string, data: TDataUserToUpdate) {
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

   async uploadImage(route: string, data: FormData) {
      const requestOptions = {
         method: 'POST',
         body: data,
         Headers: {
            'Content-Type': 'multipart/form-data',
         },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      const res = userAdapter(docs)
      return res
   }

   async verifyEmail(
      route: string,
      { firstName, verificationCode, email }: IDataToVerifyEmail
   ) {
      const requestOptions = {
         method: 'POST',
         body: JSON.stringify({ firstName, verificationCode, email }),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async confirmEmail(route: string, email: string) {
      const requestOptions = {
         method: 'PUT',
         body: JSON.stringify({ email }),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }
}

export const user = new User()
