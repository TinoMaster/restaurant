type TData = {
  name: string;
  email: string;
  password: string;
};

class Auth {
  async register(route: string, data: TData) {
    const response = await fetch(route, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const auth = new Auth();
