import { updateProduct } from '@/services/actions/product.action'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useDescription = ({
   description,
   id,
}: {
   description: string
   id: string
}) => {
   const [editionMode, setEditionMode] = useState(false)
   const [textAreaText, setTextAreaText] = useState(description)
   const onConfirmChange = async () => {
      toast.loading('Saving...')
      const res = await updateProduct(id, { description: textAreaText })

      toast.remove()

      if (res) {
         toast.success('Description saved')
         setEditionMode(false)
      } else {
         toast.error('Something went wrong')
         setEditionMode(false)
         setTextAreaText(description)
      }
   }

   const onCancelChange = () => {
      setTextAreaText(description)
      setEditionMode(false)
   }

   const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaText(e.target.value)
   }

   const onChangeEditionMode = () => {
      setEditionMode(true)
   }

   return {
      editionMode,
      textAreaText,
      onConfirmChange,
      onCancelChange,
      onChangeTextArea,
      onChangeEditionMode,
   }
}
