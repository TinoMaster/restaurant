import { Sidebar } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen text-gray-300">
      <div className="container h-[800px] relative border border-primary flex rounded-3xl overflow-hidden my-24">
        <Sidebar />
        <div className="w-full h-full bg-primary/5 p-20">{children}</div>
      </div>
    </div>
  );
}
