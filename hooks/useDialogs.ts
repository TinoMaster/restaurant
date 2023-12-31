import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TOptionsToEdit } from "../components/pages/profile/userInfo/MainInfo/types";

export const useDialogs = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const openDialog = (type: TOptionsToEdit) => {
    const params = new URLSearchParams(searchParams);
    if (type) {
      params.set("dialog", type);
    } else {
      params.delete("dialog");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    openDialog,
  };
};
