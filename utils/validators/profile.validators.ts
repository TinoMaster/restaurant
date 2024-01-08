import { TDataUserToUpdate, TUser } from '@/types/models/user'

export const validateName = (name: string) => {
   if (name.length < 3) {
      return false
   }
   return true
}

export const validateEmail = (email: string) => {
   if (!email) {
      return true
   }
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return emailRegex.test(email)
}

export const validateItalianPhone = (phone: string) => {
   if (!phone) {
      return true
   }
   const phoneRegex = /^3\d{9}$/
   return phoneRegex.test(phone)
}

export const validateUserInfo = (
   { name = '', email = '', phone = '' }: TDataUserToUpdate,
   actualData: Pick<TUser, 'name' | 'email' | 'phone'>
) => {
   if (
      name === actualData.name &&
      email === actualData.email &&
      phone === actualData.phone
   )
      return false
   return (
      validateName(name) && validateEmail(email) && validateItalianPhone(phone)
   )
}
