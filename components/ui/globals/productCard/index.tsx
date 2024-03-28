import { formatPrice } from '@/libs/utils'
import { TProduct } from '@/types/models/product'
import { texturaCemento } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv } from '../../../helpers/MotionDiv'
import { ButtonAddCart } from './ButtonAddCart'
import { ButtonAddFav } from './ButtonAddFav'

interface MenuItemPlusImageProps {
   product: TProduct
   index?: number
}

export const ProductCard = ({ product, index }: MenuItemPlusImageProps) => {
   const { name, price, image, description, ingredients, available } = product

   return (
      <>
         {/* <DialogProduct product={product} /> */}{' '}
         {/* Ejemplo con dialog de view product 👆 */}
         <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index ? index * 0.1 : 0 }}
            whileHover={{
               scale: 1.01,
               transition: { delay: 0, duration: 0.2, type: 'spring' },
               cursor: 'pointer',
            }}
            className="col-span-1 max-w-md mx-auto bg-lightDarkMode rounded-xl overflow-hidden shadow-md w-full relative flex flex-col gap-2"
         >
            <Link
               href={`/viewProduct/${product._id}`}
               className="w-full h-36 lg:h-56 flex justify-center items-center relative"
            >
               <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-cover absolute brightness-150"
                  src={texturaCemento}
                  alt="imagen fondo del plato"
               />
               <div className="w-full h-full py-2 relative z-10">
                  <Image
                     width={200}
                     height={200}
                     className="w-full h-full object-contain"
                     src={image}
                     alt="imagen del plato"
                  />
               </div>
            </Link>
            <div className="px-2 py-1 lg:p-4 grow flex flex-col relative">
               <p className="text-gray-200 bg-red-400/50 px-2 rounded-md text-xs absolute right-0 -top-4">
                  {!available && 'Non disponibile'}
               </p>
               <h2 className="text-sm lg:text-lg text-primary capitalize">
                  {name}
               </h2>
               <div className="flex flex-col gap-1 text-[9px] md:text-xs capitalize grow">
                  <div className="flex flex-col grow">
                     <p className="text-pri-300/70">
                        {ingredients?.map((i) => i.name).join(', ')}
                     </p>
                  </div>
                  <p className="first-letter:capitalize grow text-pri-300/70">
                     {`-${description || 'No description'}-`}
                  </p>
               </div>
               <div className="flex justify-between items-center mt-4">
                  <span className="lg:text-base text-primary font-bold text-sm">
                     {formatPrice(price)}
                  </span>
                  <div className="flex gap-4 items-center">
                     <ButtonAddFav product={product} />
                     <ButtonAddCart product={product} />
                  </div>
               </div>
            </div>
         </MotionDiv>
      </>
   )
}
