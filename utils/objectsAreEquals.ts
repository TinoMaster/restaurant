import { TIngredient } from '@/types/models/ingredient'

export function objectsAreIquals(obj1: TIngredient, obj2: TIngredient) {
   return JSON.stringify(obj1) === JSON.stringify(obj2)
}
