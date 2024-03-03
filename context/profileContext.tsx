'use client'
import { useAppDispatch } from '@/redux/hooks'
import { login, logout } from '@/redux/reducers/user_slice'
import { getUser } from '@/services/actions/user.actions'
import { useSession } from 'next-auth/react'
import React, { createContext, useEffect } from 'react'
import toast from 'react-hot-toast'

type ProfileState = {}

const ProfileContext = createContext<ProfileState | null>(null)

export const ProfileProvider = ({
   children,
}: {
   children: React.ReactNode
}) => {
   const Session = useSession()
   const { data: session, status } = Session
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (status === 'authenticated') {
         getUser(session?.user.sub).then((response) => {
            if (response) {
               dispatch(login(response))
            } else {
               toast.error('Hubo un error al cargar la informacion')
               dispatch(logout())
            }
         })
      }

      /* if (status === 'unauthenticated') {
         dispatch(logout())
      } */
   }, [status, dispatch, session])

   const data = {}
   return (
      <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
   )
}
