import { TAddress } from '@/app/models/Addresses'
import { TProduct } from './product'
import { TUser } from './user'

interface TProductOrder {
   product: TProduct
   quantity: number
}

export interface TOrder {
   _id: string
   user: TUser
   products: TProductOrder[]
   shippingAddress: TAddress
   paymentMethod: string
   paymentResult: string
   shippingPrice: number
   taxPrice: number
   totalPrice: number
   isPaid: boolean
   paidAt: string
   isDelivered: boolean
   deliveredAt: string
   createdAt: string
   updatedAt: string
}
