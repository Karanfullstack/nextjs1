import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
interface User {
	id: number;
	name: string;
	email: string;
}
interface Props {
	sortBy: string;
}
export default async function UserTable({ sortBy }: Props) {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: { revalidate: 10 }, // every 10 sec fetch new data
	});
	const users: User[] = await res.json();
	const sortedUser = sort(users).asc(
		sortBy === "email" ? (user) => user.email : (user) => user.name
	);
	return (
		<table className="table table-md	 ">
			<thead>
				<tr>
					<th>
						<Link href={"/users?sortOrder=name"}>Name</Link>
					</th>
					<th>
						<Link href={"/users?sortOrder=email"}>Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUser.map((user) => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
