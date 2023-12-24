import { NavBar_admin } from "@/components/pages/profile/admin/NavBar_admin";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminPanellayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    redirect("/");
  }

  return (
    <div>
      <NavBar_admin />
      {children}
    </div>
  );
}
