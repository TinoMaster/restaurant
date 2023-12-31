import { Dialog } from "@/components/ui/modals/Dialog";
import { dialogChangeEmail, dialogChangePhone } from "@/constants/dialogs";
import React from "react";

export const Dialogs_Render = () => {
  return (
    <>
      <Dialog
        title="Verifiy your email"
        description=" We've sent a verification link to your email. Please check your email and click on the link to verify your email."
        dialog={dialogChangeEmail}
      >
        <div className="max-w-xs m-auto">
          <input type="text" className="input" />
        </div>
      </Dialog>

      <Dialog
        title="Verifiy your phone"
        description=" We've sent a verification link to your phone. Please check your phone and click on the link to verify your phone."
        dialog={dialogChangePhone}
      >
        <div className="max-w-xs m-auto">
          <input type="text" className="input" />
        </div>
      </Dialog>
    </>
  );
};
