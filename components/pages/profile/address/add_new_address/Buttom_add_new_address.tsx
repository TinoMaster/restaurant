'use client'
import { useFormStatus } from 'react-dom'

export const ButtomAddNewAddress = () => {
   const { pending } = useFormStatus()

   return (
      <button
         type="submit"
         className="btn-white w-full md:w-min my-2"
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
