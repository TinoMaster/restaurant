import { ServerResponse } from '@/types/api_responses'
import { TAddress, TAddressCreate } from '@/types/models/address'

class Address {
   async createAddress(route: string, data: TAddressCreate) {
      const requestOptions = {
         method: 'POST',
         body: JSON.stringify(data),
         headers: { 'Content-Type': 'application/json' },
      }

      const response = await fetch(route, requestOptions)

      const docs: ServerResponse<TAddress> = await response.json()
      return docs
   }
}

export const address = new Address()
