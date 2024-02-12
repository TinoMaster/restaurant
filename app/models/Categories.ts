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

      const products = await ProductModel.find({ category: categoryId })

      await Promise.all(
         products.map(async (product) => {
            await ProductModel.findOneAndDelete({ _id: product._id })
         })
      )

      next()
   } catch (error: any) {
      console.log(error)
      next(error)
   }
})

export const CategoryModel =
   models?.Categories || model('Categories', CategorySchema)
