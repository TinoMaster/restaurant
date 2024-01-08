import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
   const router = useRouter()
   const { status } = useSession()
   const [formLogin, setFormLogin] = useState<IFormLogin>(INITIAL_FORM)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      toast.loading('Iniciando sesión...')
      setLoading(true)
      const res = await signIn('credentials', {
         email: formLogin.email,
         password: formLogin.password,
         redirect: false,
      })

      if (res?.ok) {
         setFormLogin(INITIAL_FORM)
         toast.remove()
         router.push('/')
      } else {
         toast.remove()
         toast.error(res?.error || 'Error al iniciar sesión')
      }
      setLoading(false)
   }

   return {
      formLogin,
      loading,
      handleSubmit,
      setFormLogin,
      status,
   }
}
