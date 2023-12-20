import { EMPTY } from "@/constants/common";
import { TInput } from "@/types/common";
import { TUser } from "@/types/user";
import React, { useState } from "react";

interface InputEditableProps {
  inp: TInput;
  dataSession: TUser | undefined;
  editonMode: boolean;
  loading?: boolean;
}

export const InputEditable = ({
  inp,
  dataSession,
  editonMode,
  loading,
}: InputEditableProps) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    [inp.name]: "",
  });

  function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }
  const isDisable = () => {
    if (editonMode && inp.editable) {
      return false;
    }
    if (editonMode && inp.name === "phone" && !dataSession?.phone) {
      return false;
    }
    return true;
  };

  const putDefaultValue = () => {
    if (!dataSession?.[inp.name] && editonMode) {
      return inputValue?.[inp.name];
    }
    if (dataSession?.[inp.name] && !editonMode) {
      return dataSession?.[inp.name];
    }
    if (dataSession?.[inp.name] && editonMode && inp.editable) {
      return inputValue?.[inp.name];
    }
    if (dataSession?.[inp.name] && editonMode && !inp.editable) {
      return dataSession?.[inp.name];
    }
    return EMPTY;
  };

  return (
    <label htmlFor={inp.id} className="col-span-1 space-y-2">
      <span className="font-bold text-gray-300/80 text-sm ml-1">
        {inp.label}
      </span>
      <div className="flex relative items-center">
        <input
          onChange={handleInputValue}
          style={
            dataSession?.[inp.name] || editonMode
              ? { color: "white" }
              : { color: "#6b7280" }
          }
          id={inp.id}
          type={inp.type}
          placeholder={inp.placeholder}
          name={inp.name}
          className={isDisable() ? "input" : "input-editable"}
          autoComplete="off"
          value={putDefaultValue()}
          disabled={isDisable() || loading}
        />
        <div className={`w-3 h-3 ${loading && "cursor-wait"} absolute right-2`}>
          {loading && inp.editable && (
            <div className="animate-spin rounded-full w-full h-full border-t-2 border-primary border-t-primary border-r-2 border-r-primary" />
          )}
        </div>
      </div>
    </label>
  );
};
