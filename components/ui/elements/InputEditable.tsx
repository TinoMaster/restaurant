import { TInput } from "@/types/common";
import { TDataUserToUpdate, TUser } from "@/types/models/user";
import React, { useState } from "react";

interface InputEditableProps {
  inp: TInput;
  dataSession: TUser | undefined;
  userInfoToEdit: TDataUserToUpdate;
  handlerInfoToEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputEditable = ({
  inp,
  userInfoToEdit,
  handlerInfoToEdit,
}: InputEditableProps) => {
  return (
    <label htmlFor={inp.id} className="col-span-2 lg:col-span-1 space-y-2">
      <span className="font-bold text-gray-300/80 text-sm ml-1">
        {inp.label}
      </span>
      <div className="flex relative items-center">
        <input
          onChange={handlerInfoToEdit}
          id={inp.id}
          type={inp.type}
          placeholder={inp.placeholder}
          name={inp.name}
          className="input"
          autoComplete="off"
          value={userInfoToEdit?.[inp.name]}
          disabled={false}
        />
      </div>
    </label>
  );
};
