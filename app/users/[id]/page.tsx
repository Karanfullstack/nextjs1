import React from "react";

interface Props {
	params: { id: number };
}
export default function UserDetial({params:{id}}:Props) {
	return <div>UserDetial {id}</div>;
}
