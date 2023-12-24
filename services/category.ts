import { categoryAdapter } from "@/adapters/CategoryAdapter";
import { ServerResponse } from "@/types/api_responses";

class Category {
  async getCategories() {
    const url = `${process.env.NEXTAUTH_URL}/api/categories`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Failed to fetch data");

    const server_response: ServerResponse = await res.json();
    const docs = categoryAdapter(server_response);
    return docs;
  }
}

export const category = new Category();
