import { IconType } from 'react-icons'

export const convertIconToString = (icon: IconType) => {
   return JSON.stringify(icon)
}

export const convertStringToIcon = (icon: string) => {
   return JSON.parse(icon)
}
