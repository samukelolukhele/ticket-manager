import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const statuses = await prisma.status.findMany();
    console.log(statuses);
    return NextResponse.json(statuses, {
      status: 200,
    });
  } catch (e) {
    console.error(`Request failed: ${e}`);
    return NextResponse.json("Something went wrong while retrieving tickets", {
      status: 500,
    });
  }
}
