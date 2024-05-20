import React from "react";

interface Props {
	params: { slug: string[] };
}
export default function ProductPage({ params: { slug } }: Props) {
	return <div>ProductPage {slug}</div>;
}
