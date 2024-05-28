import Link from "next/link";
import ProductCard from "./components/Product/ProductCard";
import { getServerSession } from "next-auth";
import authOptions from "./api/auth/options";
import Image from "next/image";
import gol from "../assets/gol.jpeg";
export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			<h1>{session?.user!.name}</h1>
			<Link href="/users">
				<h1>Hello World</h1>
			</Link>
			<ProductCard />
			<Image
				src={
					"https://m.media-amazon.com/images/S/pv-target-images/2f01f3ea957b378822c7aac932885fb1712799126fcd9bd192e74fc4d06dd545._AC_SX720_FMwebp_.jpg"
				}
				height={170}
				width={250}
				alt="gol"
			/>
		</main>
	);
}
