'use server'
import mongoose from 'mongoose'
import { IngredientModel } from '@/app/models/Ingredients'
import { db_config } from '@/config/db.config'
import { TIngredient } from '@/types/models/ingredient'
import { formatServerResponse } from '@/utils/formatServerResponse'
import { revalidatePath } from 'next/cache'

export async function getIngredients() {
   try {
      await mongoose.connect(db_config.URI)
      const ingredients: TIngredient[] | null = await IngredientModel.find()

      return formatServerResponse(ingredients)
   } catch (error) {
      console.log(error)
      return false
   }
}

export async function addNewIngredient(formData: FormData) {
   try {
      const name = formData.get('name') as string
      const data = {
         name: name.toLowerCase(),
      }

      await mongoose.connect(db_config.URI)
      await IngredientModel.create(data)

      revalidatePath('/profile/admin/ingredients')
      return { success: true, message: 'Ingrediente creado con exito' }
   } catch (error: any) {
      console.log(error)
      if (error?.code === 11000) {
         return {
            success: false,
            message: 'Ya existe el ingrediente',
         }
      }
      return { success: false, message: 'Something went wrong' }
   }
}
