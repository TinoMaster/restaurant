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

/* Imputs */
export type TInput = {
  id?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  editable?: boolean;
};
export type TInputProps = {
  id?: string;
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  value?: string | number | undefined | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

/* Errors Types */
export type TError = {
  error: boolean;
  message: string;
};

/* Success Types */
export type TSuccess = {
  success: boolean;
  message: string;
};
