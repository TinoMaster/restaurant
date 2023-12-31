import Link from "next/link";
import React from "react";
import { MdOutlineAddBusiness } from "react-icons/md";

export const Link_CreateItemMenu = () => {
  return (
    <div className="flex justify-end">
      <Link
        href="/profile/admin/menu/create_item_menu"
        className="flex items-center gap-1 p-2 text-sm md:text-base bg-primaryPal-600/80 rounded-lg hover:bg-primaryPal-600 transition-colors active:scale-95"
      >
        <MdOutlineAddBusiness />
        <span>Create Item Menu</span>
      </Link>
    </div>
  );
};
