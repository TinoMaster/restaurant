"use client";
import { Btn_profile } from "@/components/ui/buttons/Btn_profile";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import { useMainInfo } from "@/hooks/pages/profile/useMainInfo";
import { useDialogs } from "@/hooks/useDialogs";
import { useAppSelector } from "@/redux/hooks";
import { Dialogs_Render } from "./Dialogs_Render";
import { Fallback_MainInfo } from "./Fallback_MainInfo";
import { ImageBlock } from "./ImageBlock";
import { InputEditable } from "./InputEditable";

export const MainInfo = () => {
  const { emailVerified, phoneVerified, _id } = useAppSelector(
    (state) => state.userReducer
  );
  const {
    handleChangeImage,
    imagePreview,
    editonMode,
    userInfoToEdit,
    handlerInfoToEdit,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    setEditonMode,
  } = useMainInfo();
  const { openDialog } = useDialogs();

  if (!_id) {
    return <Fallback_MainInfo />;
  } else
    return (
      <>
        <Dialogs_Render />
        <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
          {/* Caja imagen */}
          <div className="flex flex-col gap-2 justify-center items-center col-span-4 md:col-span-1">
            <ImageBlock
              handleChangeImage={handleChangeImage}
              imagePreview={imagePreview}
              onChangeImage={onChangeImage}
            />
          </div>
          {/* Caja información */}
          <div className="col-span-4 md:col-span-3">
            <h3 className="text-3xl mb-5">User Info</h3>
            <form
              onSubmit={handleSubmitUpdateUserInfo}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {userInfoProfilePageInputs.map((inp, idx) => (
                <InputEditable
                  handlerInfoToEdit={handlerInfoToEdit}
                  userInfoToEdit={userInfoToEdit}
                  key={idx}
                  inp={inp}
                  emailVerified={emailVerified}
                  phoneVerified={phoneVerified}
                  openDialog={openDialog}
                />
              ))}
              {/* Buttons box */}
              <div className="col-span-2 lg:col-span-1 flex justify-end">
                <div className="flex gap-2 items-end">
                  <>
                    <Btn_profile
                      type="submit"
                      name="Edit"
                      disabled={!editonMode}
                      title={editonMode ? "Edit" : "You must do any change"}
                    />

                    <Btn_profile
                      type="button"
                      trigger={() => setEditonMode(false)}
                      name="Change password"
                      disabled={!emailVerified}
                      title={
                        emailVerified
                          ? "Change password"
                          : "You must verify your email"
                      }
                    />
                  </>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};
