import { NextRequest, NextResponse } from "next/server";
// TODO request:NextRequest - IF REMOVE THIS DATA IS CACHED OTHERWISE NO
interface Props {
	params: { id: number };
}
export function GET(request: NextRequest, { params: { id } }: Props) {
	if (id > 11)
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json({ id: id, name: "John Doe" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	const body = await request.json();
	if (!body.name)
		return NextResponse.json({ error: "Name is required" }, { status: 400 });
	if (id > 12)
		return NextResponse.json({ error: "Invalid User ID" }, { status: 404 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
