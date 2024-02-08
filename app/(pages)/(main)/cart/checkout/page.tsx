'use client'
import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import { useAppSelector } from '@/redux/hooks'

export default function CheckoutPage() {
   const { cart } = useAppSelector((state) => state.userReducer)
   return (
      <div className="w-full h-full container min-h-screen py-20 lg:py-32">
         <div className="w-full h-[70vh] min-h-[600px] bg-white/5 rounded-md flex flex-wrap relative">
            <div className="w-full lg:w-2/3 h-full space-y-5 bg-black/20 p-5 lg:p-20 overflow-auto">
               <h3>Shopping Cart</h3>
               {cart?.map((product) => (
                  <ProductCardCart key={product._id} product={product} />
               ))}
            </div>
            <div className="w-full lg:w-1/3 h-full bg-white/5 p-5 lg:py-20">
               <Summary />
            </div>
         </div>
      </div>
   )
}
