import { TLink } from '../types/common'

export const HOME_PAGE_NAME = 'Casa'
export const MENU_PAGE_NAME = 'Menu'
export const SERVICE_PAGE_NAME = 'Servizi'
export const HISTORY_PAGE_NAME = 'Storia'
export const CONTACT_PAGE_NAME = 'Contatti'

export const FIRST_GROUP_PLATE = 'antipasti'
export const SECOND_GROUP_PLATE = 'primi'
export const THIRD_GROUP_PLATE = 'secondi'
export const FOUR_GROUP_PLATE = 'contorni'
export const FIFT_GROUP_PLATE = 'bevande'
export const SIX_GROUP_PLATE = 'cocktail'
export const SEVEN_GROUP_PLATE = 'dolci'
export const EIGHT_GROUP_PLATE = 'vini'

export const linksPrincipalMenu: Array<TLink> = [
   {
      name: HOME_PAGE_NAME,
      href: '/',
   },
   {
      name: MENU_PAGE_NAME,
      href: '/menu/antipasti',
   },
   {
      name: SERVICE_PAGE_NAME,
      href: '/services',
   },
   {
      name: HISTORY_PAGE_NAME,
      href: '/history',
   },
   {
      name: CONTACT_PAGE_NAME,
      href: '/contacts',
   },
]

export const linksPageMenu: Array<TLink> = [
   {
      name: FIRST_GROUP_PLATE,
      href: '/menu/antipasti',
   },
   {
      name: SECOND_GROUP_PLATE,
      href: '/menu/primi',
   },
   {
      name: THIRD_GROUP_PLATE,
      href: '/menu/secondi',
   },
   {
      name: FOUR_GROUP_PLATE,
      href: '/menu/contorni',
   },
   {
      name: FIFT_GROUP_PLATE,
      href: '/menu/bevande',
   },
   {
      name: SIX_GROUP_PLATE,
      href: '/menu/cocktail',
   },
   {
      name: SEVEN_GROUP_PLATE,
      href: '/menu/dolci',
   },
   {
      name: EIGHT_GROUP_PLATE,
      href: '/menu/vini',
   },
]

export const firstPathnameMenuPage = linksPageMenu[0].href
