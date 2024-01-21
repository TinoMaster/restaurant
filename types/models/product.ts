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
   createdAt: string
   updatedAt: string
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
