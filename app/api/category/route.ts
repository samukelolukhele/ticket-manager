import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const statuses = await prisma.category.findMany();
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

export async function POST(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id)
    return NextResponse.json({ status: 401, message: "No user was found." });

  const body = await req.json();
  console.log(body);

  if (!body.title)
    return NextResponse.json({ status: 400, message: "No title was provided" });

  try {
    const newEntry = await prisma.category.create({
      data: {
        title: body.title,
        description: body.description,
        userId: user?.id,
      },
    });
    return NextResponse.json(newEntry, {
      status: 201,
    });
  } catch (error) {
    console.error(`Request failed: ${error}`);
    NextResponse.json({ status: 500, message: `Request failed: ${error}` });
  }
}
