'use server'
import { CategoryModel } from '@/app/models/Categories'
import { db_config } from '@/config/db.config'
import { TCategory, TCategoryCreate } from '@/types/models/category'
import { convertPathWithSpacesReverse } from '@/utils/convertPathWithSpaces'
import { formatServerResponse } from '@/utils/formatServerResponse'
import mongoose from 'mongoose'
import { revalidatePath } from 'next/cache'

export async function getCategories() {
   try {
      await mongoose.connect(db_config.URI as string)

      const categories: TCategory[] | null = await CategoryModel.find()

      return formatServerResponse<TCategory[]>(categories)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function getCategoryById(id: string) {
   try {
      await mongoose.connect(db_config.URI as string)
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

export async function getCategoryByName(name: string) {
   try {
      const categoryName = convertPathWithSpacesReverse(name)
      await mongoose.connect(db_config.URI as string)
      const category: TCategory | null = (await CategoryModel.findOne({
         name: categoryName,
      }).populate({
         path: 'products',
         populate: { path: 'ingredients' },
      })) as TCategory

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
      await mongoose.connect(db_config.URI as string)
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

      await mongoose.connect(db_config.URI as string)
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
      await mongoose.connect(db_config.URI as string)
      await CategoryModel.findOneAndDelete({ _id: id })
      revalidatePath('/profile/admin/categories')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function ChangeCategoryName(id: string, name: string) {
   try {
      await mongoose.connect(db_config.URI as string)
      const res = await CategoryModel.findByIdAndUpdate(id, { name })

      if (!res) {
         return false
      }

      revalidatePath('/profile/admin/categories')
      return true
   } catch (error) {
      console.log(error)
      return false
   }
}
