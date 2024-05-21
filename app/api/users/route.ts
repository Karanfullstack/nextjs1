import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// TODO request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO
export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Karan Doe" },
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
	return NextResponse.json({ name: body.name, id: 1 }, { status: 201 });
}
