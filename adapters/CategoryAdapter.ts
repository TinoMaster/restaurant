import { ServerResponse } from "@/types/api_responses";
import { TCategory } from "@/types/models/category";

export const categoryAdapter = (response: ServerResponse) => {
  let docs: ServerResponse<TCategory[]>;

  if (!response.success) {
    docs = {
      success: false,
      message: response.message,
    };
  } else {
    if (!response?.data) {
      docs = {
        success: true,
        message: response.message,
      };
    }
    docs = {
      success: true,
      data: response.data,
      message: response.message,
    };
  }
  return docs;
};
