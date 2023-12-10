type TData = {
  name: string;
  email: string;
  password: string;
};

interface ServerResponse {
  success: boolean;
  data?: UserFromServer;
  message: string;
}

interface UserFromServer {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

class Auth {
  async register(route: string, data: TData) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(route, requestOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const docs: ServerResponse = await response.json();
    return docs;
  }
}

export const auth = new Auth();
