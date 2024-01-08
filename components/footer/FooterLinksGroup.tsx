import { TGroupFooterLink } from '@/types/common'
import Link from 'next/link'

interface FooterLinksGroupProps {
   group: TGroupFooterLink
}

export const FooterLinksGroup = ({ group }: FooterLinksGroupProps) => {
   const { category, links } = group
   return (
      <div className="w-full max-w-[250px] m-auto">
         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
            {category}
         </h2>
         <nav className="list-none mb-10">
            {links.map((link) => (
               <li key={link.name}>
                  <Link
                     href={link.href}
                     className="text-gray-400 hover:text-white capitalize"
                  >
                     {link.name}
                  </Link>
               </li>
            ))}
         </nav>
      </div>
   )
}
