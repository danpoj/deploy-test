import GoBack from '@/app/_component/go-back'
import { Post } from '@/app/page'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const post = (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) =>
    res.json()
  )) as Post

  if (Object.keys(post).length === 0) notFound()

  return (
    <div className='h-screen p-4 max-w-[60rem] mx-auto'>
      <GoBack />

      <div className='flex flex-col gap-2 mt-10'>
        <h1 className='text-2xl font-semibold'>{post.title}</h1>
        <p className='text-black/60'>{post.body}</p>

        <span className='mt-10'>userId: {post.userId}</span>
        <span>id: {post.id}</span>
      </div>
    </div>
  )
}
