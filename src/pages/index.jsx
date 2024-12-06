import React from 'react'
import Link from 'next/link'

import DefaultTemplate from '@/layout/defaultLayout'

export default function Index() {
  return (
    <DefaultTemplate>
    <div className='flex items-center justify-center flex-col p-20 text-white space-y-4'>
      <h1 className='text-2xl font-bold'>Welcome to Mobile Legend Analysis</h1>
      <p className='text-md text-pretty'>This is your landing page for Mobile Legends analysis!</p>
      <div className='mt-5 flex gap-5'>
        <Link href="/login" className='p-2 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-xl hover:bg-gray-800 hover:scale-105'>Try to Login</Link>
        <Link href="/register" className='bg-white/30 dark:bg-black/30 rounded-lg shadow-xl backdrop-blur-md p-2 hover:bg-gray-800 hover:scale-105'>Try to Register</Link>
      </div>
    </div>
    </DefaultTemplate>
  )
}
