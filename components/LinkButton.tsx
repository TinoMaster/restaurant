import Link from "next/link";

interface LinkButtonProps {
  title: string;
  href: string;
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="border border-primary hover:bg-primary/70 text-slate-200 hover:shadow-black/60 transition-colors italic shadow-md shadow-black/40 text-xl p-2 rounded-md min-w-[200px] text-center"
    >
      {title}
    </Link>
  );
};
