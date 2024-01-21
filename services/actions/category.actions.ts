'use server'
import { CategoryModel } from '@/app/models/Categories'
import { db_config } from '@/config/db.config'
import { TCategory, TCategoryCreate } from '@/types/models/category'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'

export async function getCategories() {
   try {
      await mongoose.connect(db_config.URI)
      const categories: TCategory[] | null = await CategoryModel.find()

      return formatServerResponse<TCategory[]>(categories)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getCategoryById(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      const category: TCategory | null = (await CategoryModel.findById(
         id
      ).populate('products')) as TCategory

      if (!category) {
         return false
      }

      return formatServerResponse<TCategory>(category)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function createCategory(formData: FormData) {
   try {
      const category: TCategoryCreate = {
         name: formData.get('name')?.toString().toLocaleLowerCase() as string,
      }
      await mongoose.connect(db_config.URI)
      await CategoryModel.create(category)
      revalidatePath('/profile/admin')
      return { success: true, message: 'Category created successfully' }
   } catch (error: any) {
      console.log(error)
      if (error?.code === 11000) {
         return {
            success: false,
            message: 'Ya existe la categoria',
         }
      }
      return { success: false, message: 'Something went wrong' }
   }
}

export async function addDescription(FormData: FormData, id: string) {
   try {
      const description = FormData.get('description') as string

      await mongoose.connect(db_config.URI)
      await CategoryModel.findByIdAndUpdate(id, { description })
      revalidatePath('/profile/admin/categories')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function deleteCategory(id: string) {
   try {
      await mongoose.connect(db_config.URI)
      await CategoryModel.findOneAndDelete({ _id: id })
      revalidatePath('/profile/admin/categories')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}
