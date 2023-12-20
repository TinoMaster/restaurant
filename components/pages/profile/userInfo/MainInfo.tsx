"use client";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import Image from "next/image";
import useProfile from "@/context/profileContext";
import { InputEditable } from "@/components/ui/elements/InputEditable";

export const MainInfo = async () => {
  const {
    dataSession,
    editonMode,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    loading,
  } = useProfile();

  return (
    <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
      {/* Caja imagen */}
      <div className="flex flex-col gap-2 justify-center items-center col-span-4 md:col-span-1">
        <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
          {dataSession?.image ? (
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
        <label
          htmlFor="change-image"
          className="bg-darkMode text-sm border border-primary hover:bg-primary/30 transition-colors py-2 px-4 rounded-lg cursor-pointer"
        >
          Change image
          <input
            type="file"
            name="change-image"
            id="change-image"
            className="hidden"
          />
        </label>
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
              loading={loading}
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
                    className="py-2 px-8 bg-primaryPal-700 rounded-lg text-white text-sm"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditonMode(true)}
                    className="py-2 px-8 bg-slate-300 rounded-lg text-gray-800 text-sm"
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
