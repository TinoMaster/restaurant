export interface TIngredient {
   _id: string
   name: string
   createdAt: string
   updatedAt: string
}

export interface TIngredientCreate extends Pick<TIngredient, 'name'> {}
