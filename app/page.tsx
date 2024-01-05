"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('atoken')) {
      router.push('/login')
    }
  }, [router])

  if (!localStorage.getItem('atoken')) {
    return;
  }

  return (
    <main>
      Hello World
    </main>
  )
}
