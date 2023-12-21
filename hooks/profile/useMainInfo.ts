import { INITIAL_ERROR, INITIAL_SUCCESS } from "@/constants/common";
import { PROFILE_ROUTE, UPLOAD_FILE } from "@/constants/routes.api";
import { user } from "@/services/user";
import { TError, TSuccess } from "@/types/common";
import { TDataUserToUpdate, TUser } from "@/types/user";
import { cleanMessage } from "@/utils/cleanMessage";
import { useState } from "react";

interface IUseMainInfoProps {
  setDataSession: React.Dispatch<React.SetStateAction<TUser | undefined>>;
}

interface IUseMainInfo {
  editonMode: boolean;
  loading: boolean;
  error: TError;
  success: TSuccess;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);

  /* change image states */
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  async function handleSubmitUpdateUserInfo(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);

    const data: TDataUserToUpdate = {};

    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await user.UpdateInfo(PROFILE_ROUTE, data);

    if (response.success) {
      setEditonMode(false);
      setSuccess(response);
      cleanMessage(setSuccess, INITIAL_SUCCESS);
      setDataSession(response.data);
    } else {
      setError({ error: true, message: response.message });
      cleanMessage(setError, INITIAL_ERROR);
    }
    setLoading(false);
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
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await user.uploadImage(UPLOAD_FILE, formData);

      if (response.success) {
        setImagePreview(null);
        setSuccess(response);
        cleanMessage(setSuccess, INITIAL_SUCCESS);
      } else {
        setError({ error: true, message: response.message });
        cleanMessage(setError, INITIAL_ERROR);
      }
    }
  }

  return {
    editonMode,
    loading,
    error,
    success,
    imagePreview,
    setEditonMode,
    handleSubmitUpdateUserInfo,
    onChangeImage,
    handleChangeImage,
  };
};
