import { Sidebar } from "@/components/pages/profile/Sidebar";
import { authOptions } from "@/libs/authOptions";
import { img_about_us2 } from "@/utils/images";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex justify-center items-center w-screen min-h-screen text-gray-300">
      <div className="absolute w-screen h-screen bg-gradient-to-tr from-darkMode via-lightDarkMode to-darkMode">
        <Image
          src={img_about_us2}
          alt="background"
          className="w-full h-full object-cover brightness-25 saturate-50"
        />
      </div>

      <div className="w-screen sm:container h-screen md:h-[80vh] relative sm:border border-primary flex sm:rounded-3xl overflow-hidden bg-darkMode/80">
        <Sidebar />
        <div className="w-full h-full p-4 md:p-10 overflow-y-auto scroll-smooth ml-14 bg-black/50">
          {children}
        </div>
      </div>
    </div>
  );
}
