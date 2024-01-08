import Link from 'next/link'

export const LoginButton = () => {
   return (
      <Link href={'/login'} className="px-3 py-1 rounded-md">
         Login
      </Link>
   )
}
