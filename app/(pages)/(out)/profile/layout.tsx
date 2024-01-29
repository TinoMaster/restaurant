import { Sidebar } from '@/components/pages/profile/Sidebar'
import { authOptions } from '@/libs/authOptions'
import { img_about_us2 } from '@/utils/images'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Layout({
   children,
}: {
   children: React.ReactNode
}) {
   const session = await getServerSession(authOptions)

   if (!session) {
      redirect('/login')
   }
   return (
      <div className="flex justify-center items-center w-screen h-screen max-h-[100svh] text-gray-300">
         <div className="absolute w-screen h-screen bg-gradient-to-tr from-darkMode via-lightDarkMode to-darkMode">
            <Image
               src={img_about_us2}
               alt="background"
               className="w-full h-full object-cover brightness-25 saturate-50"
            />
         </div>

         <div className="w-screen sm:container h-screen max-h-svh md:h-[80vh] md:min-h-[800px] md:max-h-[1000px] relative sm:border border-primary flex flex-col-reverse md:flex-row sm:rounded-3xl overflow-hidden bg-darkMode/80">
            <Sidebar />
            <div className="w-full h-full px-4 py-10 pb-16 md:p-10 overflow-y-auto scroll-smooth md:ml-14 bg-black/50">
               {children}
            </div>
         </div>
      </div>
   )
}
