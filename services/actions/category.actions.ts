'use server'
import { CategoryModel } from '@/app/models/Categories'
import { db_config } from '@/config/db.config'
import { TCategoryCreate } from '@/types/models/category'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'

export async function createCategory(formData: FormData) {
   try {
      const category: TCategoryCreate = {
         name: formData.get('name') as string,
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
      await CategoryModel.findByIdAndDelete(id)
      revalidatePath('/profile/admin/categories')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}
