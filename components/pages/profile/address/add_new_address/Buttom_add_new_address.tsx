'use client'
import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

export const Buttom_add_new_address = () => {
   const { pending } = useFormStatus()

   useEffect(() => {
      if (pending) {
         toast.loading('Adding address...')
      }
      if (pending === false) {
         toast.dismiss()
      }

      return () => {
         toast.dismiss()
      }
   }, [pending])

   return (
      <button
         type="submit"
         className="btn-white"
         style={
            pending
               ? { pointerEvents: 'none', cursor: 'not-allowed', opacity: 0.5 }
               : {}
         }
         aria-disabled={pending}
      >
         Add {pending ? '...' : ''}
      </button>
   )
}
