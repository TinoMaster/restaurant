import { PROFILE_ROUTE, UPLOAD_FILE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TDataUserToUpdate, TUser } from "@/types/user";
import { useState } from "react";
import toast from "react-hot-toast";

interface IUseMainInfoProps {
  setDataSession: React.Dispatch<React.SetStateAction<TUser | undefined>>;
}

interface IUseMainInfo {
  editonMode: boolean;
  setEditonMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitUpdateUserInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  handleChangeImage: () => void;
}

export const useMainInfo = ({
  setDataSession,
}: IUseMainInfoProps): IUseMainInfo => {
  const [editonMode, setEditonMode] = useState(false);

  /* change image states */
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  async function handleSubmitUpdateUserInfo(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    toast.loading("Updating....");

    const data: TDataUserToUpdate = {};

    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await user.UpdateInfo(PROFILE_ROUTE, data);

    if (response.success) {
      setDataSession(response.data);
      setEditonMode(false);
      toast.remove();
      toast.success("Updated");
    } else {
      toast.remove();
      toast.error(response.message);
    }
  }

  function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  /* //TODO: fix this */
  async function handleChangeImage() {
    if (imageFile) {
      toast.loading("Uploading...");
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await user.uploadImage(UPLOAD_FILE, formData);

      if (response.success) {
        toast.remove();
        /* await user.UpdateInfo(PROFILE_ROUTE, { image: response.data }); */
        setImagePreview(null);
        toast.success("Image uploaded");
      } else {
        setImagePreview(null);
        toast.remove();
        toast.error(response.message);
      }
    }
  }

  return {
    editonMode,
    imagePreview,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    handleChangeImage,
  };
};
