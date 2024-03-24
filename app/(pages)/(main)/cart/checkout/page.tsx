'use client'
import { LoadingCartPage } from '@/components/pages/cart/LoadingCartPage'
import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import useCartFav from '@/context/cartFavContext'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function CheckoutPage() {
   const { status } = useSession()
   const { cart } = useCartFav()

   if (status === 'loading') return <LoadingCartPage />
   if (status === 'unauthenticated') redirect('/login')

   return (
      <div className="w-full md:px-10 container h-screen mt-5 lg:mt-10 ">
         <div className='container'>
            <h3 className="w-full">il Tuo Carrello</h3>
         </div>
         <div className="container relative md:w-full h-full lg:h-[70vh] min-h-[600px] rounded-md flex flex-col gap-4 lg:flex-row justify-between">
            <div className="w-full h-[55%] sm:h-full overflow-auto ">
               <div className="w-full space-y-5 py-4 px-4 md:px-0 md:pr-4 bg-black/20 sm:bg-transparent rounded-md">
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
            <div className="min-w-[380px] my-5 lg:my-0 h-[45%] sm:h-full">
               <Summary />
            </div>
         </div>
      </div>
   )
}
