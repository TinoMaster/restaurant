'use client'
import { LoadingCartPage } from '@/components/pages/cart/LoadingCartPage'
import { ProductCardCart } from '@/components/pages/cart/ProductCardCart'
import { Summary } from '@/components/pages/cart/Summary'
import useCartFav from '@/context/cartFavContext'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FaArrowLeft, FaCartArrowDown } from 'react-icons/fa6'

export default function CheckoutPage() {
   const { status } = useSession()
   const { cart } = useCartFav()

   if (status === 'loading') return <LoadingCartPage />
   if (status === 'unauthenticated') redirect('/login')

   return (
      <section className="container relative h-[100svh] flex flex-col justify-between">
         <div className="flex items-center justify-between py-5">
            <button
               onClick={() => window.history.back()}
               className="flex items-center gap-2"
            >
               <FaArrowLeft />
               indietro
            </button>
            <div className="font-serif flex items-center gap-2 justify-center">
               <FaCartArrowDown className="" />
               <h3 className="text-lg">Carrello</h3>
            </div>
         </div>
         <div className="grow">
            <div className="w-full overflow-auto max-w-[800px] mx-auto">
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
         <div className="max-w-[800px] w-full mx-auto">
            <Summary />
         </div>
      </section>
   )
}
