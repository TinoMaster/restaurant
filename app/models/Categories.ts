import mongoose, { models, model, Schema } from 'mongoose'
import { ProductModel } from './Products'

const CategorySchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
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

CategorySchema.pre('findOneAndDelete', async function (next) {
   try {
      const categoryId: mongoose.Types.ObjectId = this.getQuery()['_id']

      await ProductModel.deleteMany({ category: categoryId })

      next()
   } catch (error: any) {
      console.log(error)
      next(error)
   }
})

export const CategoryModel =
   models?.Categories || model('Categories', CategorySchema)
