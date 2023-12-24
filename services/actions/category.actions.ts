"use server";
import { CategoryModel } from "@/app/models/Categories";
import { db_config } from "@/config/db.config";
import { TCategoryCreate } from "@/types/models/category";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

export async function createCategory(formDate: FormData) {
  try {
    const category: TCategoryCreate = {
      name: formDate.get("name") as string,
    };

    await mongoose.connect(db_config.URI);
    await CategoryModel.create(category);

    revalidatePath("/profile/admin");
  } catch (error) {
    console.log(error);
  }
}
