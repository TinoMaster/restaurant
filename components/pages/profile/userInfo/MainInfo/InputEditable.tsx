import { TInput } from "@/types/common";
import { TDataUserToUpdate } from "@/types/models/user";
import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { LuBadgeAlert } from "react-icons/lu";

interface InputEditableProps {
  inp: TInput;
  userInfoToEdit: TDataUserToUpdate;
  handlerInfoToEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailVerified?: boolean;
  phoneVerified?: boolean;
}

export const InputEditable = ({
  inp,
  userInfoToEdit,
  handlerInfoToEdit,
  emailVerified = false,
  phoneVerified = false,
}: InputEditableProps) => {
  const disabledInput = () => {
    if (inp.name === "email" && emailVerified) {
      return true;
    }
    if (inp.name === "phone" && phoneVerified) {
      return true;
    }
    return false;
  };

  return (
    <label htmlFor={inp.id} className="col-span-2 lg:col-span-1 space-y-2">
      <span className="font-bold text-gray-300/80 text-sm ml-1 relative flex items-center">
        {inp.label}
        {inp.name === "email" &&
          (emailVerified ? (
            <span className="px-2 text-xs bg-green-400/30 rounded-lg absolute right-4 flex items-center">
              verified <MdOutlineVerified className="" />
            </span>
          ) : (
            <span className="px-2 text-xs bg-yellow-400/30 rounded-lg absolute right-4 flex items-center">
              not verified <LuBadgeAlert className="" />
            </span>
          ))}
        {inp.name === "phone" &&
          (phoneVerified ? (
            <span className="px-2 text-xs bg-green-400/30 rounded-lg absolute right-4 flex items-center">
              verified <MdOutlineVerified className="" />
            </span>
          ) : (
            <span className="px-2 text-xs bg-yellow-400/30 rounded-lg absolute right-4 flex items-center">
              not verified <LuBadgeAlert className="" />
            </span>
          ))}
      </span>
      <div className="flex relative items-center">
        <input
          style={disabledInput() ? { opacity: 0.5 } : {}}
          onChange={handlerInfoToEdit}
          id={inp.id}
          type={inp.type}
          placeholder={inp.placeholder}
          name={inp.name}
          className="input"
          autoComplete="off"
          value={userInfoToEdit?.[inp.name]}
          disabled={disabledInput()}
        />
      </div>
    </label>
  );
};
