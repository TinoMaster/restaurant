import { model, models, Schema } from 'mongoose'

const IngredientSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true,
   },
})

export const IngredientModel =
   models?.Ingredients || model('Ingredients', IngredientSchema)
