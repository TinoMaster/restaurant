import { UseFormRegister } from 'react-hook-form'

export type TInputProps = {
   id?: string
   name: string
   label?: string
   type: string
   placeholder?: string
   value?: string | number | undefined | readonly string[]
   disabled?: boolean
   register: UseFormRegister<any>
   error?: string
}

export const InputAddNewAddress = ({
   id,
   type = 'text',
   placeholder,
   name,
   value,
   disabled = false,
   label,
   register,
   error,
}: TInputProps) => {
   return (
      <label htmlFor={id} className="col-span-1 space-y-1 lg:space-y-2">
         <span className="font-bold text-gray-300/80 text-sm ml-1">
            {label}
         </span>
         <input
            style={
               disabled
                  ? {
                       pointerEvents: 'none',
                       cursor: 'not-allowed',
                       opacity: 0.5,
                    }
                  : {}
            }
            id={id}
            type={type}
            placeholder={placeholder}
            className="input"
            defaultValue={value ? value : ''}
            disabled={disabled}
            autoComplete="off"
            {...register(name)}
         />
         {error && <p className="text-red-500 text-xs text-right absolute pl-1">{error}</p>}
      </label>
   )
}
