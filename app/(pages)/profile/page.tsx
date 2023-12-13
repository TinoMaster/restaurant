import { Input } from "@/components/elements/Input";
import { userInfoProfilePageInputs } from "@/constants/forms/profiles.form";

export default function Profile() {
  return (
    <div className="text-white space-y-10">
      {/* First block */}
      <div className="grid grid-cols-4 justify-center items-center py-4">
        {/* Caja imagen */}
        <div className="flex justify-center items-center col-span-1">
          <div className="w-44 h-44 bg-white/10 rounded-full"></div>
        </div>
        {/* Caja información */}
        <div className="col-span-3">
          <h3 className="text-3xl col-span-4 mb-5">User Info</h3>
          <div className="grid grid-cols-2 gap-4">
            {userInfoProfilePageInputs.map((inp, idx) => (
              <label key={idx} htmlFor={inp.id} className="col-span-1">
                <p className="font-bold text-gray-300/80 text-sm ml-1">
                  {inp.label}
                </p>
                <Input
                  type={inp.type}
                  name={inp.name}
                  id={inp.id}
                  placeholder={inp.placeholder}
                  disabled
                />
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Second block */}
      <fieldset className="grid grid-cols-2 gap-4 p-6 border border-gray-400/50 bg-primaryPal-800/5 rounded-md">
        <legend className="col-span-2 text-3xl">Address</legend>
        <p className="col-span-2">
          {" "}
          <span className="font-bold text-gray-50 bg-primaryPal-700 px-2">
            Nota:
          </span>{" "}
          Solo aceptamos pedidos de Francavilla
        </p>
        <label htmlFor="name" className="col-span-1">
          <p className="font-bold text-gray-300 text-sm ml-1">Name</p>
          <input type="text" name="name" id="name" className="input w-full" />
        </label>
        <label htmlFor="name" className="col-span-1">
          <p className="font-bold text-gray-300 text-sm ml-1">Email</p>
          <input type="text" name="name" id="name" className="input w-full" />
        </label>
      </fieldset>
    </div>
  );
}
