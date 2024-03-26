import { TAddressCreate } from '@/types/models/address'
import { z } from 'zod'

export const addressSchema = z
   .object({
      name: z
         .string()
         .min(3, 'Il nome deve avere almeno 3 caratteri')
         .max(50, 'Il nome deve avere al massimo 50 caratteri'),
      country: z.string().default('Italia'),
      city: z.string().default('Francavilla al mare'),
      street: z
         .string()
         .min(3, 'L' + "'" + 'indirizzo deve avere almeno 3 caratteri')
         .max(100, 'L' + "'" + 'indirizzo deve avere al massimo 100 caratteri'),
      postal_code: z
         .string()
         .min(3, 'Il codice postale deve avere almeno 3 caratteri')
         .max(50, 'Il codice postale deve avere al massimo 50 caratteri'),
   })
   .required()

export type TAddressCreateZod = z.infer<typeof addressSchema>
export const validateAddress = (address: TAddressCreate) => {
   return addressSchema.safeParse(address)
}
