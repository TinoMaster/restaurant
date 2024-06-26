import { TInput } from '@/types/common'

export enum InputsAddress {
   NAME = 'name',
   COUNTRY = 'country',
   CITY = 'city',
   STREET = 'street',
   POSTAL_CODE = 'postal_code',
}

/* inputs userInfo */

export const addressProfilePageInputs: TInput[] = [
   {
      id: 'name_address',
      label: 'Name',
      type: 'text',
      placeholder: 'Ej: My first address',
      name: InputsAddress.NAME,
      editable: true,
   },
   {
      id: 'Country_address',
      label: 'Country',
      type: 'text',
      placeholder: 'Ej: Colombia',
      name: InputsAddress.COUNTRY,
      editable: false,
      value: 'Italia',
   },
   {
      id: 'city_address',
      label: 'City',
      type: 'text',
      placeholder: 'Ej: Bogota',
      name: InputsAddress.CITY,
      editable: false,
      value: 'Francavilla al mare',
   },
   {
      id: 'street_address',
      label: 'Street Address',
      type: 'text',
      placeholder: 'Ej: Calle Falsa 123',
      name: InputsAddress.STREET,
      editable: true,
   },
   {
      id: 'postal_code_address',
      label: 'Postal Code',
      type: 'string',
      placeholder: 'Ej: 11001',
      name: InputsAddress.POSTAL_CODE,
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
      type: 'text',
      placeholder: 'Ej: 120',
      name: 'price',
      editable: true,
   },
]
