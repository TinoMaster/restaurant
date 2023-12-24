import { TProduct } from "./product";

export interface TCategory {
  _id: string;
  name: string;
  image?: string;
  description?: string;
  products?: TProduct["_id"][] | TProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface TCategoryCreate {
  name: string;
}
