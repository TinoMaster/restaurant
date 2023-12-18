import { EMPTY } from "@/constants/common";
import { TInput } from "@/types/common";
import { TUser } from "@/types/user";
import React from "react";

interface InputEditableProps {
  inp: TInput;
  dataSession: TUser | undefined;
  editonMode: boolean;
}

export const InputEditable = ({
  inp,
  dataSession,
  editonMode,
}: InputEditableProps) => {
  const editInput = () => {
    if (editonMode && inp.editable) {
      return false;
    }
    if (editonMode && inp.name === "phone" && !dataSession?.phone) {
      return false;
    }
    return true;
  };

  return (
    <label htmlFor={inp.id} className="col-span-1 space-y-2">
      <span className="font-bold text-gray-300/80 text-sm ml-1">
        {inp.label}
      </span>
      <div className="flex relative items-center">
        <input
          style={
            dataSession?.[inp.name] ? { color: "white" } : { color: "#6b7280" }
          }
          id={inp.id}
          type={inp.type}
          placeholder={inp.placeholder}
          name={inp.name}
          className="input"
          autoComplete="off"
          defaultValue={dataSession?.[inp.name] || EMPTY}
          disabled={editInput()}
        />
      </div>
    </label>
  );
};
