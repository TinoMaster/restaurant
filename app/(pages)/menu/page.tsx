import { firstPathnameMenuPage } from "@/constants/links_navbar";
import { redirect } from "next/navigation";

export default function MenuPage() {
  redirect(firstPathnameMenuPage);
}
