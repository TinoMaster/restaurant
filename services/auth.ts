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
    try {
      const response = await fetch(route, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const docs: ServerResponse = await response.json();
      return docs;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const auth = new Auth();
