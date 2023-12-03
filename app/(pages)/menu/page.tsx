import { links } from "@/constants/links_navbar";
import { redirect } from "next/navigation";

export default function MenuPage() {
  redirect(links[1].href);
}
