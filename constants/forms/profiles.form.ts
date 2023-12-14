import { TInput } from "@/types/common";

/* inputs userInfo */
export const userInfoProfilePageInputs: TInput[] = [
  {
    id: "name_userInfo",
    label: "Name",
    type: "text",
    placeholder: "Introduce your name",
    name: "name",
  },
  {
    id: "email_userInfo",
    label: "Email",
    type: "email",
    placeholder: "Introduce your email",
    name: "email",
  },
  {
    id: "phone_userInfo",
    label: "Phone Number",
    type: "phone",
    placeholder: "Introduce your phone number",
    name: "phone",
  },
  {
    id: "passwordChange_userInfo",
    label: "Change Password",
    type: "password",
    placeholder: "Introduce your new password",
    name: "password",
  },
];

export const addressProfilePageInputs: TInput[] = [
  {
    id: "address_userInfo",
    label: "Address",
    type: "text",
    placeholder: "Introduce your address",
    name: "address",
  },
];
