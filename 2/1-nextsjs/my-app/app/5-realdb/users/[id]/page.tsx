import api from "@/lib/api"
const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const response = await api.get(`/api/realdb/${id}`)
    const user = response.data
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">First Name: {user.firstName}</h1>
            <h1 className="text-2xl font-bold">Last Name: {user.lastName}</h1>
            <h1 className="text-2xl font-bold">Email: {user.email}</h1>
        </div>
    )
}

export default UserPage