import mongoose, { model, models, Schema } from 'mongoose'

interface IProduct extends mongoose.Document {
   name: string
   description: string
   price: number
   image: string
   category: mongoose.Types.ObjectId
   ingredients: mongoose.Types.ObjectId
   available: boolean
   favorites: number
   sells: number
}

const ProductSchema = new Schema<IProduct>(
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
         ref: 'Categories',
         required: true,
      },
      ingredients: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Ingredients',
         },
      ],
      available: {
         type: Boolean,
         default: true,
      },
      favorites: {
         type: Number,
         default: 0,
      },
      sells: {
         type: Number,
         default: 0,
      },
   },
   {
      timestamps: true,
   }
)

export const ProductModel = models?.Products || model('Products', ProductSchema)
