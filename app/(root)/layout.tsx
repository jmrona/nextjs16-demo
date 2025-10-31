import Link from 'next/link';
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="p-5 border-b border-gray-300 mb-5 flex gap-5 justify-end">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/users" className="">
            Dashboard Users
          </Link>
          <Link href="/analytics" className="">
            Dashboard Analytics
          </Link>
        </nav>
      </header>

      <section className="p-5 grow">
        <h1>Root Layout</h1>
        {children}
      </section>
    </>
  )
}
