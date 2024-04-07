import { signIn, useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface IFormLogin {
   email: string
   password: string
}

const INITIAL_FORM: IFormLogin = {
   email: '',
   password: '',
}

export const useLogin = () => {
   const searchParams = useSearchParams()
   const callbackUrl = searchParams.get('callbackUrl')
   const [formLogin, setFormLogin] = useState<IFormLogin>(INITIAL_FORM)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      toast.loading('Iniziando sessione...')
      setLoading(true)
      const res = await signIn('credentials', {
         email: formLogin.email,
         password: formLogin.password,
         redirect: false,
         callbackUrl: callbackUrl ?? '/',
      })
      toast.remove()

      if (res?.ok) {
         toast.success('Sessione iniziata con successo...')
         setFormLogin(INITIAL_FORM)
         window.location.href = callbackUrl ?? '/'
      } else {
         toast.error('Credenziali errate')
      }
      setLoading(false)
   }

   return {
      formLogin,
      loading,
      handleSubmit,
      setFormLogin,
   }
}
