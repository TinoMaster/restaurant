import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import { authOptions } from '@/libs/authOptions'
import { getProductsCart } from '@/services/actions/user.actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function CheckoutPage() {
   const session = await getServerSession(authOptions)
   if (!session) {
      redirect('/login')
   }
   const response = await getProductsCart()
   if (!response) {
      redirect('/menu')
   }
   const cart = response.cart

   return (
      <div className="w-full md:px-10 container h-screen mt-5 lg:mt-10 ">
         <div className="container md:w-full h-full lg:h-[70vh] min-h-[600px] rounded-md flex flex-col gap-4 lg:flex-row justify-between">
            <div className="w-full max-h-[50vh]">
               <h3 className="w-full">il Tuo Carrello</h3>
               <div className="w-full space-y-5 overflow-auto py-4">
                  {cart.length > 0 ? (
                     cart.map((product) => (
                        <ProductCardCart key={product._id} product={product} />
                     ))
                  ) : (
                     <p className="text-center text-gray-400 text-lg">
                        No hay productos en el carrito
                     </p>
                  )}
               </div>
            </div>
            <div className="min-w-[380px] my-5 lg:my-0">
               <Summary />
            </div>
         </div>
      </div>
   )
}
