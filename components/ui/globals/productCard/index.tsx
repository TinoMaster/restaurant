import { TProduct } from '@/types/models/product'
import { formatPrice } from '@/utils/formatPrice'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'
import { FaCartArrowDown } from 'react-icons/fa6'
import { MotionButton, MotionDiv } from '../../../helpers/MotionDiv'
import { ButtonAddFav } from './ButtonAddFav'
import { ButtonAddCart } from './ButtonAddCart'

interface MenuItemPlusImageProps {
   product: TProduct
   index?: number
}

export const ProductCard = ({ product, index }: MenuItemPlusImageProps) => {
   const { name, price, image, description, ingredients, _id } = product

   return (
      <MotionDiv
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: index ? index * 0.1 : 0 }}
         whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.2, type: 'spring' },
            cursor: 'pointer',
         }}
         className="col-span-1 max-w-md mx-auto bg-lightDarkMode rounded-xl overflow-hidden shadow-md w-full relative flex flex-col"
      >
         <div className="w-full h-36 lg:h-56 flex justify-center items-center relative">
            <Image
               width={400}
               height={400}
               className="w-full h-full object-cover absolute"
               src={texturaCemento}
               alt="imagen fondo del plato"
            />
            <div className="w-32 h-32 lg:w-44 lg:h-44 bg-primary/30 rounded-full z-10"></div>
         </div>
         <div className="px-2 py-1 lg:p-4 grow flex flex-col">
            <h2 className="text-sm lg:text-xl text-primary capitalize">
               {name}
            </h2>
            <div className="flex flex-col gap-1 my-1 text-[10px] md:text-base grow">
               <p className="first-letter:capitalize grow text-pri-300/50">
                  {description}
               </p>
               <div className="flex flex-col">
                  <p className="text-[8px] md:text-sm font-bold text-primary/70">
                     ingredients:
                  </p>
                  <p className="capitalize text-[8px] md:text-sm text-pri-300/50">
                     {ingredients?.map((i) => i.name).join(', ')}
                  </p>
               </div>
            </div>
            <div className="flex justify-between items-center mt-4">
               <span className="lg:text-xl text-primary font-bold text-sm">
                  {formatPrice(price)}
               </span>
               <div className="flex gap-2 items-center">
                  <ButtonAddFav productId={_id} />
                  <ButtonAddCart product={product} />
               </div>
            </div>
         </div>
      </MotionDiv>
   )
}
