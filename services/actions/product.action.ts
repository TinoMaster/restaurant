'use server'
import { CategoryModel } from '@/app/models/Categories'
import '@/app/models/Ingredients'
import { ProductModel } from '@/app/models/Products'
import { UserModel } from '@/app/models/User'
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
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/authOptions'
import { saveImageInCubbit } from '@/libs/utils'

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

   try {
      if (!imageProduct?.size) {
         return { success: false, message: 'Image is required' }
      }

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

export async function changeImageProduct(productId: string, imageURL: string) {
   try {
      await mongoose.connect(db_config.URI as string)

      await ProductModel.findByIdAndUpdate(productId, {
         image: imageURL,
      })

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

export async function addToFavorite(productId: string) {
   try {
      const session = await getServerSession(authOptions)
      const userId = session?.user?.sub as string

      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $addToSet: { favorites: productId },
      })
      await ProductModel.findByIdAndUpdate(productId, {
         $inc: { favorites: 1 },
      })

      return true
   } catch (error) {
      console.log(error)
      return false
   } finally {
      revalidatePath('/')
   }
}

export async function removeFavorite(productId: string) {
   try {
      const session = await getServerSession(authOptions)
      const userId = session?.user?.sub as string

      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $pull: { favorites: productId },
      })
      await ProductModel.findByIdAndUpdate(productId, {
         $inc: { favorites: -1 },
      })

      return true
   } catch (error) {
      console.log(error)
      return false
   } finally {
      revalidatePath('/')
   }
}

export async function AddToCart(productId: string) {
   try {
      const session = await getServerSession(authOptions)
      const userId = session?.user?.sub as string

      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $addToSet: { cart: { productId, quantity: 1 } },
      })
      return true
   } catch (error) {
      console.log(error)
      return false
   } finally {
      revalidatePath('/')
   }
}

export async function RemoveFromCart(productId: string) {
   try {
      const session = await getServerSession(authOptions)
      const userId = session?.user?.sub as string

      await mongoose.connect(db_config.URI as string)
      await UserModel.findByIdAndUpdate(userId, {
         $pull: { cart: { productId } },
      })

      return true
   } catch (error) {
      console.log(error)
      return false
   } finally {
      revalidatePath('/')
   }
}
