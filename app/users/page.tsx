import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
}
export default async function UserPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: { revalidate: 10 }, // every 10 sec fetch new data
	});
	const users: User[] = await res.json();

	return (
		<div>
			<table className="table table-md	 ">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
