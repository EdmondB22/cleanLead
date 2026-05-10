'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Wird geladen...</div>
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">CleanLead Dashboard</h1>
            <p className="text-sm text-neutral-500">Willkommen, {session?.user?.name}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="px-5 py-2 rounded-2xl bg-black text-white hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/dashboard/jobs">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">
                {session?.user?.role === 'KUNDE' ? 'Aufträge verwalten' : 'Aufträge kaufen'}
              </h3>
              <p className="text-neutral-600">
                {session?.user?.role === 'KUNDE'
                  ? 'Stelle neue Aufträge ein'
                  : 'Finde neue Reinigungsaufträge'}
              </p>
            </div>
          </Link>

          {session?.user?.role === 'KUNDE' && (
            <Link href="/dashboard/jobs/new">
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">Neuer Auftrag</h3>
                <p className="text-neutral-600">Stellen Sie einen neuen Auftrag ein</p>
              </div>
            </Link>
          )}

          <Link href="/dashboard/orders">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Meine Bestellungen</h3>
              <p className="text-neutral-600">Sehen Sie alle Ihre Transaktionen</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200">
          <h2 className="text-2xl font-bold mb-6">Account Informationen</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-600">Email</p>
              <p className="text-lg font-medium">{session?.user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600">Rolle</p>
              <p className="text-lg font-medium">
                {session?.user?.role === 'KUNDE' ? 'Auftraggeber' : 'Reinigungsfirma'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
