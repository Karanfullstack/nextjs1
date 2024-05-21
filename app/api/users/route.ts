import { NextRequest, NextResponse } from "next/server";

// TODO request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO
export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Karan Doe" },
	]);
}
