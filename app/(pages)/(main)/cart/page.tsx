import { authOptions } from '@/libs/authOptions'
import { getProductsCart } from '@/services/actions/user.actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function CartPage() {
   const session = await getServerSession(authOptions)
   const productsCart = await getProductsCart(session?.user.sub || '')

   if (!productsCart) {
      return (
         <div className="w-full h-full container min-h-screen py-20 lg:py-32">
            <div className="w-full h-full bg-white/5 rounded-md flex flex-wrap relative">
               <div className="w-full h-full bg-white/5 p-5 lg:p-20">
                  <div className="w-full h-full p-5 bg-white/5 rounded-md">
                     <h3 className="text-3xl text-center">Summary</h3>
                     <div className="py-5 text-xl">
                        <div className="flex justify-between">
                           <p>Subtotal</p>
                           <p>$ 0.00</p>
                        </div>
                        <div className="flex justify-between">
                           <p>Shipping</p>
                           <p>$ 0.00</p>
                        </div>
                        <div className="flex justify-between">
                           <p>Total</p>
                           <p>$ 0.00</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   } else {
      redirect('/cart/checkout')
   }
}
