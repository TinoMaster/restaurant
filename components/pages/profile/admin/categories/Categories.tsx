import { category } from "@/services/category";
import { Category } from "./Category";

export const Categories = async () => {
  const categories = await category.getCategories();
  const data = categories?.data;

  if (!data || !data.length)
    return (
      <p className="text-center font-bold text-gray-400">
        Crea su primera categoría
      </p>
    );

  return data?.map((category) => (
    <Category
      key={category._id}
      _id={category._id}
      name={category.name}
      description={category.description}
      image={category.image}
    />
  ));
};
