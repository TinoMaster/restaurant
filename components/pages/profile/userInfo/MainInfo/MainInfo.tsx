"use client";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import Image from "next/image";
import { Btn_profile } from "@/components/ui/buttons/Btn_profile";
import { useAppSelector } from "@/redux/hooks";
import { Dialog } from "@/components/ui/modals/Dialog";
import { InputEditable } from "./InputEditable";
import { useMainInfo } from "./hooks/useMainInfo";

export const MainInfo = () => {
  const { image, name, emailVerified, phoneVerified } = useAppSelector(
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

  return (
    <>
      <Dialog
        title="Verifiy your email"
        description=" We've sent a verification link to your email. Please check your email and click on the link to verify your email."
      >
        <div className="max-w-xs m-auto">
          <input type="text" className="input" />
        </div>
      </Dialog>
      <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
        {/* Caja imagen */}
        <div className="flex flex-col gap-2 justify-center items-center col-span-4 md:col-span-1">
          <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="profile"
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-full"
              />
            ) : image ? (
              <Image
                src={image}
                alt="profile"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            ) : (
              <p className="text-5xl">{name?.slice(0, 2)}</p>
            )}
          </div>
          {imagePreview ? (
            <Btn_profile trigger={handleChangeImage} name="Save image" />
          ) : (
            <label htmlFor="change-image" className="btn-white">
              Change image
            </label>
          )}
          <input
            onChange={onChangeImage}
            type="file"
            name="change-image"
            id="change-image"
            className="hidden"
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
