"use client"
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';
const Register = () => {
    const router = useRouter();



    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');

        console.log(email, name, password)
        const res = await axios.post('/api/auth/register', {
            email,
            name,
            password
        })

        console.log(res.data)
        console.log(res.status)
        if (res.status === 200) {
            router.push('/login')
        }
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div>

                <div className='mb-2'>Register</div>
                <form className='flex flex-col' onSubmit={onSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input name="email" className='bg-white m-2 px-2 py-1 text-black' />
                    <label htmlFor='name'>Name</label>
                    <input name="name" className='bg-white m-2 px-2 py-1 text-black' />
                    <label htmlFor='password'>Password</label>
                    <input name="password" className='bg-white m-2 px-2 py-1 text-black' />
                    <button type='submit' className='bg-green-600 cursor-pointer'>Kayit Ol</button>
                </form>
            </div>
        </div>
    )
}

export default Register