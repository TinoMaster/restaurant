'use server'
import '@/app/models/Ingredients'
import { CategoryModel } from '@/app/models/Categories'
import { ProductModel } from '@/app/models/Products'
import { db_config } from '@/config/db.config'
import { TCategory } from '@/types/models/category'
import {
   TCreateProduct,
   TProduct,
   TUpdateProduct,
} from '@/types/models/product'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'
import { validateProduct } from '../validators/schemas/product.zod'
import { UserModel } from '@/app/models/User'
import { saveImageInCubbit } from '@/utils/saveImageInCubbit'

export async function getProducts() {
   try {
      await mongoose.connect(db_config.URI as string)
      const products: TProduct[] | null = await ProductModel.find()
         .populate('category')
         .populate('ingredients')
      if (!products) return false
      return formatServerResponse<TProduct[]>(products)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getProductById(id: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const product: TProduct | null = (await ProductModel.findById(id)
         .populate('category')
         .populate('ingredients')) as TProduct

      if (!product) {
         return false
      }

      return formatServerResponse<TProduct>(product)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getProductsByCategory(category: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const categoryId = await CategoryModel.findOne({ name: category })
      const products: TProduct[] | null = await ProductModel.find({
         category: categoryId?._id,
      }).populate('ingredients')

      if (!products) {
         return false
      }

      return formatServerResponse<TProduct[]>(products)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function createProduct(formData: FormData) {
   const imageProduct = formData.get('image') as File

   if (!imageProduct.size) {
      return { success: false, message: 'Image is required' }
   }

   try {
      const product: TCreateProduct = {
         name: formData.get('name') as string,
         description: formData.get('description') as string,
         price: Number(formData.get('price')),
         image: '',
         category: formData.get('category') as TCategory['_id'],
         ingredients: formData.getAll('ingredient') as string[],
      }

      const validator = validateProduct(product)

      if (!validator.success) {
         return { success: false, message: validator.error.issues[0].message }
      }

      const imageSaved = await saveImageInCubbit({
         image: imageProduct,
         name: product.name,
      })

      if (!imageSaved.success) {
         return { success: false, message: imageSaved.message }
      }

      product.image = imageSaved.data
      await mongoose.connect(db_config.URI as string)
      const res = await ProductModel.create(product)

      if (!res) {
         return { success: false, message: 'Something went wrong' }
      }

      const saveProductInCategory = await CategoryModel.findByIdAndUpdate(
         res.category,
         {
            $push: {
               products: res._id,
            },
         }
      )

      if (!saveProductInCategory) {
         return { success: false, message: 'Something went wrong' }
      }

      revalidatePath('/profile/admin/menu')
      return { success: true, message: 'Product created successfully' }
   } catch (error: any) {
      console.log(error)
      if (error?.code === 11000) {
         return {
            success: false,
            message: 'Ya existe el producto',
         }
      }
      return { success: false, message: 'Something went wrong' }
   }
}

export async function deleteProduct(id: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const res: TProduct | null = await ProductModel.findOneAndDelete({
         _id: id,
      })

      if (!res) {
         return false
      }

      const { category, _id } = res

      await CategoryModel.findByIdAndUpdate(category, {
         $pull: {
            products: _id,
         },
      })

      revalidatePath('/profile/admin/menu')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function updateProduct(id: string, data: TUpdateProduct) {
   try {
      await mongoose.connect(db_config.URI as string)
      const res = await ProductModel.findByIdAndUpdate(id, data, {
         new: true,
      })
      if (!res) {
         return false
      }
      revalidatePath('/profile/admin/menu')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function addIngredientToProduct(id: string, ingredientId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      await ProductModel.findByIdAndUpdate(id, {
         $addToSet: { ingredients: ingredientId },
      })

      revalidatePath('/profile/admin/menu')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function changeAvailability(id: string, isAvailable: boolean) {
   try {
      await mongoose.connect(db_config.URI as string)
      await ProductModel.findByIdAndUpdate(id, { available: isAvailable })

      revalidatePath('/profile/admin/menu')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function deleteIngredientFromProduct(
   id: string,
   ingredientId: string
) {
   try {
      await mongoose.connect(db_config.URI as string)
      await ProductModel.findByIdAndUpdate(id, {
         $pull: { ingredients: ingredientId },
      })

      revalidatePath('/profile/admin/menu')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function IsFavorite(id: string, userId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $addToSet: { favorites: id },
      })
      await ProductModel.findByIdAndUpdate(id, {
         $inc: { favorites: 1 },
      })

      revalidatePath('/')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function removeFavorite(id: string, userId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $pull: { favorites: id },
      })
      await ProductModel.findByIdAndUpdate(id, {
         $inc: { favorites: -1 },
      })

      revalidatePath('/')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function AddToCart(
   userId: string,
   productId: string,
   quantity: number
) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $addToSet: { cart: { productId, quantity } },
      })
      revalidatePath('/profile')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function AddOneMoreToCart(
   userId: string,
   productId: string,
   quantity: number
) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $inc: { cart: { $each: [{ productId, quantity }] } },
      })
      revalidatePath('/profile')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function RemoveFromCart(userId: string, productId: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $pull: { cart: { productId } },
      })

      revalidatePath('/profile')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}
