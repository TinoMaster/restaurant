"use client";
import { INITIAL_ERROR, INITIAL_SUCCESS } from "@/constants/common";
import { PROFILE_ROUTE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TError, TSuccess } from "@/types/common";
import { TDataUserToUpdate, TUserSession } from "@/types/user";
import { cleanMessage } from "@/utils/cleanMessage";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState, useContext } from "react";
import { createContext } from "react";

type ProfileState = {
  dataSession: TUserSession;
  editonMode: number | null;
  loading: boolean;
  error: TError;
  success: TSuccess;
  setEditonMode: React.Dispatch<React.SetStateAction<number | null>>;
  handleSubmitUpdateUserInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  session: Session | null;
};

const ProfileContext = createContext<ProfileState | null>(null);

const useProfile = (): ProfileState => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("Please use ThemeProvider in parent component");
  return context;
};

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const [editonMode, setEditonMode] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);

  const dataSession: TUserSession = {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  };

  const handleSubmitUpdateUserInfo = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    const data: TDataUserToUpdate = {};

    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await user.UpdateInfo(PROFILE_ROUTE, data);
    if (response.success) {
      setEditonMode(null);
      setSuccess(response);
      cleanMessage(setSuccess, INITIAL_SUCCESS);
    } else {
      setError({ error: true, message: response.message });
      cleanMessage(setError, INITIAL_ERROR);
    }
    setLoading(false);
  };

  const data = {
    dataSession,
    editonMode,
    loading,
    error,
    success,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    session,
  };
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};

export default useProfile;
