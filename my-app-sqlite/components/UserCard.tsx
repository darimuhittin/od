import Link from 'next/link';
import React from 'react'

interface Props {
    user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    },
    onDelete?: () => void
}
const UserCard: React.FC<Props> = ({ user, onDelete }) => {
    return (
        <li key={user.id} className="py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                        {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                        {user.email}
                    </p>
                </div>
                <div className="inline-flex items-center text-xs text-gray-400">
                    ID: {user.id}
                </div>
            </div>
            <button
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-xs"
            >
                Delete User
            </button>
            <Link href={`/5-realdb/users/${user.id}`}>
                <div className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs'>
                    View User
                </div>
            </Link>
            {/* edit user */}
            <Link href={`/5-realdb/users/${user.id}/edit`}>
                <div className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-xs'>
                    Edit User
                </div>
            </Link>
        </li>
    )
}

export default UserCard