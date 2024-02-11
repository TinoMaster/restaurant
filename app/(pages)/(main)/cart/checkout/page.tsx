'use client'
import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import { useAppSelector } from '@/redux/hooks'

export default function CheckoutPage() {
   const { cart } = useAppSelector((state) => state.userReducer)
   return (
      <div className="w-full h-full md:px-10 container min-h-screen py-20 lg:py-32">
         <div className="w-full lg:h-[70vh] min-h-[600px] rounded-md flex flex-wrap relative">
            <div className="w-full lg:w-2/3 h-full space-y-5 p-5 lg:p-20 overflow-auto lg:bg-black/10">
               <h3>Shopping Cart</h3>
               {cart.length > 0 ? (
                  cart?.map((product) => (
                     <ProductCardCart key={product._id} product={product} />
                  ))
               ) : (
                  <p className="text-center text-gray-400 text-lg">
                     No hay productos en el carrito
                  </p>
               )}
            </div>
            <div className="w-full lg:w-1/3 h-full p-5 lg:py-20 bg-white/5">
               <Summary />
            </div>
         </div>
      </div>
   )
}
