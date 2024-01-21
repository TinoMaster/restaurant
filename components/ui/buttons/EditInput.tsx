import { FiEdit } from 'react-icons/fi'

export const EditInput = ({ onClick }: { onClick: () => void }) => {
   return (
      <button onClick={onClick} className="bg-lightDarkMode p-2 rounded-full">
         <FiEdit className="text-sm" />
      </button>
   )
}
