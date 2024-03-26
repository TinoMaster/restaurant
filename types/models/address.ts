import { TAddress } from '@/app/models/Addresses'

export interface TAddressCreate
   extends Omit<TAddress, 'createdAt' | 'updatedAt' | '_id'> {}

export interface TAddressInTheView
   extends Omit<TAddress, 'user' | 'createdAt' | 'updatedAt' | 'country'> {}
