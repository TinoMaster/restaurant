import { UserModel } from "@/app/models/User";
import { db_config } from "@/config/db.config";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { nextOptions } from "../auth/[...nextauth]/route";
export async function PUT(req: Request) {
  try {
    const body = await req.json();

    if (!body) {
      return Response.json({
        success: false,
        message: "No se recibieron datos",
      });
    }

    const session = await getServerSession(nextOptions);
    const email = session?.user?.email;

    await mongoose.connect(`${db_config.host}/${db_config.database}`);
    const response = await UserModel.findOneAndUpdate({ email }, body, {
      new: true,
    });

    if (!response) {
      return Response.json({
        success: false,
        message: "Ah ocurrido un error intente mas tarde",
      });
    }

    return Response.json({
      success: true,
      data: response,
      message: "Usuario actualizado con exito",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Hubo un error al procesar la solicitud",
    });
  } finally {
    await mongoose.disconnect();
  }
}
