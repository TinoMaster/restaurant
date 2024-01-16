import { Input } from '@/components/ui/elements/Input'
import { menuItemsProfilePageInputs } from '@/constants/forms/profiles.form'
import { getCategories } from '@/services/actions/category.actions'

export const FormCreateItemMenu = async () => {
   const categories = await getCategories()
   return (
      <form
         action=""
         className="grid grid-cols-2 col-span-4 lg:col-span-3 lg:col-start-2 w-full"
      >
         <legend className="col-span-2 text-2xl lg:text-3xl">
            Create Item Menu
         </legend>
         <div className="grid grid-cols-2 col-span-2 gap-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2 lg:gap-5 rounded-xl">
               {menuItemsProfilePageInputs.map((inp, idx) => (
                  <Input
                     key={idx}
                     type={inp.type}
                     label={inp.label}
                     name={inp.name}
                     id={inp.id}
                     placeholder={inp.placeholder}
                  />
               ))}
               <label
                  htmlFor="select_category"
                  className="col-span-1 space-y-1 lg:space-y-2"
               >
                  <span className="font-bold text-gray-300/80 text-sm ml-1">
                     Category
                  </span>
                  <select
                     name=""
                     id="select_category"
                     className="input capitalize"
                  >
                     <option className="bg-lightDarkMode" value="">
                        --select a category--
                     </option>
                     {categories &&
                        categories?.map((category) => (
                           <option
                              className="bg-lightDarkMode capitalize"
                              key={category._id}
                              value={JSON.parse(JSON.stringify(category._id))}
                           >
                              {category.name}
                           </option>
                        ))}
                  </select>
               </label>
               <label
                  htmlFor="select_category"
                  className="col-span-1 space-y-1 lg:space-y-2"
               >
                  <span className="font-bold text-gray-300/80 text-sm ml-1">
                     Ingredients
                  </span>
                  <select name="" id="select_category" className="input">
                     <option value="">--select a category--</option>
                  </select>
               </label>
               <label className="lg:col-span-2 space-y-1 lg:space-y-2">
                  <span className="font-bold text-gray-300/80 text-sm ml-1">
                     Description
                  </span>
                  <textarea
                     name=""
                     id=""
                     cols={30}
                     rows={4}
                     placeholder="Ej: Esta es la descripcion del plato"
                     className="input resize-none"
                  />
               </label>
            </div>
         </div>
         {/* Buttons */}
         <div className="flex py-5 gap-3 justify-end col-span-2">
            <button type="reset" className="btn-white">
               Reset
            </button>
            <button
               type="submit"
               style={{
                  backgroundColor: '#00B357',
                  color: 'white',
                  border: '1px solid #00B357',
               }}
               className="btn-white"
            >
               Create
            </button>
         </div>
      </form>
   )
}
