import { TCreateProduct } from '@/types/models/product'
import { ObjectId } from 'mongodb'
import { z } from 'zod'

export const productSchema = z
   .object({
      name: z
         .string()
         .min(3, 'The name must have at least 3 characters')
         .max(30, 'The name must have at most 30 characters'),
      description: z
         .string()
         .min(0, 'The description must have at least 3 characters')
         .max(100, 'The description must have at most 100 characters'),
      price: z
         .number({
            invalid_type_error: 'The price must be a number',
         })
         .min(1, 'The price must be greater than 0')
         .max(10000, 'The price must be less than 10000'),
      image: z.string().min(3, 'The image must have at least 3 characters'),
      category: z.string().refine((value) => ObjectId.isValid(value), {
         message: 'The category is not valid',
      }),
      ingredients: z.array(
         z.string().refine((value) => ObjectId.isValid(value), {
            message: 'The ingredient is not valid',
         })
      ),
   })
   .required()

export const validateProduct = (product: TCreateProduct) => {
   return productSchema.safeParse(product)
}
