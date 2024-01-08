import { TUser } from "./user";

export interface TAddress {
  _id: string;
  name: string;
  street: string;
  country: string;
  city: string;
  postal_code: string;
  user: TUser["_id"];
  createdAt: string;
  updatedAt: string;
}

export interface TAddressCreate
  extends Omit<TAddress, "createdAt" | "updatedAt" | "_id"> {}

export interface TAddressInTheView
  extends Omit<TAddress, "user" | "createdAt" | "updatedAt" | "country"> {}
