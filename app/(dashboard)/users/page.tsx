"use cache";

import { cacheLife } from 'next/cache';
import Link from 'next/link'
import React from 'react'

export default async function UsersPage() {
  cacheLife("hours")
  const response = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const users = await response.json()

  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className="mt-10">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
