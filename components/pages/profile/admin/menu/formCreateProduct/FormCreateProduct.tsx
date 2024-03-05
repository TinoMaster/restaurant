'use client'
import { Input } from '@/components/ui/elements/Input'
import { ImageProfile } from '@/components/ui/globals/ImageProfile'
import { menuItemsProfilePageInputs } from '@/constants/forms/profiles.form'
import { TCategory } from '@/types/models/category'
import { TIngredient } from '@/types/models/ingredient'
import { useFormCreateProduct } from './useFormCreateProduct'

interface IFormCreateProductProps {
   categories: TCategory[]
   ingredients: TIngredient[]
}

export const FormCreateProduct = ({
   categories,
   ingredients,
}: IFormCreateProductProps) => {
   const { onSubmit, imagePreview, onChangeImage, handleChangeImage } =
      useFormCreateProduct()

   return (
      <form action={onSubmit} className="grid grid-cols-4 w-full gap-4">
         {/* image */}
         <div className="col-span-4 relative lg:col-span-1 lg:max-h-[250px] flex flex-col gap-2 justify-center items-center">
            <ImageProfile
               imagePreview={imagePreview}
               onChangeImage={onChangeImage}
               handleChangeImage={handleChangeImage}
            />
         </div>
         {/* form */}
         <div className="col-span-4 lg:col-span-3">
            <legend className="col-span-2 text-2xl lg:text-3xl">
               Create Item Menu
            </legend>
            <div className="grid grid-cols-2 col-span-2 gap-4 ">
               <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2 lg:gap-5 rounded-xl">
                  {menuItemsProfilePageInputs.map((inp) => (
                     <Input
                        key={inp.id}
                        type={inp.type}
                        label={inp.label}
                        name={inp.name}
                        id={inp.id}
                        placeholder={inp.placeholder}
                     />
                  ))}
                  <label
                     htmlFor="select_category"
                     className="col-span-2 space-y-1 lg:space-y-2"
                  >
                     <span className="font-bold text-gray-300/80 text-sm ml-1">
                        Category
                     </span>
                     <select
                        name="category"
                        id="select_category"
                        className="input capitalize"
                     >
                        <option
                           className="bg-lightDarkMode text-gray-400"
                           value=""
                        ></option>
                        {categories
                           ? categories?.map((category) => (
                                <option
                                   className="bg-lightDarkMode capitalize"
                                   key={category._id}
                                   value={category._id}
                                >
                                   {category.name}
                                </option>
                             ))
                           : null}
                     </select>
                  </label>
                  {/* Ingredients */}
                  <div className="flex flex-col col-span-2 justify-center items-center">
                     <span className="font-bold text-gray-300/80 text-sm pl-1 py-1 w-full">
                        Ingredients
                     </span>
                     <details className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 input rounded-lg">
                        <summary className="font-semibold text-gray-400">
                           Choose ingredients
                        </summary>
                        <div className="flex flex-wrap py-4 gap-5">
                           {ingredients?.length ? (
                              ingredients.map((ing) => (
                                 <label
                                    id="ingredient"
                                    key={ing._id}
                                    className="flex items-center gap-1"
                                 >
                                    <input
                                       value={ing._id}
                                       id="ingredient"
                                       name="ingredient"
                                       type="checkbox"
                                    />
                                    {ing.name}
                                 </label>
                              ))
                           ) : (
                              <p className="w-full text-center font-semibold text-gray-400">
                                 No hay ingredientes
                              </p>
                           )}
                        </div>
                     </details>
                  </div>
                  <div className="col-span-2">
                     <label id="description" className="space-y-1 lg:space-y-2">
                        <span className="font-bold text-gray-300/80 text-sm ml-1">
                           Description
                        </span>
                        <textarea
                           name="description"
                           id="description"
                           rows={4}
                           placeholder="Ej: Esta es la descripción del plato"
                           className="input resize-none w-full"
                        />
                     </label>
                  </div>
               </div>
            </div>
            {/* Buttons */}
            <div className="flex py-5 gap-3 justify-end col-span-2">
               <button type="reset" className="btn-white">
                  Reset
               </button>
               <button type="submit" className="btn-white">
                  Create
               </button>
            </div>
         </div>
      </form>
   )
}
