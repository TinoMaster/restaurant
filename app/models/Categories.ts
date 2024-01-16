import { models, model, Schema } from 'mongoose'

const CategorySchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
      },
      products: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Products',
         },
      ],
   },
   {
      timestamps: true,
   }
)

export const CategoryModel =
   models?.Categories || model('Categories', CategorySchema)
