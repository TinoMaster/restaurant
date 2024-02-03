import { TCategory } from './category'
import { TIngredient } from './ingredient'

export interface TProduct {
   _id: string
   name: string
   description: string
   price: number
   image: string
   category: TCategory
   ingredients: TIngredient[]
   available: boolean
   favorites: number
   sells: number
   createdAt: string
   updatedAt: string
}

export interface TProductInCart {
   productId: TProduct['_id']
   quantity: number
}

export interface TCreateProduct {
   name: string
   description: string
   price: number
   image: string
   category: TCategory['_id']
   ingredients: TIngredient['_id'][]
}

export interface TUpdateProduct {
   name?: string
   description?: string
   price?: number
   image?: string
   ingredients?: TIngredient['_id'][]
}
