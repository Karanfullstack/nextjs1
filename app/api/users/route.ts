import { NextRequest, NextResponse } from "next/server";

// TODO request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO
export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Karan Doe" },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	if (!body.name)
		return NextResponse.json({ error: "Name is required" }, { status: 400 });
	return NextResponse.json({ name: body.name, id: 1 }, { status: 201 });
}
