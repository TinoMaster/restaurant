'use client'
import { BtnProfile } from '@/components/ui/buttons/Btn_profile'
import { userInfoProfilePageInputs } from '@/constants/forms/profiles.form'
import { useOpenDialogs } from '@/hooks/useOpenDialogs'
import { useAppSelector } from '@/redux/hooks'
import { DialogsRender } from './Dialogs_Render'
import { FallbackMainInfo } from './Fallback_MainInfo'
import { ImageMainInfo } from './Image'
import { InputEditable } from './InputEditable'
import { useMainInfo } from './useMainInfo'

export const MainInfo = () => {
   const { emailVerified, phoneVerified, _id } = useAppSelector(
      (state) => state.userReducer
   )

   const {
      handleChangeImage,
      imagePreview,
      editionMode,
      userInfoToEdit,
      handlerInfoToEdit,
      handleSubmitUpdateUserInfo,
      onChangeImage,
      setEditionMode,
   } = useMainInfo()
   const { openDialog } = useOpenDialogs()

   if (!_id) {
      return <FallbackMainInfo />
   }

   return (
      <>
         <DialogsRender />
         <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
            {/* image box */}
            <div className="flex flex-col gap-2 justify-center items-center col-span-4 lg:col-span-1">
               <ImageMainInfo
                  handleChangeImage={handleChangeImage}
                  imagePreview={imagePreview}
                  onChangeImage={onChangeImage}
               />
            </div>
            {/* information box */}
            <div className="col-span-4 lg:col-span-3">
               <h3 className="text-3xl mb-5">User Info</h3>
               <form
                  onSubmit={handleSubmitUpdateUserInfo}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4"
               >
                  {userInfoProfilePageInputs.map((inp) => (
                     <InputEditable
                        handlerInfoToEdit={handlerInfoToEdit}
                        userInfoToEdit={userInfoToEdit}
                        key={inp.id}
                        inp={inp}
                        emailVerified={emailVerified}
                        phoneVerified={phoneVerified}
                        openDialog={openDialog}
                     />
                  ))}
                  {/* Buttons box */}
                  <div className="col-span-2 lg:col-span-1 flex justify-end">
                     <div className="flex gap-2 items-end">
                        <BtnProfile
                           type="submit"
                           name="Edit"
                           disabled={!editionMode}
                           title={
                              editionMode ? 'Edit' : 'You must do any change'
                           }
                        />

                        <BtnProfile
                           type="button"
                           trigger={() => setEditionMode(false)}
                           name="Change password"
                           disabled={!emailVerified}
                           title={
                              emailVerified
                                 ? 'Change password'
                                 : 'You must verify your email'
                           }
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
