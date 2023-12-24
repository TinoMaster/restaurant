import { category } from "@/services/category";

export const Categories = async () => {
  const categories = await category.getCategories();
  const data = categories?.data;

  if (!data || !data.length) return <p className="text-center font-bold text-gray-400">Crea su primera categoría</p>;

  return data?.map((category) => <li key={category._id}>{category.name}</li>);
};
