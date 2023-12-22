"use client";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import Image from "next/image";
import useProfile from "@/context/profileContext";
import { InputEditable } from "@/components/ui/elements/InputEditable";
import { useMainInfo } from "@/hooks/profile/useMainInfo";
import { Btn_profile } from "@/components/ui/buttons/Btn_profile";

export const MainInfo = () => {
  const { dataSession, setDataSession } = useProfile();
  const {
    handleChangeImage,
    imagePreview,
    editonMode,
    userInfoToEdit,
    handlerInfoToEdit,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    setEditonMode,
  } = useMainInfo({ setDataSession, dataSession });

  return (
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
          ) : dataSession?.image ? (
            <Image
              src={dataSession?.image}
              alt="profile"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          ) : (
            <p className="text-5xl">{dataSession?.name?.slice(0, 2)}</p>
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
              dataSession={dataSession}
              inp={inp}
            />
          ))}
          {/* Buttons box */}
          <div className="col-span-2 lg:col-span-1 flex justify-end">
            <div className="flex gap-2 items-end">
              <>
                <Btn_profile type="submit" name="Edit" disabled={!editonMode} />

                <Btn_profile
                  type="button"
                  trigger={() => setEditonMode(false)}
                  name="Change password"
                />
              </>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
