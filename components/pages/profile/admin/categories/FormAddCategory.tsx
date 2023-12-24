"use client";
import { category } from "@/services/category";

export const FormAddCategory = () => {
  return (
    <form
      action={category.createCategoryClient}
      className="flex gap-1 items-center p-5 lg:min-w-[500px]"
    >
      <input name="name" type="text" className="input" />
      <button
        type="submit"
        className="bg-white text-gray-600 px-5 py-2 rounded-xl font-bold"
      >
        Save
      </button>
    </form>
  );
};
