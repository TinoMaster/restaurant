'use server'
import { ProductModel } from '@/app/models/Products'
import { db_config } from '@/config/db.config'
import { TCategory } from '@/types/models/category'
import { TCreateProduct, TProduct } from '@/types/models/product'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'

export async function getProducts() {
   try {
      await mongoose.connect(db_config.URI)
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
      await mongoose.connect(db_config.URI)
      const product: TProduct | null = await ProductModel.findById(id)

      if (!product) {
         return false
      }

      return formatServerResponse<TProduct>(product)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function createProduct(formData: FormData) {
   const product: TCreateProduct = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      image: 'https://s3.cubbit.eu/restaurant/textura-cemento.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=qNTsDLxxoUbha4632pNrGUMm5Abs8mV8%2F20240117%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240117T164046Z&X-Amz-Expires=3600&X-Amz-Signature=618ee8037aab8a0befde6856d6de81539df042acd14f09c5d8488218158a7e0d&X-Amz-SignedHeaders=host&response-content-disposition=inline&x-id=GetObject',
      category: formData.get('category') as TCategory['_id'],
      ingredients: formData.getAll('ingredient') as string[],
   }

   try {
      await mongoose.connect(db_config.URI)
      await ProductModel.create(product)

      revalidatePath('/profile/admin/menu')
      return { success: true, message: 'Product created successfully' }
   } catch (error) {
      console.log(error)
      return { success: false, message: 'Something went wrong' }
   }
}
