"use client";
import { Sidebar } from "@/components/pages/profile/Sidebar";
import { NotificationTopRight } from "@/components/ui/notifications/NotificationTopRight";
import useProfile from "@/context/profileContext";
import { img_about_us2 } from "@/utils/images";
import Image from "next/image";
import LoadingSkeletonPages from "../../loading";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { error, success, status, dataSession } = useProfile();

  if (status === "loading") {
    return <LoadingSkeletonPages />;
  }

  if (status === "unauthenticated") {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center w-screen min-h-screen text-gray-300">
      {success?.success && (
        <NotificationTopRight type="success" message={success.message} />
      )}
      {error?.error && (
        <NotificationTopRight type="error" message={error.message} />
      )}
      <div className="absolute w-screen h-screen bg-gradient-to-tr from-darkMode via-lightDarkMode to-darkMode">
        <Image
          src={img_about_us2}
          alt="background"
          className="w-full h-full object-cover brightness-25 saturate-50"
        />
      </div>
      {!dataSession?._id ? (
        <div className="animate-pulse w-screen sm:container h-screen md:h-[80vh] relative sm:border border-primary flex sm:rounded-3xl overflow-hidden bg-darkMode/80"></div>
      ) : (
        <div
          className={`w-screen sm:container h-screen md:h-[80vh] relative sm:border border-primary flex sm:rounded-3xl overflow-hidden bg-darkMode/80`}
        >
          <Sidebar />
          <div className="w-full h-full p-4 md:p-10 overflow-y-auto scroll-smooth ml-16">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
