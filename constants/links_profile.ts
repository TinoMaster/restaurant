import { TLinkProfilePage } from "@/types/common";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosHeartEmpty } from "react-icons/io";
import { PiAddressBookLight } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";

export const linksProfile: TLinkProfilePage[] = [
  {
    title: "User info",
    href: "/profile/user_info",
    icon: CiUser,
  },
  {
    title: "favoritos",
    href: "/profile/favorites",
    icon: IoIosHeartEmpty,
  },
  {
    title: "direccion",
    href: "/profile/address",
    icon: PiAddressBookLight,
  },
  {
    title: "mis compras",
    href: "/profile/orders",
    icon: TbShoppingBagCheck,
  },
  {
    title: "notificaciones",
    href: "/profile/notifications",
    icon: IoIosNotificationsOutline,
  },
];

export const linksLogoProfile: TLinkProfilePage[] = [
  {
    title: "Mio Profilo",
    href: "/profile/user_info",
    icon: CiUser,
  },
  {
    title: "favoritos",
    href: "/profile/favorites",
    icon: IoIosHeartEmpty,
  },
  {
    title: "mis compras",
    href: "/profile/orders",
    icon: TbShoppingBagCheck,
  },
  {
    title: "notificaciones",
    href: "/notifications",
    icon: IoIosNotificationsOutline,
  },
];

export const linksAdminPanel: TLinkProfilePage[] = [
  {
    title: "Categories",
    href: "/profile/admin/categories",
    icon: CiUser,
  },
  {
    title: "Menu Items",
    href: "/profile/admin/menu",
    icon: IoIosHeartEmpty,
  },
  {
    title: "Users",
    href: "/profile/admin/users",
    icon: TbShoppingBagCheck,
  },
];
