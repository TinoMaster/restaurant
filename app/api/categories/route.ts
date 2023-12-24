import mongoose from "mongoose";
import { CategoryModel } from "@/app/models/Categories";
import { db_config } from "@/config/db.config";

export async function GET() {
  try {
    await mongoose.connect(`${db_config.URI}`);
    const categories = await CategoryModel.find();
    return Response.json({
      success: true,
      data: categories,
      message: "Categorias cargadas con exito",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Hubo un error al procesar la solicitud",
    });
  }
}

export async function POST(req: Request) {
  try {
    await mongoose.connect(`${db_config.URI}`);
    const body = await req.json();
    const category = await CategoryModel.create(body);
    return Response.json({
      success: true,
      data: category,
      message: "Creado con exito",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Hubo un error al procesar la solicitud",
    });
  }
}
