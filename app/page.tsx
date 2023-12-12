import Link from 'next/link'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function Page() {
  const posts = (await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())) as Post[]

  return (
    <main className='h-screen p-4 flex flex-col gap-1'>
      {posts.map(({ id, userId, title, body }) => (
        <Link
          href={`/post/${id}`}
          key={id}
          className='p-2 bg-slate-200 rounded hover:bg-slate-300 transition duration-75'
        >
          {id}. {title}
        </Link>
      ))}
    </main>
  )
}
