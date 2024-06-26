'use client'
import { useSimulatingOptions } from '@/hooks/useSimulatingOptions'

export const SimulateOptions = () => {
   const { handleLogin } = useSimulatingOptions()
   return (
      <div className="absolute bottom-4 right-4 p-3 gap-3 rounded-full z-30 flex items-center">
         <button
            onClick={handleLogin}
            className="relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 animate-bounce hover:animate-none"
         >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c5924a_0%,#fbf9f1_50%,#c5924a_100%)]" />
            <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-darkMode/80 px-3 py-1 font-medium text-white backdrop-blur-3xl">
               Simulate Admin Login <small> →</small>
            </span>
         </button>
      </div>
   )
}
