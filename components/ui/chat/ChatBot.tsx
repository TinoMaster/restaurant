'use client'
import { useChat } from 'ai/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { MdOutlineSmartToy } from 'react-icons/md'

export const ChatBot = () => {
   const { messages, input, handleInputChange, handleSubmit } = useChat()
   const [openedChat, setOpenedChat] = useState(false)
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

   return (
      <div className="flex flex-col w-full max-w-md fixed bottom-5 right-0 z-40">
         <motion.div
            variants={variant}
            initial={openedChat ? 'open' : 'closed'}
            animate={openedChat ? 'open' : 'closed'}
            className={`w-screen h-svh min-h-[800px] lg:hidden fixed flex flex-col top-0 right-0 text-slate-200 bg-gradient-to-r from-darkMode via-lightDarkMode to-darkMode shadow-md py-2 overflow-hidden`}
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

               <form onSubmit={handleSubmit}>
                  <input
                     className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                     value={input}
                     placeholder="Chiedici qualcosa sulla nostra pizzeria..."
                     onChange={handleInputChange}
                  />
               </form>
            </div>
         </motion.div>

         <button
            className="p-2 w-10 h-10 absolute right-5 -top-8 flex justify-center items-center rounded-full bg-primary border border-gray-300 shadow-xl z-50"
            onClick={() => setOpenedChat(!openedChat)}
         >
            <MdOutlineSmartToy className="w-6 h-6" />
         </button>
      </div>
   )
}
