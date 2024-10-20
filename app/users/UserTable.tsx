import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortBy: 'name' | 'email';
}

const UserTable = async ({ sortBy = "name" }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: User[] = await res.json();

    const sortedUsers: User[] = sort(users).asc(sortBy === "email" ? user => user.email : user => user.name)

    return (
        <table className='table table-ordered'>
            <thead>
                <tr>
                    <th><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable
