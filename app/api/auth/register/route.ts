import { NextApiRequest } from "next";

export function POST(req: NextApiRequest) {
  return {
    status: 200,
    body: {
      message: "Hello world",
    },
  };
}
