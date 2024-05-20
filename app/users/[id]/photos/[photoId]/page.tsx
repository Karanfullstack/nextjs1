interface Props {
	params: { photoId: number, id:number };
}
export default function UserPhotoDetail({ params: { photoId, id } }: Props) {
	return <div>UserPhotoDetail {photoId} {id}</div>;
}
