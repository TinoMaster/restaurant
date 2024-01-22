import Image from 'next/image'
import { FaCartArrowDown } from 'react-icons/fa6'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MotionButton, MotionDiv } from '../helpers/MotionDiv'
import { texturaCemento } from '@/utils/images'
import { TProduct } from '@/types/models/product'
import { formatPrice } from '@/utils/formatPrice'

interface MenuItemPlusImageProps {
   product: TProduct
   index?: number
}

export const MenuItemPlusImage = ({
   product,
   index,
}: MenuItemPlusImageProps) => {
   const { name, price, image, description, ingredients } = product

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
         className="col-span-1 max-w-md mx-auto bg-lightDarkMode rounded-xl overflow-hidden shadow-md min-w-[180px] lg:min-w-[270px]"
      >
         <div className="w-full h-44 lg:h-56 flex justify-center items-center relative">
            <Image
               width={400}
               height={400}
               className="w-full h-full object-cover absolute"
               src={texturaCemento}
               alt="imagen fondo del plato"
            />
            <div className="w-32 h-32 lg:w-44 lg:h-44 bg-primary/30 rounded-full z-10"></div>
         </div>
         <div className="p-2 lg:p-4">
            <h2 className="text-base lg:text-xl text-primary capitalize">
               {name}
            </h2>
            <div className='flex flex-col gap-3 my-2 text-sm'>
               <p className="text-gray-300 first-letter:capitalize">
                  {description}
               </p>
               <p className='capitalize'>{ingredients?.map((i) => i.name).join(', ')}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
               <span className="lg:text-xl text-primary font-bold text-sm">
                  {formatPrice(price)}
               </span>
               <div className="flex gap-2 items-center">
                  <button className="text-white/70 px-2 lg:text-2xl rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out">
                     <IoMdHeartEmpty />
                  </button>
                  <MotionButton
                     whileHover={{ y: [0, -5, 0, -5, 0] }}
                     className="bg-pri-800 text-white text-xs lg:text-base p-2 rounded-full focus:outline-none"
                  >
                     <FaCartArrowDown />
                  </MotionButton>
               </div>
            </div>
         </div>
      </MotionDiv>
   )
}
