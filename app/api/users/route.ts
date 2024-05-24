import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
// ! request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO
export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);
	return NextResponse.json({ name: body.name, id: 1 }, { status: 201 });
}
