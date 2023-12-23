import { TUser } from "./user";

export interface TAddress {
  _id: string;
  name: string;
  street: string;
  country: string;
  city: string;
  postal_code: string;
  user: TUser[];
  createdAt: string;
  updatedAt: string;
}
