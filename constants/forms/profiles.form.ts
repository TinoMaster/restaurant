import { TInput } from "@/types/common";

/* inputs userInfo */
export const userInfoProfilePageInputs: TInput[] = [
  {
    id: "name_userInfo",
    label: "Name",
    type: "text",
    placeholder: "Introduce your name",
    name: "name",
    editable: true,
  },
  {
    id: "email_userInfo",
    label: "Email",
    type: "email",
    placeholder: "Introduce your email",
    name: "email",
    editable: false,
  },
  {
    id: "phone_userInfo",
    label: "Phone Number",
    type: "tel",
    placeholder: "Introduce your phone number",
    name: "phone",
    editable: false,
  },
  {
    id: "passwordChange_userInfo",
    label: "Change Password",
    type: "password",
    placeholder: "Introduce your new password",
    name: "password",
    editable: true,
  },
];

export const addressProfilePageInputs: TInput[] = [
  {
    id: "address_userInfo",
    label: "Address",
    type: "text",
    placeholder: "Introduce your address",
    name: "address",
    editable: true,
  },
];
