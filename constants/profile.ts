import { TLinkProfilePage } from "@/types/common";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosHeartEmpty } from "react-icons/io";
import { PiAddressBookLight } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";

export const linksProfile: TLinkProfilePage[] = [
  {
    title: "User info",
    href: "/user_info",
    icon: CiUser,
  },
  {
    title: "favoritos",
    href: "/favorites",
    icon: IoIosHeartEmpty,
  },
  {
    title: "direccion",
    href: "/address",
    icon: PiAddressBookLight,
  },
  {
    title: "mis compras",
    href: "/orders",
    icon: TbShoppingBagCheck,
  },
  {
    title: "notificaciones",
    href: "/notifications",
    icon: IoIosNotificationsOutline,
  },
];
