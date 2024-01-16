'use server'
import { ProductModel } from '@/app/models/Products'
import { db_config } from '@/config/db.config'
import mongoose from 'mongoose'

export async function getProducts() {
   try {
      await mongoose.connect(db_config.URI)
      const products = await ProductModel.find()
      if (!products) return false
      return products
   } catch (error) {
      console.log(error)
      return false
   }
}
