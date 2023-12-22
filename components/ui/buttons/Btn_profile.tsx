import React from "react";

interface TBtnProfileProps {
  name: string;
  trigger?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Btn_profile = ({
  name,
  trigger,
  type = "button",
  disabled = false,
}: TBtnProfileProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={trigger}
      className="btn-white disabled:bg-white/60 disabled:cursor-not-allowed"
    >
      {name}
    </button>
  );
};
