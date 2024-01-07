import { UserModel } from "@/app/models/User";
import { db_config } from "@/config/db.config";
import { ServerResponse } from "@/types/api_responses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, address } = body;

  if (!body) {
    return NextResponse.json<ServerResponse>({
      success: false,
      message: "No se recibieron datos",
    });
  }
  try {
    await mongoose.connect(db_config.URI);
    const res = await UserModel.updateOne({ email }, { $push: { address } });

    if (!res) {
      return NextResponse.json<ServerResponse>({
        success: false,
        message: "Ah ocurrido un error al cargar la informacion",
      });
    }

    return NextResponse.json<ServerResponse>({
      success: true,
      message: "Informacion cargada con exito",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json<ServerResponse>({
      success: false,
      message: "Hubo un error al procesar la solicitud",
    });
  }
}
