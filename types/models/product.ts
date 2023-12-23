import { TCategory } from "./categorie";
import { TIngredient } from "./ingredient";

export interface TProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: TCategory;
  ingredients: TIngredient[];
  createdAt: string;
  updatedAt: string;
}
