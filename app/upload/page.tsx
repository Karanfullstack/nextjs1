"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudnaryProps {
	public_id: string;
}
export default function UploadPage() {
	const [cldId, setCldId] = useState("");
	console.log(cldId);
	return (
		<>
			{cldId && <CldImage src={cldId} alt="gol" width={270} height={150} />}
			<CldUploadWidget
				options={{
					sources: ["local"],
					multiple: false,
					maxFiles: 1,
				}}
				uploadPreset="xenyksnn"
				onSuccess={(result, widget) => {
					const results = result.info as CloudnaryProps;
					setCldId(results.public_id);
					widget.close();
				}}
			>
				{({ open }) => (
					<button onClick={() => open()} className="btn btn-primary">
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
}
