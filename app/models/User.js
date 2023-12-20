import { models, Schema, model } from "mongoose";

const lengthPass = 8;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [20, "Name must be less than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (pass) {
          return pass.length >= lengthPass;
        },
        message: "Password must be at least 8 characters",
      },
      select: false,
    },
    image: { type: String, default: undefined },
    phone: { type: String, default: undefined },
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
