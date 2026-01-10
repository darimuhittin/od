"use client"
import axios from 'axios'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const login = () => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await axios.post('/api/login', { name, password })
        console.log(res.data)
        if (res.status === 200) {
            console.log('User logged in')
            router.push('/')
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default login