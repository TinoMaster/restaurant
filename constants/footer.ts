import { TGroupFooterLink } from '@/types/common'
import { linksPageMenu, linksPrincipalMenu } from './links_navbar'

export const footerLinks: TGroupFooterLink[] = [
   {
      category: 'pages',
      links: linksPrincipalMenu,
   },
   {
      category: 'plates',
      links: linksPageMenu,
   },
   {
      category: 'other pages',
      links: linksPrincipalMenu,
   },
]
