"use client";
import { PROFILE_ROUTE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TUser } from "@/types/user";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";

type ProfileState = {
  setDataSession: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  dataSession: TUser | undefined;
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
  const [dataSession, setDataSession] = useState<TUser | undefined>(
    INITIAL_DATA_SESSION
  );

  useEffect(() => {
    if (session) {
      user.getInfo(PROFILE_ROUTE).then((response) => {
        if (response.success && response.data) {
          setDataSession(response.data);
        } else {
          setDataSession(INITIAL_DATA_SESSION);
        }
      });
    }
  }, [session]);

  const data = {
    setDataSession,
    dataSession,
    session,
    status,
  };
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};

export default useProfile;
