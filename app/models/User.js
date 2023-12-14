import { models, Schema, model } from "mongoose";

const lengthPass = 8;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (pass) {
          return pass.length >= lengthPass;
        },
        message: "Password must be at least 8 characters",
      },
    },
    image: { type: String },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    addresses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Addresses",
      },
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Orders",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = models?.Users || model("Users", UserSchema);
