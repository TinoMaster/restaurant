import { AddressInfo } from "@/components/pages/profile/userInfo/AddressInfo";
import { MainInfo } from "@/components/pages/profile/userInfo/MainInfo";

export default async function Profile() {
  return (
    <div className="text-white space-y-10 min-h-full min-w-full">
      <MainInfo />
      <AddressInfo />
    </div>
  );
}
