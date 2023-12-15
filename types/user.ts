import { TOrder } from "./order";

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
}

export interface TUserMainInfo
  extends Pick<TUser, "name" | "email" | "phone" | "image"> {
  [key: string]: string;
}
