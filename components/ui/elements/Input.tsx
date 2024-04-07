import { cn } from '@/libs/utils'
import { InputProps } from '@/types/common'

export const Input = ({
   id,
   type = 'text',
   label,
   className,
   ...props
}: InputProps) => {
   return (
      <label
         htmlFor={id}
         className="col-span-2 lg:col-span-1 space-y-1 lg:space-y-2"
      >
         <span className="font-bold text-gray-300/80 text-sm ml-1">
            {label}
         </span>
         <input
            id={id}
            type={type}
            autoComplete="off"
            className={cn('input', className)}
            {...props}
         />
      </label>
   )
}
