async function getCategories() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

/* //TODO: Continue here */

export default async function CategoriesAdminPage() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="flex justify-center">
      <label
        htmlFor="category"
        className="flex gap-1 items-center p-5 lg:min-w-[500px]"
      >
        <input id="category" type="text" className="input" />
        <button className="bg-white text-gray-600 px-5 py-2 rounded-xl font-bold">
          Save
        </button>
      </label>
    </div>
  );
}
