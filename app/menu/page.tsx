import { links } from "@/data/links_navbar";
import { redirect } from "next/navigation";

export default function MenuPage() {
  redirect(links[1].href);
}
