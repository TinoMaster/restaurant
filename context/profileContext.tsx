"use client";
import { INITIAL_ERROR, INITIAL_SUCCESS } from "@/constants/common";
import { PROFILE_ROUTE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TError, TSuccess } from "@/types/common";
import { TDataUserToUpdate, TUser, TUserSession } from "@/types/user";
import { cleanMessage } from "@/utils/cleanMessage";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";

type ProfileState = {
  dataSession: TUser | undefined;
  editonMode: boolean;
  loading: boolean;
  error: TError;
  success: TSuccess;
  setEditonMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitUpdateUserInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
};

const ProfileContext = createContext<ProfileState | null>(null);

const useProfile = (): ProfileState => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("Please use ThemeProvider in parent component");
  return context;
};

const INITIAL_DATA_SESSION: TUser = {
  name: "",
  email: "",
  image: "",
  addresses: [],
  phone: "",
  isAdmin: false,
  orders: [],
  createdAt: "",
  updatedAt: "",
  _id: "",
  isVerified: false,
};

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session, status } = useSession();
  const [editonMode, setEditonMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);
  const [dataSession, setDataSession] = useState<TUser | undefined>(
    INITIAL_DATA_SESSION
  );

  useEffect(() => {
    if (session) {
      user.getInfo(PROFILE_ROUTE).then((response) => {
        if (response.success && response.data) {
          setDataSession(response.data[0]);
        }
      });
    }
  }, [session]);

  async function handleSubmitUpdateUserInfo(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);

    const data: TDataUserToUpdate = {};

    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await user.UpdateInfo(PROFILE_ROUTE, data);

    if (response.success) {
      setEditonMode(false);
      setSuccess(response);
      cleanMessage(setSuccess, INITIAL_SUCCESS);
      setDataSession(response.data);
    } else {
      setError({ error: true, message: response.message });
      cleanMessage(setError, INITIAL_ERROR);
    }
    setLoading(false);
  }

  const data = {
    dataSession,
    editonMode,
    loading,
    error,
    success,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    session,
    status,
  };
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};

export default useProfile;
