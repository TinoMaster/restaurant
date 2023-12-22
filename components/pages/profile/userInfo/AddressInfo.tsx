"use client";
import { Input } from "@/components/ui/elements/Input";
import { addressProfilePageInputs } from "@/constants/forms/profiles.form";
import useProfile from "@/context/profileContext";
import { img_map } from "@/utils/images";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export const AddressInfo = () => {
  const { dataSession } = useProfile();
  return (
    <div className="w-full grid grid-cols-4">
      <fieldset className="grid grid-cols-2 col-span-4 lg:col-span-3 lg:col-start-2">
        <legend className="col-span-2 text-2xl lg:text-3xl">Address</legend>
        <div className="grid grid-cols-2 col-span-2 gap-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-5 rounded-xl">
            {addressProfilePageInputs.map((inp, idx) => (
              <Input
                key={idx}
                type={inp.type}
                label={inp.label}
                name={inp.name}
                id={inp.id}
                placeholder={inp.placeholder}
              />
            ))}
          </div>
          {/* Caja mapa */}
          <div className="col-span-2 h-96 rounded-md hidden overflow-hidden">
            <Image
              src={img_map}
              alt="map"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};
