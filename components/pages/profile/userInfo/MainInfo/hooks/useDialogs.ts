import { useState } from "react";
import { TOptionsToEdit } from "../types";
import { useSearchParams } from "next/navigation";

export const useDialogs = () => {
  const [dialogType, setDialogType] = useState<TOptionsToEdit | null>(null);
  const searchParams = useSearchParams();

  /* //TODO: continues here */
  const openDialog = (type: TOptionsToEdit) => {
    const params = new URLSearchParams(searchParams);
    setDialogType(type);
    params.set("dialog", type);
  };

  return {
    dialogType,
    openDialog,
  };
};
