"use client";

interface Props {
	error: Error;
	reset: () => void;
}
export default function ErrorPage({ error, reset }: Props) {
	console.log("Error", error);
	return (
		<>
			<div>Unexpected Error NextJs</div>
			<button className="btn" onClick={() => reset()}>
				Reset
			</button>
		</>
	);
}
