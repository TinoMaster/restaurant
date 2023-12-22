import { TOrder } from "./order";

export interface TUserSession {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  [key: string]: any;
}

export interface TUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  addresses: string[];
  image: string;
  isAdmin: boolean;
  isVerified: boolean;
  orders: TOrder[];
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

export interface TUserRegister {
  name: string;
  email: string;
  password: string;
}

export interface TUserMainInfo
  extends Pick<TUser, "name" | "email" | "phone" | "image"> {
  [key: string]: string;
}

export interface TDataUserToUpdate {
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: any;
}
