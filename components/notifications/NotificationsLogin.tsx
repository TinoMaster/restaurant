import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MotionDiv } from "../MotionDiv";

interface NotificationsLoginProps {
  type: "success" | "error";
  message: string;
}

export const NotificationsLogin = ({
  type,
  message,
}: NotificationsLoginProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`absolute flex justify-center items-center gap-4 right-5 top-24 ${
        type === "success" ? "bg-green-300/50" : "bg-red-300/50"
      } p-3 lg:p-5 rounded-lg z-20 text-white font-light`}
    >
      <MdOutlineNotificationsActive className="text-2xl" />
      <p className="capitalize">{message}</p>
    </MotionDiv>
  );
};
