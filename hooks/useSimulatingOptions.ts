import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export const useSimulatingOptions = () => {
   const {isAdmin,emailVerified,phoneVerified} = useAppSelector((state) => state.userReducer)
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleMenu = () => {
      setMenuOpen(!menuOpen)
   }

   return { menuOpen, toggleMenu }
}
