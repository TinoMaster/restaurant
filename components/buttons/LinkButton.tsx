import Link from "next/link";

interface LinkButtonProps {
  title: string;
  href: string;
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
  return (
    <Link href={href} className="btn btn-mediun btn-outline">
      {title}
    </Link>
  );
};
