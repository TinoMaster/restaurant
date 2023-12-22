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
];

export const addressProfilePageInputs: TInput[] = [
  {
    id: "Country_address",
    label: "Country",
    type: "text",
    placeholder: "Ej: Colombia",
    name: "country",
    editable: true,
  },
  {
    id: "city_address",
    label: "City",
    type: "text",
    placeholder: "Ej: Bogota",
    name: "city",
    editable: true,
  },
  {
    id: "street_address",
    label: "Street Address",
    type: "text",
    placeholder: "Ej: Calle Falsa 123",
    name: "street address",
    editable: true,
  },
  {
    id: "postal_code_address",
    label: "Postal Code",
    type: "number",
    placeholder: "Ej: 11001",
    name: "postal code",
    editable: true,
  },
];
