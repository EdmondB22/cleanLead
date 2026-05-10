'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registered = searchParams.get('registered') === 'true'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Email oder Passwort falsch')
      setLoading(false)
    } else if (result?.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-[32px] p-8 shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2">Willkommen zurück</h1>
        <p className="text-neutral-600 mb-8">Melde dich an um fortzufahren</p>

        {registered && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ Registrierung erfolgreich! Bitte melde dich an.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="deine@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white font-medium rounded-2xl hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Wird angemeldet...' : 'Anmelden'}
          </button>
        </form>

        <p className="text-center text-neutral-600 mt-6">
          Noch kein Konto?{' '}
          <Link href="/auth/register" className="font-medium text-black hover:underline">
            Hier registrieren
          </Link>
        </p>
      </div>
    </div>
  )
}
