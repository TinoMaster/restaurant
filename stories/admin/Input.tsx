import { cn } from './utils'

export interface TInputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   id?: string
   name: string
   label?: string
   type: string
   value?: string | number | undefined | readonly string[]
   error?: string
}
export const Input = ({
   id,
   type = 'text',
   name,
   value,
   label,
   error,
   className,
   ...props
}: TInputProps) => {
   return (
      <label htmlFor={id} className="col-span-1 space-y-1 lg:space-y-2">
         <span className="font-bold text-gray-300/80 text-sm ml-1">
            {label}
         </span>
         <input
            id={id}
            type={type}
            className={cn('input', className)}
            defaultValue={value ? value : ''}
            autoComplete="off"
            {...props}
         />
         {error && (
            <p className="text-red-500 text-xs text-right absolute pl-1">
               {error}
            </p>
         )}
      </label>
   )
}
