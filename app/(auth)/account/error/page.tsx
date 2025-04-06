'use client'

import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Login Error</h1>
      <p className="text-lg text-red-500">
        {error ? `Error: ${error}` : 'Something went wrong during login.'}
      </p>
    </div>
  )
}
