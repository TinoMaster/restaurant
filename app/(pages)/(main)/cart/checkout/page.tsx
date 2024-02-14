'use client'
import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import { useAppSelector } from '@/redux/hooks'

export default function CheckoutPage() {
   const { cart } = useAppSelector((state) => state.userReducer)
   return (
      <div className="w-full h-full md:px-10 container min-h-screen mt-5 lg:mt-10">
         <div className="container md:w-full lg:h-[70vh] min-h-[600px] rounded-md flex flex-wrap relative">
            <div className="w-full lg:w-2/3 h-full space-y-5 lg:p-10 overflow-auto lg:bg-black/10">
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
            <div className="w-full lg:w-1/3 h-full lg:py-20 lg:px-5 bg-white/5">
               <Summary />
            </div>
         </div>
      </div>
   )
}
