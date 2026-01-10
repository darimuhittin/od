"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const register = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await axios.post('/api/register', { name, password })
        console.log(res.data)
        if (res.status === 201) {
            console.log('User registered')
        } else {
            console.log('Register failed')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default register