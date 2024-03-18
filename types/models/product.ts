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
   _id: string
}

export interface TResponseProductInCartPopulated {
   _id: string
   cart: [
      {
         _id: string
         productId: TProduct
         quantity: number
      }
   ]
}
export interface TProductInCartPopulated {
   productId: TProduct
   quantity: number
   _id: string
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

export interface TFavoritesResponse {
   _id: string
   favorites: TProduct[]
}

export interface TCartFavIds {
   cart: string[]
   favorites: string[]
}
