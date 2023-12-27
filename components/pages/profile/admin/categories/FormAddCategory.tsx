"use client";
import { category } from "@/services/category";

export const FormAddCategory = () => {
  return (
    <form
      action={category.createCategoryClient}
      className="flex gap-3 items-center py-5 w-full lg:max-w-[500px]"
    >
      <input name="name" type="text" className="input" />
      <button
        type="submit"
        className="bg-white text-gray-600 px-5 py-2 rounded-xl font-bold"
      >
        Create
      </button>
    </form>
  );
};
