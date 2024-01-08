import { TInput } from '@/types/common'

/* inputs userInfo */
export const userInfoProfilePageInputs: TInput[] = [
   {
      id: 'name_userInfo',
      label: 'Name',
      type: 'text',
      placeholder: 'Introduce your name',
      name: 'name',
      editable: true,
   },
   {
      id: 'email_userInfo',
      label: 'Email',
      type: 'email',
      placeholder: 'Introduce your email',
      name: 'email',
      editable: false,
   },
   {
      id: 'phone_userInfo',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Introduce your phone number',
      name: 'phone',
      editable: false,
   },
]

export const addressProfilePageInputs: TInput[] = [
   {
      id: 'name_address',
      label: 'Name',
      type: 'text',
      placeholder: 'Ej: My first address',
      name: 'name',
      editable: true,
   },
   {
      id: 'Country_address',
      label: 'Country',
      type: 'text',
      placeholder: 'Ej: Colombia',
      name: 'country',
      editable: true,
   },
   {
      id: 'city_address',
      label: 'City',
      type: 'text',
      placeholder: 'Ej: Bogota',
      name: 'city',
      editable: true,
   },
   {
      id: 'street_address',
      label: 'Street Address',
      type: 'text',
      placeholder: 'Ej: Calle Falsa 123',
      name: 'street_address',
      editable: true,
   },
   {
      id: 'postal_code_address',
      label: 'Postal Code',
      type: 'string',
      placeholder: 'Ej: 11001',
      name: 'postal_code',
      editable: true,
   },
]

export const menuItemsProfilePageInputs: TInput[] = [
   {
      id: 'name_item',
      label: 'Name',
      type: 'text',
      placeholder: 'Ej: Coca Cola',
      name: 'name',
      editable: true,
   },
   {
      id: 'price_item',
      label: 'Price',
      type: 'number',
      placeholder: 'Ej: 120',
      name: 'price',
      editable: true,
   },
]
