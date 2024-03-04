import React from 'react'

interface TBtnProfileProps {
   name: string
   trigger?: () => void
   type?: 'button' | 'submit' | 'reset'
   disabled?: boolean
   title?: string
}

export const BtnProfile = ({
   name,
   trigger,
   type = 'button',
   disabled = false,
   title = 'button',
}: TBtnProfileProps) => {
   return (
      <button
         title={title}
         disabled={disabled}
         type={type}
         onClick={trigger}
         className="btn-white disabled:bg-pri-300/40 disabled:cursor-not-allowed"
      >
         {name}
      </button>
   )
}
