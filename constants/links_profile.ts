import { TLink, TLinkWhitIcon } from '@/types/common'
import { CiUser } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoIosHeartEmpty } from 'react-icons/io'
import { PiAddressBookLight } from 'react-icons/pi'
import { TbShoppingBagCheck } from 'react-icons/tb'

export const linksProfile: TLinkWhitIcon[] = [
   {
      title: 'User info',
      href: '/profile/user_info',
      icon: CiUser,
   },
   {
      title: 'favoritos',
      href: '/profile/favorites',
      icon: IoIosHeartEmpty,
   },
   {
      title: 'direccion',
      href: '/profile/address',
      icon: PiAddressBookLight,
   },
   {
      title: 'mis compras',
      href: '/profile/orders',
      icon: TbShoppingBagCheck,
   },
   {
      title: 'notificaciones',
      href: '/profile/notifications',
      icon: IoIosNotificationsOutline,
   },
]

export const linksLogoProfile: TLinkWhitIcon[] = [
   {
      title: 'Mio Profilo',
      href: '/profile/user_info',
      icon: CiUser,
   },
   {
      title: 'favoritos',
      href: '/profile/favorites',
      icon: IoIosHeartEmpty,
   },
   {
      title: 'mis compras',
      href: '/profile/orders',
      icon: TbShoppingBagCheck,
   },
   {
      title: 'notificaciones',
      href: '/notifications',
      icon: IoIosNotificationsOutline,
   },
]

export const linksAdminPanel: TLink[] = [
   {
      title: 'Categories',
      href: '/profile/admin/categories',
   },
   {
      title: 'Ingredients',
      href: '/profile/admin/ingredients',
   },
   {
      title: 'Menu',
      href: '/profile/admin/menu',
   },
   {
      title: 'Users',
      href: '/profile/admin/users',
   },
]
