import React from "react";

interface User {
	id: number;
	name: string;
}
export default async function UserPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: { revalidate: 10 }, // every 10 sec fetch new data
	});
	const users: User[] = await res.json();

	return (
		<div>
			<p>{new Date().toLocaleTimeString()}</p>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}
