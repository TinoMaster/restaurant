import { updateProduct } from '@/services/actions/product.action'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useName = ({ name, id }: { name: string; id: string }) => {
   const [editionMode, setEditionMode] = useState(false)
   const [inputName, setInputName] = useState(name)

   const onChangeEditionMode = () => {
      setEditionMode(true)
   }

   const onCancelChange = () => {
      setEditionMode(false)
   }

   const onConfirmChange = async () => {
      toast.loading('Saving...')
      const res = await updateProduct(id, { name: inputName })

      toast.remove()

      if (res) {
         toast.success('Name saved')
         setEditionMode(false)
      } else {
         toast.error('Something went wrong')
         setEditionMode(false)
         setInputName(name)
      }
   }

   const onChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputName(e.target.value)
   }

   return {
      editionMode,
      inputName,
      onChangeEditionMode,
      onCancelChange,
      onConfirmChange,
      onChangeInputName,
   }
}
