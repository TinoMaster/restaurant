import { TProduct } from './product'

export interface TCategory {
   _id: string
   name: string
   description?: string
   products?: TProduct[]
   createdAt: string
   updatedAt: string
}

export interface TCategoryCreate {
   name: string
}
