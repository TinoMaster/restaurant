"use client";
import { PROFILE_ROUTE } from "@/constants/routes.api";
import { useAppDispatch } from "@/redux/hooks";
import { login, logout } from "@/redux/reducers/user_slice";
import { user } from "@/services/user";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect } from "react";

type ProfileState = {};

const ProfileContext = createContext<ProfileState | null>(null);

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const Session = useSession();
  const { status } = Session;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      user.getInfo(PROFILE_ROUTE).then((response) => {
        if (response.success && response.data) {
          dispatch(login(response.data));
        } else {
          dispatch(logout());
        }
      });
    }
  }, [status, dispatch]);

  const data = {};
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
};
