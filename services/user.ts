import { ServerResponseForUsers } from "@/types/api_responses";
import { TDataUserToUpdate, TUserRegister } from "@/types/user";

class User {
  async register(route: string, data: TUserRegister) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(route, requestOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const docs: ServerResponseForUsers = await response.json();
    return docs;
  }

  async UpdateInfo(route: string, data: TDataUserToUpdate) {
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(route, requestOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const docs: ServerResponseForUsers = await response.json();
    return docs;
  }
}

export const user = new User();
