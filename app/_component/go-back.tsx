'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function GoBack() {
  return (
    <Link href='/' className='flex px-4 py-2 rounded transition hover:bg-slate-200 w-fit items-center'>
      <ArrowLeft className='mr-1 w-5 h-5' /> go back
    </Link>
  )
}
