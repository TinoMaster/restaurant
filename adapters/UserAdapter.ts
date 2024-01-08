import { ServerResponse } from '@/types/api_responses'
import { TUser } from '@/types/models/user'

export const userAdapter = (response: ServerResponse) => {
   let docs: ServerResponse<TUser> | ServerResponse

   if (!response.success) {
      docs = {
         success: false,
         message: response.message,
      }
   } else {
      const data = Array.isArray(response.data)
         ? response.data[0]
         : response.data
      docs = {
         success: true,
         data: data,
         message: response.message,
      }
   }

   return docs
}
