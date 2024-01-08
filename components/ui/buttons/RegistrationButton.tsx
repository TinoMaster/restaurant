import Link from 'next/link'

export const RegistrationButton = () => {
   return (
      <Link
         href={'/register'}
         className="bg-primaryPal-600 hover:bg-primaryPal-500  px-3 py-1 rounded-full transition-colors"
      >
         Registrarse
      </Link>
   )
}
