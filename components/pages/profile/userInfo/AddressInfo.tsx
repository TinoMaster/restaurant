import { Input } from "@/components/ui/elements/Input";
import { addressProfilePageInputs } from "@/constants/forms/profiles.form";
import { img_map } from "@/utils/images";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export const AddressInfo = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-4 p-6 border border-gray-400/50 rounded-md">
      <legend className="col-span-2 text-3xl">Address</legend>
      <p className="col-span-2 text-center">
        {" "}
        <span className="font-bold text-gray-50 bg-primaryPal-700 px-2">
          Nota:
        </span>{" "}
        Solo aceptamos pedidos de Francavilla
      </p>
      <div className="col-span-2 py-5">
        <button className="py-2 px-4 bg-gray-100 text-gray-700 rounded-md flex gap-2 items-center">
          <FaPlus className="text-xl" /> Add new
        </button>
      </div>
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
      {/* Caja mapa */}
      <div className="col-span-2 h-96 rounded-md overflow-hidden">
        <Image
          src={img_map}
          alt="map"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
    </fieldset>
  );
};
