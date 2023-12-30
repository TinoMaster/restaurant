"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface DialogProps {
  children: React.ReactNode;
  title: string;
  description: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Dialog = ({
  children,
  title,
  description,
  onCancel,
  onConfirm,
}: DialogProps) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showDialog = searchParams.get("dialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    if (onCancel) onCancel();
  };

  const confirmDialog = () => {
    if (onConfirm) onConfirm();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog ref={dialogRef} className="rounded-lg shadow-xl shadow-black/50 bg-darkMode text-gray-200 p-10">
        <div className="max-w-lg flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-bold text-primary">{title}</h1>
          <p className="text-sm text-center">{description}</p>
          <div className="w-full">{children}</div>
          <div className="flex gap-4">
            <button onClick={confirmDialog} className="btn-white">Confirm</button>
            <button onClick={closeDialog} className="btn-white">Cancel</button>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};
