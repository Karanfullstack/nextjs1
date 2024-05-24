"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
export default function UploadPage() {
	return (
		<CldUploadWidget uploadPreset="xenyksnn">
			{({ open }) => (
				<button onClick={() => open()} className="btn btn-primary">
					Upload
				</button>
			)}
		</CldUploadWidget>
	);
}
