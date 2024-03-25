import { model, models, Schema } from 'mongoose'

const OrderSchema = new Schema(
   {
      user: {
         type: Schema.Types.ObjectId,
         ref: 'Users',
         required: true,
      },
      products: [
         {
            product: {
               type: Schema.Types.ObjectId,
               ref: 'Products',
               required: true,
            },
            quantity: {
               type: Number,
               required: true,
            },
         },
      ],
      shippingAddress: {
         type: Schema.Types.ObjectId,
         ref: 'Address',
         required: true,
      },
      paymentMethod: {
         type: String,
         required: true,
      },
      paymentResult: {
         id: String,
         status: String,
         update_time: String,
         email_address: String,
      },
      shippingPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      taxPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      totalPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      isPaid: {
         type: Boolean,
         required: true,
         default: false,
      },
      paidAt: {
         type: Date,
      },
      isDelivered: {
         type: Boolean,
         required: true,
         default: false,
      },
      deliveredAt: {
         type: Date,
      },
   },
   {
      timestamps: true,
   }
)

export const OrderModel = models?.Orders || model('Orders', OrderSchema)
