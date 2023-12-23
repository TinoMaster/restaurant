import { TDataUserToUpdate, TUser } from "@/types/models/user";

export const validateName = (name: string) => {
  if (name.length < 3) {
    return false;
  }
  return true;
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateItalianPhone = (phone: string) => {
  const phoneRegex = /^3\d{9}$/;
  return phoneRegex.test(phone);
};

export const validateUserInfo = (
  { name = "", email = "", phone = "" }: TDataUserToUpdate,
  actualData: TUser
) => {
  if (
    name === actualData.name &&
    email === actualData.email &&
    phone === actualData.phone
  )
    return false;
  return (
    validateName(name) && validateEmail(email) && validateItalianPhone(phone)
  );
};
