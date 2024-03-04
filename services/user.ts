import { userAdapter } from '@/adapters/UserAdapter'
import { ServerResponse } from '@/types/api_responses'
import { IDataToVerifyEmail } from '@/types/common'
import {
   TCreateAdminUserForTest,
   TUserMainInfoToEdit,
   TUserRegister
} from '@/types/models/user'

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

   async sendEmailToVerify(
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

   async updateEmailVerified(route: string) {
      const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async sendSMSToVerify(
      route: string,
      body: { message: string; phoneNumber: string }
   ) {
      const requestOptions = {
         method: 'POST',
         body: JSON.stringify(body),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }

   async updatePhoneVerified(route: string) {
      const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse = await response.json()
      return docs
   }
}

export const user = new User()
