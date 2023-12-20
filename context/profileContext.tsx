"use client";
import { INITIAL_ERROR, INITIAL_SUCCESS } from "@/constants/common";
import { PROFILE_ROUTE, UPLOAD_FILE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TError, TSuccess } from "@/types/common";
import { TDataUserToUpdate, TUser } from "@/types/user";
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
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  handleChangeImage: () => void;
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
  /* change image states */
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      user.getInfo(PROFILE_ROUTE).then((response) => {
        if (response.success && response.data) {
          setDataSession(response.data[0]);
        } else {
          setDataSession(INITIAL_DATA_SESSION);
          setError({ error: true, message: response.message });
          cleanMessage(setError, INITIAL_ERROR);
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

  function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleChangeImage() {
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await user.uploadImage(UPLOAD_FILE, formData);

      if (response.success) {
        setImagePreview(null);
        setSuccess(response);
        cleanMessage(setSuccess, INITIAL_SUCCESS);
      } else {
        setError({ error: true, message: response.message });
        cleanMessage(setError, INITIAL_ERROR);
      }
    }
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
    onChangeImage,
    imagePreview,
    handleChangeImage,
  };
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};

export default useProfile;
