import Link from 'next/link'

export const RegistrationButton = () => {
   return (
      <Link
         href={'/register'}
         className="bg-pri-600 hover:bg-pri-500  px-3 py-1 rounded-full transition-colors"
      >
         Registrarse
      </Link>
   )
}
