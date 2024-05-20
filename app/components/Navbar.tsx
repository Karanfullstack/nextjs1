import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={"/users"}>Users</Link>
					</li>
     <li>
						<Link href={"/products"}>Products</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
