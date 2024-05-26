"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
	const { status, data: session } = useSession();
	const navigation = [
		{ name: "User", link: "/users", active: true },
		{ name: "Products", link: "/products", active: true },
		{
			name: "Google Login",
			link: "/api/auth/signin",
			active: status === "unauthenticated",
		},
		{
			name: session?.user?.email,
			link: "/profile",
			active: status === "authenticated",
		},
		{
			name: "Logout",
			link: "/api/auth/signout",
			active: status === "authenticated",
		},
	];
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex">
				<ul className="menu menu-horizontal px-1">
					{navigation.map(
						(item) =>
							item.active && (
								<>
									<li>
										<Link href={item.link}>{item.name}</Link>
									</li>
								</>
							)
					)}
				</ul>
			</div>
		</div>
	);
}
