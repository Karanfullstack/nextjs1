import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import prisma from "../../../prisma/client";
import CredentialProvider from "next-auth/providers/credentials";
import bcyrpt from "bcrypt"
const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "Email" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password",
				},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null;
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});
				if (!user) return null;
				const isPassword = await bcyrpt.compare(credentials.password, user.password!)
				return isPassword ? user : null
			},
		}),
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
