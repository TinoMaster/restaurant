"use client";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";
import Image from "next/image";
import { MdOutlineDone, MdOutlineModeEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import useProfile from "@/context/profileContext";

export const MainInfo = async () => {
  const {
    dataSession,
    editonMode,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    loading,
    session,
  } = useProfile();


  return (
    <div className="grid grid-cols-4 justify-center items-center py-4 gap-10 md:gap-0">
      {/* Caja imagen */}
      <div className="flex justify-center items-center col-span-4 md:col-span-1">
        <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt="profile"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <p className="text-5xl">{session?.user?.name?.slice(0, 2)}</p>
          )}
        </div>
      </div>
      {/* Caja información */}
      <div className="col-span-4 md:col-span-3">
        <h3 className="text-3xl mb-5">User Info</h3>
        <form
          onSubmit={handleSubmitUpdateUserInfo}
          className="grid md:grid-cols-2 gap-4"
        >
          {userInfoProfilePageInputs.map((inp, idx) => (
            <label key={idx} htmlFor={inp.id} className="col-span-1 space-y-2">
              <span className="font-bold text-gray-300/80 text-sm ml-1">
                {inp.label}
              </span>
              <div className="flex relative items-center">
                <input
                  id={inp.id}
                  type={inp.type}
                  placeholder={inp.placeholder}
                  name={inp.name}
                  className="input"
                  autoComplete="off"
                  defaultValue={dataSession?.[inp.name]}
                  disabled={editonMode !== idx}
                />
                {inp.editable &&
                  (editonMode === idx ? (
                    <div className="absolute right-2 flex items-center gap-2">
                      {loading && (
                        <div className="animate-spin rounded-full w-full h-full border-t-2 border-primary border-t-primary border-r-2 border-r-primaryader p-1" />
                      )}
                      <button
                        type="submit"
                        className="text-2xl text-green-500/50 hover:text-green-500 transition-colors"
                      >
                        <MdOutlineDone />
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditonMode(null)}
                        className="text-2xl text-red-500/50 hover:text-red-500 transition-colors"
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setEditonMode(idx)}
                      className="absolute right-2 flex gap-1 text-sm items-center text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      edit
                      <MdOutlineModeEdit className="bg-black/10 rounded-full p-1 text-2xl" />
                    </button>
                  ))}
              </div>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};
