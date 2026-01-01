import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Navbar</h1>
            <div className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/5-realdb">Users</Link>

            </div>
        </div>
    )
}

export default Navbar