import { model, models, Schema } from "mongoose";

const NotificationSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

export const NotificationModel =
  models?.Notifications || model("Notifications", NotificationSchema);
