'use client'
import { getCartAndFavsIds } from '@/services/actions/user.actions'
import { user } from '@/services/user'
import { TCartFavIds } from '@/types/models/product'
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type ContextState = {
   amount: {
      cart: number
      fav: number
   }
   favoritesIds: string[]
   cartIds: string[]
   removeFromCart(productId: string): void
   removeFromFavorites(productId: string): void
   addCart(productId: string): void
   addFavorite(productId: string): void
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
   const [favoritesIds, setFavoritesIds] = useState<string[]>([])
   const [cartIds, setCartIds] = useState<string[]>([])

   useEffect(() => {
      getCartAndFavsIds().then((data: TCartFavIds | false) => {
         if (!data) return
         setCartIds(data?.cart)
         setFavoritesIds(data?.favorites)
         setAmount({
            cart: data.cart.length,
            fav: data.favorites.length,
         })
      })
   }, [])

   /* Functions */
   async function addFavorite(productId: string) {
      setFavoritesIds([...favoritesIds, productId])
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

      const saved = await user.addOrRemoveProductToFavorites(productId)

      if (!saved.success) {
         setFavoritesIds(favoritesIds.filter((id) => id !== productId))
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

   async function removeFromFavorites(productId: string) {
      setFavoritesIds(favoritesIds.filter((id) => id !== productId))
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

      const saved = await user.addOrRemoveProductToFavorites(productId)

      if (!saved.success) {
         setFavoritesIds([...favoritesIds, productId])
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

   async function addCart(productId: string) {
      setCartIds([...cartIds, productId])
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

      const saved = await user.addOrRemoveProductToCart(productId)

      if (!saved.success) {
         setCartIds(cartIds.filter((id) => id !== productId))
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

   async function removeFromCart(productId: string) {
      setCartIds(cartIds.filter((id) => id !== productId))
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

      const removed = await user.addOrRemoveProductToCart(productId)

      if (!removed.success) {
         setCartIds([...cartIds, productId])
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

   const data = {
      amount,
      favoritesIds,
      cartIds,
      addFavorite,
      removeFromFavorites,
      addCart,
      removeFromCart,
   }
   return (
      <CartFavContext.Provider value={data}>{children}</CartFavContext.Provider>
   )
}

export default useCartFav
