import { DialogsRender } from '@/components/pages/profile/userInfo/Dialogs_Render'
import { FormUserInfo } from '@/components/pages/profile/userInfo/formUserInfo'
import { ImageMainInfo } from '@/components/pages/profile/userInfo/imageUserInfo'
import { authOptions } from '@/libs/authOptions'
import { getUserInfo } from '@/services/actions/user.actions'
import { TUserMainInfo } from '@/types/models/user'
import { getServerSession } from 'next-auth'

export default async function Profile() {
   const session = await getServerSession(authOptions)
   const userMainInfo: TUserMainInfo | false = await getUserInfo(
      session?.user.sub ?? ''
   )

   if (!userMainInfo) {
      return <div>Something went wrong</div>
   }
   const { email, name, emailVerified, image, phone, phoneVerified } =
      userMainInfo

   return (
      <div className="text-white space-y-10 min-h-full min-w-full pb-24">
         <DialogsRender />
         <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
            <div className="flex flex-col gap-2 justify-center items-center col-span-4 lg:col-span-1">
               <ImageMainInfo image={image} name={name} email={email} />
            </div>
            <div className="col-span-4 lg:col-span-3">
               <h3 className="text-3xl mb-5">User Info</h3>
               <FormUserInfo
                  name={name}
                  email={email}
                  phone={phone}
                  emailVerified={emailVerified}
                  phoneVerified={phoneVerified}
               />
            </div>
         </div>
      </div>
   )
}

export const revalidate = 0
