import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "Products",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = models?.Orders || model("Orders", OrderSchema);
