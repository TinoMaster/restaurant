import { IconType } from "react-icons";

export type TLink = {
  name: string;
  href: string;
};

export type TLinkProfilePage = {
  title: string;
  href: string;
  icon: IconType;
};

export type TGroupFooterLink = {
  category: string;
  links: TLink[];
};
