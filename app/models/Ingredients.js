import { model, models, Schema } from "mongoose";

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const IngredientModel =
  models?.Ingredients || model("Ingredients", IngredientSchema);
