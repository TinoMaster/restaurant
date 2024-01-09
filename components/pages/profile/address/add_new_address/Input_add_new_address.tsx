import { TInputProps } from '@/types/common'

export const InputAddNewAddress = ({
   id,
   type = 'text',
   placeholder,
   name,
   onChange,
   value,
   disabled = false,
   label,
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
            name={name}
            className="input"
            /* value={value} */
            defaultValue={value}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
         />
      </label>
   )
}
