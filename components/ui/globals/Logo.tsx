import Link from 'next/link'
import { GiHotMeal } from 'react-icons/gi'

export const Logo = () => {
   return (
      <Link href={'/'} className="flex flex-col items-center">
         <GiHotMeal className=" text-white" />
         <h1 className="text-xl text-white">ALBATROS</h1>
      </Link>
   )
}
