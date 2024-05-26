import middleware from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// ? below code can be used for custom logic
// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL("/new-page", request.url));
// }

// ? as we have already middelware from next-auth we can use (Middleware);
export default middleware;
export const config = {
	// * zero or more
	// + one or more
	// ? zero or one
	matcher: ["/products/:id*"],
};
