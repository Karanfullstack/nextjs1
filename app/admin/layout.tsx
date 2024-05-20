import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
export default function layout({ children }: Props) {
	return (
		<div className="flex space-x-3">
			<aside><h1>sidebar</h1></aside>
			{children}
		</div>
	);
}
