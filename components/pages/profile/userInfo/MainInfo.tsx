"use client";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import Image from "next/image";
import useProfile from "@/context/profileContext";
import { InputEditable } from "@/components/ui/elements/InputEditable";
import { useMainInfo } from "@/hooks/profile/useMainInfo";

export const MainInfo = async () => {
  const { dataSession, setDataSession } = useProfile();
  const {
    handleChangeImage,
    imagePreview,
    editonMode,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    setEditonMode,
  } = useMainInfo({ setDataSession });

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
            />
          ) : (
            <p className="text-5xl">{dataSession?.name?.slice(0, 2)}</p>
          )}
        </div>
        {imagePreview ? (
          <button
            onClick={handleChangeImage}
            className="text-sm border border-green-300 hover:bg-green-300/30 transition-colors py-2 px-4 rounded-lg cursor-pointer"
          >
            Save image
          </button>
        ) : (
          <label
            htmlFor="change-image"
            className="text-sm border border-gray-300 hover:bg-white/30 transition-colors py-2 px-4 rounded-lg cursor-pointer"
          >
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
          className="grid md:grid-cols-2 gap-4"
        >
          {userInfoProfilePageInputs.map((inp, idx) => (
            <InputEditable
              key={idx}
              dataSession={dataSession}
              editonMode={editonMode}
              inp={inp}
            />
          ))}
          {/* Buttons box */}
          <div className="col-span-2 lg:col-span-1 flex justify-end">
            <div className="flex gap-2 items-end">
              {editonMode ? (
                <>
                  <button
                    type="submit"
                    onClick={() => setEditonMode(false)}
                    className="py-2 px-8 bg-green-600 rounded-lg text-white text-sm"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditonMode(false)}
                    className="py-2 px-8 bg-red-600 rounded-lg text-white text-sm"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setEditonMode(true)}
                    className="py-2 px-8 border border-gray-300 rounded-lg text-white text-sm"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditonMode(true)}
                    className="py-2 px-8 border border-gray-300 rounded-lg text-sm"
                  >
                    Change Password
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
