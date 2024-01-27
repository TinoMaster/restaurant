import { BiSolidBusiness } from 'react-icons/bi'
import { MdNightlife } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'

export interface CardServiceProps {
   Icon: any
   title: string
   href: string
}

export const SERVICES_NAVIGATION: CardServiceProps[] = [
   {
      title: 'eventi',
      href: '/services/events',
      Icon: MdNightlife,
   },
   {
      title: 'locazione',
      href: '/services/rental',
      Icon: SiHomeassistantcommunitystore,
   },
   {
      title: 'business',
      href: '/services/business',
      Icon: BiSolidBusiness,
   },
]
