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
    const data = Array.isArray(response.data) ? response.data : [response.data];
    docs = {
      success: true,
      data,
      message: response.message,
    };
  }
  return docs;
};
