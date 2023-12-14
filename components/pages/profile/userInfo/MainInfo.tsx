import { Input } from "@/components/ui/elements/Input";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

export const MainInfo = async () => {
  const session = await getServerSession();

  return (
    <div className="grid grid-cols-4 justify-center items-center py-4">
      {/* Caja imagen */}
      <div className="flex justify-center items-center col-span-1">
        <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt="profile"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <p className="text-5xl">{session?.user?.name?.slice(0, 2)}</p>
          )}
        </div>
      </div>
      {/* Caja información */}
      <div className="col-span-3">
        <h3 className="text-3xl col-span-4 mb-5">User Info</h3>
        <div className="grid grid-cols-2 gap-4">
          {userInfoProfilePageInputs.map((inp, idx) => (
            <Input
              key={idx}
              type={inp.type}
              label={inp.label}
              name={inp.name}
              id={inp.id}
              placeholder={inp.placeholder}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
};
