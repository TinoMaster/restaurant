import { db_config } from "@/config/db.config";
import { UserModel } from "@/app/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(`${db_config.host}/${db_config.database}`);
  const user = await UserModel.create(body);
  console.log(user);
  return Response.json({
    success: true,
    data: user,
    message: "Usuario creado con exito",
  });
}
