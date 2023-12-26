import { Link_CreateItemMenu } from "@/components/pages/profile/admin/menu/Link_CreateItemMenu";
import { RenderMenus } from "@/components/pages/profile/admin/menu/RenderMenus";
import { category } from "@/services/category";

export default async function PageAdminMenu() {
  const categories = await category.getCategories();

  if (!categories.success) {
    return <p className="">Something went wrong</p>;
  }

  if (categories.data && categories.data.length === 0) {
    return <p className="">Debe agregar al menos una categoría</p>;
  }

  const { data } = categories;

  return (
    <div className="">
      <Link_CreateItemMenu />
      <section className="py-6 space-y-6">
        {data?.map((category) => (
          <details
            className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white/5 rounded-lg"
            key={category._id}
          >
            <summary className="">{category.name}</summary>
            <RenderMenus category={category.name} />
          </details>
        ))}
      </section>
    </div>
  );
}
