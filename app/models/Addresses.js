import { Schema, model, models } from 'mongoose'

const AddressesSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      street: {
         type: String,
         required: true,
      },
      city: {
         type: String,
         required: true,
      },
      postal_code: {
         type: String,
         required: true,
      },
      country: {
         type: String,
         required: true,
      },
      user: {
         type: Schema.Types.ObjectId,
         ref: 'Users',
         required: true,
      },
   },
   {
      timestamps: true,
   }
)

export const AddressesModel =
   models?.Addresses || model('Addresses', AddressesSchema)
