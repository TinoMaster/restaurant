"use client";
import { NavProvider } from "@/context/navContext";
import { ProfileProvider } from "@/context/profileContext";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ProfileProvider>
          <NavProvider>{children}</NavProvider>
        </ProfileProvider>
      </Provider>
    </SessionProvider>
  );
}
