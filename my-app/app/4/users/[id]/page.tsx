import { getUserById } from "@/lib/services/user"
const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const user = await getUserById(Number(id))

    if (!user) {
        return <div className="p-4">User not found</div>
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">First Name: {user.firstName}</h1>
            <h1 className="text-2xl font-bold">Last Name: {user.lastName}</h1>
            <h1 className="text-2xl font-bold">Email: {user.email}</h1>
        </div>
    )
}

export default UserPage