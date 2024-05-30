import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import AuthProvider from "./authProvider/AuthProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
// local font
const popoin = localFont({
	src: "../public/fonts/poppins-regular-webfont.woff2",
	variable: "--font-popin",
});
export const metadata: Metadata = {
	title: "Next App",
	description: "Generated karan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="cupcake">
			<body className={popoin.variable} suppressHydrationWarning={true}>
				<AuthProvider>
					<Navbar />
					<main>{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
