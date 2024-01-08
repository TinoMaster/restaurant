import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

interface LinkButtonProps {
   title: string
   href: string
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
   return (
      <Link
         href={href}
         className="btn btn-mediun btn-primary flex justify-center items-center gap-2 relative hover:space-x-3 "
      >
         <span className="transition-all">{title}</span>{' '}
         <FaArrowRightLong className="relative transition-all" />
      </Link>
   )
}
