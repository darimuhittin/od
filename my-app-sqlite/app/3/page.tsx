'use client'
import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
    email?: string;
}

const UcuncuBolum = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const user = { name, email }
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => setUsers([...users, data]))
    }

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <input type="text" name="name" className='border border-gray-300 p-2 rounded' placeholder='Ad' />
                    <input type="email" name="email" className='border border-gray-300 p-2 rounded' placeholder='Email' />
                    <button type="submit" className='bg-blue-500 text-white p-2 rounded cursor-pointer'>Ekle</button>
                </div>
            </form>
        </div>
    )
}

export default UcuncuBolum