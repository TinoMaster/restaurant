import mongoose, { model, models, Schema } from 'mongoose'
import { ProductModel } from './Products'

interface IIngredient extends mongoose.Document {
   name: string
}

const IngredientSchema = new Schema<IIngredient>({
   name: {
      type: String,
      required: true,
      unique: true,
   },
})

IngredientSchema.pre('findOneAndDelete', async function (next) {
   try {
      const ingredientId: mongoose.Types.ObjectId = this.getQuery()['_id']

      await ProductModel.updateMany(
         { ingredients: ingredientId },
         { $pull: { ingredients: ingredientId } }
      )

      next()
   } catch (error: any) {
      console.log(error)
      next(error)
   }
})

export const IngredientModel =
   models?.Ingredients || model('Ingredients', IngredientSchema)
