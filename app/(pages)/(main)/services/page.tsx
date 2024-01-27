import { SERVICES_PAGE } from '@/constants/routes.app'
import { redirect } from 'next/navigation'

export default function Page() {
   redirect(SERVICES_PAGE)
}
