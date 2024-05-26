import UserTable from "./UserTable";

interface Props {
	searchParams: { sortOrder: string };
}
export default async function UserPage({ searchParams: { sortOrder } }: Props) {
	return (
		<>
			<UserTable sortBy={sortOrder} />
		</>
	);
}
