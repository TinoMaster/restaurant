"use client";
import { PROFILE_ROUTE } from "@/constants/routes.api";
import { INITIAL_DATA_SESSION } from "@/constants/user";
import { user } from "@/services/user";
import { TUser } from "@/types/models/user";
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

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const Session = useSession();
  const { data: session, status } = Session;
  const [dataSession, setDataSession] = useState<TUser | undefined>(
    INITIAL_DATA_SESSION
  );

  useEffect(() => {
    if (status === "authenticated") {
      user.getInfo(PROFILE_ROUTE).then((response) => {
        if (response.success && response.data) {
          setDataSession(response.data);
        } else {
          setDataSession(INITIAL_DATA_SESSION);
        }
      });
    }
  }, [Session, status]);

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
