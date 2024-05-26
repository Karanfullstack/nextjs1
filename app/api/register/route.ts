import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import prisma from "@/prisma/client";

const schema = z.object({
	email: z.string().email(),
	password: z.string(),
});
export async function POST(request: NextRequest) {
	const body = await request.json();
	const payload = schema.safeParse(body);
	if (!payload.success) {
		return NextResponse.json({ error: payload.error.errors }, { status: 400 });
	}
	const user = await prisma.user.findUnique({
		where: { email: payload.data.email },
	});
	if (user) {
		return NextResponse.json(
			{ error: "User is already exists" },
			{ status: 400 }
		);
	}
	const hashedPassword = await bcrypt.hash(payload.data.password, 10);
	const newUser = await prisma.user.create({
		data: {
			email: payload.data.email,
			password: hashedPassword,
		},
	});
	return NextResponse.json(newUser, { status: 201 });
}
