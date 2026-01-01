'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const EditUserPage = () => {
    const router = useRouter()
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const { id } = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/api/realdb/${id}`)
            setUser(response.data)
        }
        fetchUser()
    }, [id])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await axios.put(`/api/realdb/${id}`, user)
        const newUser = await axios.get(`/api/realdb/${id}`)
        setUser(newUser.data)
        // navigate to users page
        router.push('/5-realdb')
    }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                <input type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <button type="submit">Update User</button>
            </form>
        </div>
    )
}

export default EditUserPage