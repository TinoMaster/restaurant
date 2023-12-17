import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function OutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-screen min-h-screen flex justify-center">
      <div className="absolute text-white container top-4 z-30">
        <Link href={"/"} className="flex items-center gap-2 bg-black/50 p-2 hover:bg-black w-max">
          <FaArrowLeft />
          Go back
        </Link>
      </div>
      {children}
    </section>
  );
}
