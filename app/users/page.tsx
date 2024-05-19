import React from "react";

interface User {
	id: number;
	name: string;
}
export default async function UserPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await res.json();

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}
