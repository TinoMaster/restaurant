'use client'
import { useFormStatus } from 'react-dom'

export const Buttom_add_new_address = () => {
   const { pending } = useFormStatus()

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
