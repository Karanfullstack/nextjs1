import { notFound } from "next/navigation";
import React from "react";

interface Props {
	params: { id: number };
}
export default function UserDetial({ params: { id } }: Props) {
	if (id > 11) notFound();
	return <div>UserDetial {id}</div>;
}
