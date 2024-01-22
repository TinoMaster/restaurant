import { TLink } from '../types/common'
import {
   CONTACT_PAGE,
   HISTORY_PAGE,
   HOME_PAGE,
   MENU_PAGE,
   SERVICES_PAGE,
} from './routes.app'

export const HOME_PAGE_NAME = 'Casa'
export const MENU_PAGE_NAME = 'Menu'
export const SERVICE_PAGE_NAME = 'Servizi'
export const HISTORY_PAGE_NAME = 'Storia'
export const CONTACT_PAGE_NAME = 'Contatti'

export const linksPrincipalMenu: Array<TLink> = [
   {
      name: HOME_PAGE_NAME,
      href: HOME_PAGE,
   },
   {
      name: MENU_PAGE_NAME,
      href: MENU_PAGE,
   },
   {
      name: SERVICE_PAGE_NAME,
      href: SERVICES_PAGE,
   },
   {
      name: HISTORY_PAGE_NAME,
      href: HISTORY_PAGE,
   },
   {
      name: CONTACT_PAGE_NAME,
      href: CONTACT_PAGE,
   },
]
