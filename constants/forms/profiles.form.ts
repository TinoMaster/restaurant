import { TInput } from "@/types/common";

/* inputs userInfo */
export const userInfoProfilePageInputs: TInput[] = [
  {
    id: "name_userInfo",
    label: "Name",
    type: "text",
    placeholder: "Name",
    name: "name",
  },
  {
    id: "email_userInfo",
    label: "Email",
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    id: "phone_userInfo",
    label: "Phone Number",
    type: "phone",
    placeholder: "Phone",
    name: "phone",
  },
  {
    id: "passwordChange_userInfo",
    label: "Change Password",
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];
