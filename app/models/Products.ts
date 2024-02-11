import mongoose, { model, models, Schema } from 'mongoose'
import { UserModel } from './User'

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

ProductSchema.pre('deleteMany', async function (next) {
   try {
      const productIds = this.getQuery()._id.$in

      const objectIdArray = productIds.map(
         (id: string) => new mongoose.Types.ObjectId(id)
      )

      await UserModel.updateMany(
         { favorites: { $in: objectIdArray } },
         { $pull: { favorites: { $in: objectIdArray } } }
      )

      await UserModel.updateMany(
         { 'cart.productId': { $in: objectIdArray } },
         { $pull: { cart: { productId: { $in: objectIdArray } } } }
      )

      next()
   } catch (error: any) {
      console.log(error)
      next(error)
   }
})

ProductSchema.pre('findOneAndDelete', async function (next) {
   try {
      const productId = new mongoose.Types.ObjectId(this.getQuery()['_id'])

      await UserModel.updateMany(
         { favorites: productId },
         { $pull: { favorites: productId } }
      )

      await UserModel.updateMany(
         { 'cart.productId': productId },
         { $pull: { cart: { productId } } }
      )

      next()
   } catch (error: any) {
      console.log(error)
      next(error)
   }
})

export const ProductModel = models?.Products || model('Products', ProductSchema)
