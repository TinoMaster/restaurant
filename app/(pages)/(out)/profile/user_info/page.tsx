import { AddressInfo } from "@/components/pages/profile/userInfo/AddressInfo";
import { MainInfo } from "@/components/pages/profile/userInfo/MainInfo";
import { LoadingMainInfo } from "@/components/pages/profile/userInfo/LoadingMainInfo";
import { Suspense } from "react";

export default async function Profile() {
  return (
    <div className="text-white space-y-10 min-h-full min-w-full pb-24">
      <Suspense fallback={<LoadingMainInfo />}>
        <MainInfo />
      </Suspense>
      <AddressInfo />
    </div>
  );
}
