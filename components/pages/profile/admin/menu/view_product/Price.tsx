'use client'
import { ConfirmOrCancelInputChanges } from '@/components/ui/buttons/ConfirmOrCancelInputChanges'
import { EditInput } from '@/components/ui/buttons/EditInput'
import { updateProduct } from '@/services/actions/product.action'
import { formatPrice } from '@/utils/formatPrice'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const Price = ({ price, id }: { price: number; id: string }) => {
   const [editionMode, setEditionMode] = useState(false)
   const [inputPrice, setInputPrice] = useState(price.toString())

   const handleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputPrice(e.target.value)
   }

   const handleConfirm = async (id: string, inputPrice: string) => {
      if (isNaN(Number(inputPrice))) {
         toast.error('Please enter a valid number')
      } else {
         console.log(inputPrice, price.toString())
         if (inputPrice !== price.toString()) {
            toast.loading('Saving...')
            const res = await updateProduct(id, { price: Number(inputPrice) })

            toast.remove()

            if (res) {
               toast.success('Price saved')
               setEditionMode(false)
            } else {
               toast.error('Something went wrong')
            }
         } else {
            setEditionMode(false)
         }
      }
   }

   const onCancel = () => {
      setEditionMode(false)
      setInputPrice(price.toString())
   }

   return (
      <div className="flex items-center gap-2">
         {!editionMode ? (
            <span className="title-font font-medium text-2xl text-white">
               {formatPrice(price)}
            </span>
         ) : (
            <input
               onChange={handleChenge}
               value={inputPrice}
               defaultValue={price}
               type="text"
               className="input"
            />
         )}
         {!editionMode ? (
            <EditInput onClick={() => setEditionMode(true)} />
         ) : (
            <ConfirmOrCancelInputChanges
               onConfirm={() => handleConfirm(id, inputPrice)}
               onCancel={onCancel}
            />
         )}
      </div>
   )
}
