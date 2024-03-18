import { UPLOAD_FILE } from '@/constants/routes.api'
import { ServerResponse } from '@/types/api_responses'
import { TIngredient } from '@/types/models/ingredient'
import {
   TProduct,
   TResponseProductInCartPopulatedIds
} from '@/types/models/product'
import { IconType } from 'react-icons'

export const isProductInCart = (
   productId: TProduct['_id'],
   array: TResponseProductInCartPopulatedIds['cart']
) => {
   return array.some((p) => p.productId === productId)
}

export const isProductInFavorite = (
   productId: TProduct['_id'],
   array: TProduct['_id'][]
) => {
   return array.some((id) => id === productId)
}

export const convertIconToString = (icon: IconType) => {
   return JSON.stringify(icon)
}

export const convertStringToIcon = (icon: string) => {
   return JSON.parse(icon)
}

export const convertPathWithSpaces = (path: string) => {
   return path.replace(/\s/g, '%20')
}

export const convertPathWithSpacesReverse = (path: string) => {
   return path.replace(/%20/g, ' ')
}

export const createNameImage = (email: string) => {
   return email
}

export const createRandomCode = (length: number) => {
   let result = ''
   const characters = '0123456789'
   const charactersLength = characters.length
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
   }

   return result
}

export const cutPathnameByPiece = (
   pathname: string,
   from: number,
   piece: number
) => {
   const pathnameArr = pathname.split('/')

   return `/` + pathnameArr.slice(from, piece).join('/')
}

export function formatPrice(price: number) {
   return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
   }).format(price)
}

export const formatServerResponse = <T = any>(response: T): T => {
   return JSON.parse(JSON.stringify(response))
}

export function objectsAreIquals(obj1: TIngredient, obj2: TIngredient) {
   return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export async function saveImageInCubbit({
   image,
   name,
}: {
   image: File
   name: string
}) {
   const formData = new FormData()
   formData.append('image', image)
   formData.append('name', name)

   const requestOptions = {
      method: 'POST',
      body: formData,
      Headers: {
         'Content-Type': 'multipart/form-data',
      },
   }

   const url =
      typeof window !== 'undefined'
         ? UPLOAD_FILE
         : `${process.env.PATHNAME}${UPLOAD_FILE}`

   console.log(url)
   const response = await fetch(url, requestOptions)

   const docs: ServerResponse = await response.json()

   return docs
}
