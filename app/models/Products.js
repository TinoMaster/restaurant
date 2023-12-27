import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredients",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductModel =
  models?.Products || model("Products", ProductSchema);
