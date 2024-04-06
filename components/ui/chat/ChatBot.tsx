'use client'
import { useChat } from 'ai/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { MdOutlineSmartToy } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { RiSendPlaneFill } from 'react-icons/ri'

export const ChatBot = () => {
   const { messages, input, handleInputChange, handleSubmit } = useChat()
   const [openedChat, setOpenedChat] = useState(false)
   const { status } = useSession()
   const variant = {
      open: {
         x: 0,
         opacity: [0, 1],
      },
      closed: {
         x: '100vw',
         opacity: 0,
      },
   }

   if (status === 'loading') {
      return (
         <div className="w-14 h-14 fixed bottom-5 right-5 animate-pulse bg-white/10 rounded-full"></div>
      )
   }

   return (
      <div className="fixed bottom-5 right-0 z-40">
         <motion.div
            variants={variant}
            initial={openedChat ? 'open' : 'closed'}
            animate={openedChat ? 'open' : 'closed'}
            className={`w-screen h-svh min-h-[800px] lg:w-[30vw] fixed flex flex-col top-0 right-0 text-slate-200 bg-gradient-to-r from-darkMode via-lightDarkMode to-darkMode shadow-md py-2 overflow-hidden`}
         >
            <div className="container flex flex-col justify-between h-full">
               <div className="w-full overflow-y-auto grow">
                  <h1 className="text-3xl font-bold mb-4">Chatbot</h1>
                  <div className="flex flex-col gap-3 text-sm">
                     <div className="flex gap-2 items-center bg-gradient-to-tr from-pri-800 via-primary/80 to-pri-800 p-2 rounded-3xl w-11/12">
                        <small className="p-2 bg-white text-gray-800 rounded-full flex justify-center items-center">
                           <MdOutlineSmartToy />
                        </small>
                        <p>
                           Ciao da Pizzeria Albatros 🖐️, come posso aiutarti?
                        </p>
                     </div>
                     {/* Simulate user */}
                     <div className="flex items-center gap-2 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 p-2 rounded-3xl w-11/12 self-end">
                        <small className="p-2 bg-white text-gray-800 rounded-full flex justify-center items-center">
                           <FaUser />
                        </small>
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit.
                        </p>
                     </div>
                  </div>
                  {/* Simulate chat */}
                  {/* {messages.map((m) => (
                     <div key={m.id} className="whitespace-pre-wrap">
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                        {m.content}
                     </div>
                  ))} */}
               </div>

               <form
                  onSubmit={handleSubmit}
                  className="flex items-center mb-20 gap-2"
               >
                  <input
                     className="input p-2 grow"
                     value={input}
                     placeholder="Chiedici qualcosa sulla nostra pizzeria..."
                     onChange={handleInputChange}
                  />

                  <button
                     type="submit"
                     className="hover:cursor-pointer px-4 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 rounded-md h-full bg-darkContrast"
                  >
                     <RiSendPlaneFill className="text-3xl" />
                  </button>
               </form>
            </div>
         </motion.div>

         <button
            className={`w-14 h-14 relative ${openedChat ? 'animate-pulse focus:ring-1' : ''} bg-gradient-to-tr transition-all from-darkMode via-primary/50 to-darkMode border border-pri-400 self-end mr-4 flex justify-center items-center overflow-hidden rounded-full p-2 focus:outline-none  focus:ring-pri-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50`}
            onClick={() => setOpenedChat(!openedChat)}
         >
            <BsStars className="relative text-3xl" />
         </button>
      </div>
   )
}
