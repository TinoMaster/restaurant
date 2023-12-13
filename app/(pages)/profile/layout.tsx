import { Sidebar } from "@/components/Sidebar";
import { img_about_us2 } from "@/utils/images";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-full min-h-screen text-gray-300">
      <div className="absolute w-full h-screen bg-gradient-to-tr from-darkMode via-lightDarkMode to-darkMode">
        <Image src={img_about_us2} alt="background" className="w-full h-full object-cover brightness-25 saturate-50"/>
      </div>
      <div className="container h-[800px] relative border border-primary flex rounded-3xl overflow-hidden bg-darkMode/80 my-24">
        <Sidebar />
        <div className="w-full h-full p-10 overflow-y-auto scroll-smooth">{children}</div>
      </div>
    </div>
  );
}
