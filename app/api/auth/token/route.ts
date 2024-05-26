import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(reqest: NextRequest) {
	const token = await getToken({ req: reqest });
 console.log(token)
	return NextResponse.json({ token });
}
