import Link from "next/link";
import React from "react";
import { MdOutlineAddBusiness } from "react-icons/md";

export const Link_CreateItemMenu = () => {
  return (
    <div className="flex justify-end">
      <Link
        href="/profile/admin/menu/create_item_menu"
        className="btn-white flex items-center gap-2"
      >
        <MdOutlineAddBusiness />
        <span>Create Item Menu</span>
      </Link>
    </div>
  );
};
