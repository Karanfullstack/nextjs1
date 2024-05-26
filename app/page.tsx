import Link from "next/link";
import ProductCard from "./components/Product/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	const session = await getServerSession(authOptions);
	 
	return (
		<main>
			<h1>{session?.user!.name}</h1>
			<Link href="/users">
				<h1>Hello World</h1>
			</Link>
			<ProductCard />
		</main>
	);
}
