'use client'
import { getCartAndFavsIds } from '@/services/actions/user.actions'
import { user } from '@/services/user'
import {
   TCartFav,
   TProduct,
   TProductInCartPopulated,
} from '@/types/models/product'
import { useSession } from 'next-auth/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type ContextState = {
   amount: {
      cart: number
      fav: number
   }
   favorites: TProduct[]
   cart: TProductInCartPopulated[]
   summaryCart: number
   removeFromCart(product: TProduct): void
   removeFromFavorites(product: TProduct): void
   addCart(product: TProduct): void
   addFavorite(product: TProduct): void
   addOrRemoveQuantity(productId: string, quantity: number): void
}

const CartFavContext = createContext<ContextState | null>(null)

const useCartFav = (): ContextState => {
   const context = useContext(CartFavContext)
   if (!context) throw new Error('Please use ThemeProvider in parent component')
   return context
}

export const CartFavProvider = ({
   children,
}: {
   children: React.ReactNode
}) => {
   const [amount, setAmount] = useState({
      cart: 0,
      fav: 0,
   })
   const [favorites, setFavorites] = useState<TProduct[]>([])
   const [cart, setCart] = useState<TProductInCartPopulated[]>([])
   const { data: session } = useSession()

   const summaryCart = cart.reduce((acc, product) => {
      return acc + product.quantity * product.productId.price
   }, 0)

   useEffect(() => {
      getCartAndFavsIds().then((data: TCartFav | false) => {
         if (!data) return
         setCart(data?.cart)
         setFavorites(data?.favorites)
         setAmount({
            cart: data.cart.length,
            fav: data.favorites.length,
         })
      })
   }, [])

   /* Functions */
   async function addFavorite(product: TProduct) {
      setFavorites([...favorites, product])
      setAmount({
         ...amount,
         fav: amount.fav + 1,
      })

      toast.success('Added to favorites', {
         style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
         },
         icon: '❤️',
      })

      const saved = await user.addOrRemoveProductToFavorites(product._id)

      if (!saved.success) {
         setFavorites(favorites.filter((p) => p._id !== product._id))
         setAmount({
            ...amount,
            fav: amount.fav - 1,
         })
         toast.error('ha ocurrido un error', {
            style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
            },
         })
      }
   }

   async function removeFromFavorites(product: TProduct) {
      setFavorites(favorites.filter((p) => p._id !== product._id))
      setAmount({
         ...amount,
         fav: amount.fav - 1,
      })

      toast.success('Removed from favorites', {
         style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
         },
         icon: '❤️',
      })

      const saved = await user.addOrRemoveProductToFavorites(product._id)

      if (!saved.success) {
         setFavorites([...favorites, product])
         setAmount({
            ...amount,
            fav: amount.fav + 1,
         })
         toast.error('ha ocurrido un error', {
            style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
            },
         })
      }
   }

   async function addCart(product: TProduct) {
      setCart([...cart, { productId: product, quantity: 1 }])
      setAmount({
         ...amount,
         cart: amount.cart + 1,
      })
      toast.success('Added to cart', {
         style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
         },
         icon: '🛒',
      })

      const saved = await user.addOrRemoveProductToCart(product._id)

      if (!saved.success) {
         setCart(cart.filter((p) => p.productId._id !== product._id))
         setAmount({
            ...amount,
            cart: amount.cart - 1,
         })
         toast.error('ha ocurrido un error', {
            style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
            },
         })
      }
   }

   async function removeFromCart(product: TProduct) {
      setCart(cart.filter((p) => p.productId._id !== product._id))
      setAmount({
         ...amount,
         cart: amount.cart - 1,
      })

      toast.success('Removed from cart', {
         style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
         },
         icon: '🛒',
      })

      const removed = await user.addOrRemoveProductToCart(product._id)

      if (!removed.success) {
         setCart([...cart, { productId: product, quantity: 1 }])
         setAmount({
            ...amount,
            cart: amount.cart + 1,
         })

         toast.error('ha ocurrido un error', {
            style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
            },
         })
      }
   }

   async function addOrRemoveQuantity(productId: string, quantity: number) {
      const previousCart = cart

      const updatedCart = cart.map((p) => {
         if (p.productId._id === productId) {
            return { productId: p.productId, quantity, _id: p._id }
         }
         return p
      })
      setCart(updatedCart)

      const saved = await user.addOrRemoveProductQuantity(
         session?.user.sub ?? '',
         productId,
         quantity
      )

      if (!saved) {
         setCart(previousCart)
         toast.error('ha ocurrido un error', {
            style: {
               borderRadius: '10px',
               background: '#333',
               color: '#fff',
            },
         })
      }
   }

   const data = {
      amount,
      favorites,
      cart,
      summaryCart,
      addFavorite,
      removeFromFavorites,
      addCart,
      removeFromCart,
      addOrRemoveQuantity,
   }
   return (
      <CartFavContext.Provider value={data}>{children}</CartFavContext.Provider>
   )
}

export default useCartFav
