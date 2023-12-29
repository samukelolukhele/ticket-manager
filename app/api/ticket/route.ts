import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany();
    console.log(tickets);
    return NextResponse.json(tickets, {
      status: 200,
    });
  } catch (e) {
    console.error(`Request failed: ${e}`);
    return NextResponse.json("Something went wrong while retrieving tickets", {
      status: 500,
    });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const newEntry = await prisma.ticket.create({
      data: body,
    });
    return res.status(200).json({ newEntry, success: true });
  } catch (e) {
    console.error(`Request failed: ${e}`);
    res.status(500).json({
      message: `Something went wrong while creating ticket: ${e}`,
      success: false,
    });
  }
}
