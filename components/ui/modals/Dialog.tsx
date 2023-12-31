"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface DialogProps {
  children: React.ReactNode;
  title: string;
  description: string;
  onCancel?: () => void;
  onCancelText?: string;
  onConfirm?: () => void;
  onConfirmText?: string;
  dialog: string;
}

export const Dialog = ({
  children,
  title,
  description,
  onCancel,
  onCancelText,
  onConfirm,
  onConfirmText,
  dialog,
}: DialogProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showDialog = searchParams.get("dialog");

  useEffect(() => {
    if (showDialog === dialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog, dialog]);

  const closeDialog = () => {
    const params = new URLSearchParams(searchParams);
    dialogRef.current?.close();
    if (onCancel) onCancel();
    params.delete("dialog");
    replace(`${pathName}?${params.toString()}`);
  };

  const confirmDialog = () => {
    if (onConfirm) onConfirm();
    closeDialog();
  };

  const Dialog: JSX.Element | null =
    showDialog === dialog ? (
      <dialog
        ref={dialogRef}
        className="rounded-lg shadow-xl shadow-black/50 bg-darkMode text-gray-200 p-10 backdrop:bg-primaryPal-950/20"
      >
        <div className="max-w-lg flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-bold text-primary">{title}</h1>
          <p className="text-sm text-center">{description}</p>
          <div className="w-full">{children}</div>
          <div className="flex gap-4">
            <button onClick={confirmDialog} className="btn-white">
              {onConfirmText || "Confirm"}
            </button>
            <button onClick={closeDialog} className="btn-white">
              {onCancelText || "Cancel"}
            </button>
          </div>
        </div>
      </dialog>
    ) : null;

  return Dialog;
};
