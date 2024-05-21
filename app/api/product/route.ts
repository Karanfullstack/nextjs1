import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
	return NextResponse.json([
		{
			id: 1,
			name: "milk",
			price: 2.3,
		},

		{
			id: 2,
			name: "onion",
			price: 1.3,
		},
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);

	return NextResponse.json({ id: 1, ...validation.data }, { status: 201 });
}
