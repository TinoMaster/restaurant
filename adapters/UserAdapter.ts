import { ServerResponse } from "@/types/api_responses";
import { TUser } from "@/types/user";

export const userAdapter = (response: ServerResponse) => {
  let docs: ServerResponse<TUser> | ServerResponse;

  if (!response.success) {
    docs = {
      success: false,
      message: response.message,
    };
  } else {
    if (!response.data) {
      docs = {
        success: true,
        message: response.message,
      };
    } else if (Array.isArray(response.data)) {
      docs = {
        success: true,
        data: response.data[0],
        message: response.message,
      };
    } else {
      docs = {
        success: true,
        data: response.data,
        message: response.message,
      };
    }
  }

  return docs;
};
