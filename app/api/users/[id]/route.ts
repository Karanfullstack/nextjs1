import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
// TODO request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO

interface Props {
	params: { id: number };
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
	const user = await prisma.user.findUnique({
		where: { id: Number(id) },
	});

	if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	const body = await request.json();

	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);

	const user = await prisma.user.findUnique({
		where: { id: Number(id) },
	});

	if (!user)
		return NextResponse.json({ error: "Invalid User ID" }, { status: 404 });
	const updateUser = await prisma.user.update({
		where: { id: Number(id) },
		data: { name: body.name, email: body.email },
	});
	return NextResponse.json(updateUser, { status: 200 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
	if (id > 12)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	else return NextResponse.json({ message: "User deleted successfully" });
}
