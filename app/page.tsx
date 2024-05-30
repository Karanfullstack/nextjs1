"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
	ssr: false,
	loading: () => <p>Loading..</p>,
});

export default async function Home() {
	const [isVisible, setVisible] = useState(false);
	return (
		<main>
			<button
				onClick={async () => {
					const _ = (await import("lodash")).default;
					const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
					const result = _.orderBy(users, ["name"]);
					console.log(result);
				}}
				className="btn btn-link"
			>
				Click
			</button>
			{isVisible && <HeavyComponent />}
		</main>
	);
}
