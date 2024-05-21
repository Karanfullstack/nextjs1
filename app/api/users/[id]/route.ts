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
