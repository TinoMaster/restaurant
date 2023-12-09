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
  },
  {
    timestamps: true,
  }
);

export const UserModel = models?.Users || model("Users", UserSchema);
