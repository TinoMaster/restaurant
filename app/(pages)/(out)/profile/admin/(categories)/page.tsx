import { Categories } from "@/components/pages/profile/admin/categories/Categories";
import { FormAddCategory } from "@/components/pages/profile/admin/categories/FormAddCategory";
import { Suspense } from "react";

export default async function PageCategoriesAdmin() {
  return (
    <div className="flex flex-col items-center">
      <FormAddCategory />
      <div className="w-full">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Categories />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
