import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
const prisma = new PrismaClient();

const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
	},
};
export default authOptions as NextAuthOptions;
