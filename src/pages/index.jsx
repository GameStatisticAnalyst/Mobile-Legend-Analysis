import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='flex items-center justify-center flex-col p-20'>
      <h1>Welcome to Bang Bang Analysis</h1>
      <p>This is your landing page for Mobile Legends analysis!</p>
      <div className='mt-5 flex gap-5'>
        <Link href="/login" className='p-2 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-xl hover:bg-gray-800 hover:scale-105'>Try to Login</Link>
        <Link href="/register" className='bg-white/30 dark:bg-black/30 rounded-lg shadow-xl backdrop-blur-md p-2 hover:bg-gray-800 hover:scale-105'>Try to Register</Link>
      </div>
    </div>
  )
}
