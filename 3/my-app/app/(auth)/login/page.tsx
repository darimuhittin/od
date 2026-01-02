"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/store/auth'
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()
    const { login } = useAuthStore()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const success = await login(email, password)
        if (success) {
            router.push('/')
        } else {
            alert('Login failed')
        }
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-full max-w-md'>
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input className="border p-2 m-2" type="text" placeholder='Email (user@example.com)' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="border p-2 m-2" type="password" placeholder='Password (password)' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-blue-500 text-white p-2 m-2" type='submit'>Login</button>
                </form>
                <Link href='/register'>Don't have an account? Register</Link>
            </div>
        </div>
    )
}

export default Login