import Image from "next/image";
import React from "react";

interface CategoryProps {
  name: string;
  description?: string;
  _id: string;
  image?: string;
}

/* // TODO: continue here */
export const Category = (category: CategoryProps) => {
  const { name, description, _id, image } = category;
  return (
    <section className="">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
          {image ? (
            <Image
              src={image}
              alt="profile"
              width={250}
              height={250}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-5xl font-bold text-primary">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
