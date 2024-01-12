import { FIRS_PATHNAME_MENU_PAGE } from '@/constants/links_navbar'
import { redirect } from 'next/navigation'

export default function MenuPage() {
   redirect(FIRS_PATHNAME_MENU_PAGE)
}
