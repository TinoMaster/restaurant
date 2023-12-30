import React from "react";

interface TBtnProfileProps {
  name: string;
  trigger?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  title?: string;
}

export const Btn_profile = ({
  name,
  trigger,
  type = "button",
  disabled = false,
  title = "button",
}: TBtnProfileProps) => {
  return (
    <button
      title={title}
      disabled={disabled}
      type={type}
      onClick={trigger}
      className="btn-white disabled:bg-white/60 disabled:cursor-not-allowed"
    >
      {name}
    </button>
  );
};
