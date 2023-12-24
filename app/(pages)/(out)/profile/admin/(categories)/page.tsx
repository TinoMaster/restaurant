import { Categories } from "@/components/pages/profile/admin/categories/Categories";
import { createCategory } from "@/services/actions/category.actions";
import { Suspense } from "react";

export default async function PageCategoriesAdmin() {
  /* //TODO: Implementar el form como un componente del cleinte para convinarlo con el server action y poder manejar mensaje de error
    https://www.youtube.com/watch?v=nsMzWA6_3RA&ab_channel=ByteGrad
  */
  return (
    <div className="flex flex-col items-center">
      <form
        action={createCategory}
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
      <div className="w-full">
        <ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </Suspense>
        </ul>
      </div>
    </div>
  );
}
