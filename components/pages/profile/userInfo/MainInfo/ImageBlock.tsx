import { Btn_profile } from "@/components/ui/buttons/Btn_profile";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

interface IImageBlockProps {
  imagePreview: string | null;
  handleChangeImage: () => void;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageBlock = ({
  imagePreview,
  handleChangeImage,
  onChangeImage,
}: IImageBlockProps) => {
  const { image, name } = useAppSelector((state) => state.userReducer);
  return (
    <>
      <div className="w-44 h-44 bg-darkMode border border-primary relative rounded-full flex justify-center items-center">
        {imagePreview ? (
          <Image
            src={imagePreview}
            alt="profile"
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-full"
          />
        ) : image ? (
          <Image
            src={image}
            alt="profile"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        ) : (
          <p className="text-5xl">{name?.slice(0, 2)}</p>
        )}
      </div>
      {imagePreview ? (
        <Btn_profile trigger={handleChangeImage} name="Save image" />
      ) : (
        <label htmlFor="change-image" className="btn-white">
          Change image
        </label>
      )}
      <input
        onChange={onChangeImage}
        type="file"
        name="change-image"
        id="change-image"
        className="hidden"
      />
    </>
  );
};
