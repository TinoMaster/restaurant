import {
  SUCCESS_INFO_PROFILE,
  SUCCESS_UPLOAD_IMAGE,
  UPDATING_IMAGE,
  UPDATING_INFO_PROFILE,
} from "@/constants/common";
import { PROFILE_ROUTE, UPLOAD_FILE } from "@/constants/routes.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateImage, updateMainInfo } from "@/redux/reducers/user_slice";
import { user } from "@/services/user";
import { TDataUserToUpdate } from "@/types/models/user";
import { createNameImage } from "@/utils/createNameImage";
import { validateUserInfo } from "@/utils/validators/profile.validators";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface IUseMainInfo {
  editonMode: boolean;
  userInfoToEdit: TDataUserToUpdate;
  handlerInfoToEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditonMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitUpdateUserInfo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  handleChangeImage: () => void;
}

export const useMainInfo = (): IUseMainInfo => {
  /* Redux */
  const { name, email, phone, image } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();
  /* States hook */
  const [editonMode, setEditonMode] = useState(false);
  const [userInfoToEdit, setUserInfoToEdit] = useState<TDataUserToUpdate>({
    name: name || "",
    email: email || "",
    phone: phone || "",
  });

  /* change image states */
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    setEditonMode(validateUserInfo(userInfoToEdit, { name, email, phone }));
  }, [userInfoToEdit, name, email, phone]);

  const handlerInfoToEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfoToEdit((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmitUpdateUserInfo(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    toast.loading(UPDATING_INFO_PROFILE);

    const response = await user.UpdateInfo(PROFILE_ROUTE, userInfoToEdit);

    if (response.success) {
      dispatch(updateMainInfo(userInfoToEdit));
      setEditonMode(false);
      toast.remove();
      toast.success(SUCCESS_INFO_PROFILE);
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

  async function handleChangeImage() {
    if (imageFile) {
      toast.loading(UPDATING_IMAGE);
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("name", createNameImage(email));
      const response = await user.uploadImage(UPLOAD_FILE, formData);

      if (response.success) {
        toast.remove();
        dispatch(updateImage(response.data));
        setImagePreview(null);
        toast.success(SUCCESS_UPLOAD_IMAGE);
      } else {
        setImagePreview(null);
        toast.remove();
        toast.error(response.message);
      }
    }
  }

  return {
    editonMode,
    userInfoToEdit,
    imagePreview,
    handlerInfoToEdit,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    handleChangeImage,
  };
};
