import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
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
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);
	if (id > 12)
		return NextResponse.json({ error: "Invalid User ID" }, { status: 404 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
	if (id > 12)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json({ message: "User deleted successfully" });
}
