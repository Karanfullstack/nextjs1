import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
	return (
		<main>
			<Link href="/users">
				<h1>Hello World</h1>
			</Link>
			<ProductCard />
		</main>
	);
}
