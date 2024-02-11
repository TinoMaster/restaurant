import { ChangeCategoryName } from '@/services/actions/category.actions'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useCategoryName = (name: string, id: string) => {
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
      console.log(id)
      const res = await ChangeCategoryName(id, inputName)

      toast.remove()

      if (res) {
         toast.success('Categoria aggiornata')
         setEditionMode(false)
      } else {
         toast.error('Qualcosa non ha funzionato')
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
