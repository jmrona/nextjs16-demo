import React from 'react'

export default async function AnalyticsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await response.json() as { id: number; title: string }[];
  return (
    <div>AnalyticsPage
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
