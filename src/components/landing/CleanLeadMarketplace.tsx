'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function CleanLeadMarketplaceDesign() {
  const { data: session } = useSession()

  const jobs = [
    {
      id: '1',
      title: 'Fitnessstudio Reinigung',
      location: 'Karlsruhe',
      price: '35 € Lead',
      size: '1200 m²',
    },
    {
      id: '2',
      title: 'Büroreinigung',
      location: 'Mannheim',
      price: '25 € Lead',
      size: '600 m²',
    },
    {
      id: '3',
      title: 'Treppenhausreinigung',
      location: 'Heidelberg',
      price: '15 € Lead',
      size: '12 Parteien',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CleanLead</h1>
            <p className="text-sm text-neutral-500">
              Aufträge für Reinigungsfirmen
            </p>
          </div>

          <div className="flex gap-3">
            {session ? (
              <>
                <Link href="/dashboard">
                  <button className="px-5 py-2 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition">
                    Dashboard
                  </button>
                </Link>
                <Link href="/api/auth/signout">
                  <button className="px-5 py-2 rounded-2xl bg-black text-white hover:opacity-90 transition">
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <button className="px-5 py-2 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition">
                    Login
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="px-5 py-2 rounded-2xl bg-black text-white hover:opacity-90 transition">
                    Kostenlos starten
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex px-4 py-2 rounded-full bg-black text-white text-sm mb-6">
            Deutschlands erste Reinigungs-Auftragsbörse
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Finde täglich neue Reinigungsaufträge.
          </h2>

          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Reinigungsfirmen erhalten direkte Kundenanfragen und kaufen nur die
            Leads, die wirklich interessant sind.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href={session ? '/dashboard/jobs' : '/auth/register'}>
              <button className="px-7 py-4 rounded-2xl bg-black text-white text-lg font-medium hover:opacity-90 transition">
                Jetzt Aufträge ansehen
              </button>
            </Link>

            <button className="px-7 py-4 rounded-2xl border border-neutral-300 text-lg hover:bg-white transition">
              Demo ansehen
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-neutral-500 mt-2">aktive Firmen</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-3xl font-bold">1.200+</h3>
              <p className="text-neutral-500 mt-2">Leads monatlich</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-3xl font-bold">24h</h3>
              <p className="text-neutral-500 mt-2">schnelle Vermittlung</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl p-6 border border-neutral-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">Neue Aufträge</h3>
              <p className="text-neutral-500 text-sm mt-1">
                Live verfügbare Kundenanfragen
              </p>
            </div>

            <button className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition text-sm">
              Filter
            </button>
          </div>

          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border border-neutral-200 rounded-3xl p-5 hover:shadow-md transition bg-neutral-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <p className="text-neutral-500 mt-2">{job.location}</p>
                  </div>

                  <div className="bg-black text-white px-4 py-2 rounded-2xl text-sm font-medium">
                    {job.price}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-3 text-sm text-neutral-600">
                    <span className="bg-white px-3 py-1 rounded-full border">
                      {job.size}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full border">
                      Unterhaltsreinigung
                    </span>
                  </div>

                  {session ? (
                    <button className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90 transition">
                      Auftrag kaufen
                    </button>
                  ) : (
                    <Link href="/auth/register">
                      <button className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90 transition">
                        Auftrag kaufen
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-black rounded-[40px] p-10 text-white grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Für Reinigungsfirmen
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Erhalte hochwertige Kundenanfragen direkt auf dein Dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Einfache Nutzung</h3>
            <p className="text-neutral-300 leading-relaxed">
              Kunden einstellen, Auftrag kaufen, Kontakt aufnehmen.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Monatlich skalierbar</h3>
            <p className="text-neutral-300 leading-relaxed">
              Perfekt für lokale Firmen und große Gebäudedienstleister.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">Mitgliedschaften</h3>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Reinigungsfirmen wählen das passende Paket und erhalten Zugriff auf neue Aufträge in ihrer Region.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200">
            <div className="mb-6">
              <h4 className="text-2xl font-bold">Starter</h4>
              <p className="text-neutral-500 mt-2">Für kleine Firmen</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">49€</span>
              <span className="text-neutral-500"> / Monat</span>
            </div>

            <div className="space-y-4 text-neutral-700">
              <p>✓ Zugriff auf regionale Leads</p>
              <p>✓ 10 Aufträge pro Monat</p>
              <p>✓ Basis Support</p>
            </div>

            <button className="w-full mt-10 py-4 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition">
              Paket wählen
            </button>
          </div>

          <div className="bg-black text-white rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
              Beliebt
            </div>

            <div className="mb-6">
              <h4 className="text-2xl font-bold">Professional</h4>
              <p className="text-neutral-300 mt-2">Für wachsende Firmen</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">99€</span>
              <span className="text-neutral-300"> / Monat</span>
            </div>

            <div className="space-y-4 text-neutral-200">
              <p>✓ Unbegrenzte Aufträge</p>
              <p>✓ Priorisierte Leads</p>
              <p>✓ Regionen exklusiv sichern</p>
              <p>✓ Premium Support</p>
            </div>

            <button className="w-full mt-10 py-4 rounded-2xl bg-white text-black hover:opacity-90 transition font-medium">
              Jetzt starten
            </button>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-200">
            <div className="mb-6">
              <h4 className="text-2xl font-bold">Enterprise</h4>
              <p className="text-neutral-500 mt-2">Für große Gebäudedienstleister</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">199€</span>
              <span className="text-neutral-500"> / Monat</span>
            </div>

            <div className="space-y-4 text-neutral-700">
              <p>✓ Deutschlandweite Leads</p>
              <p>✓ API & Automationen</p>
              <p>✓ Eigener Ansprechpartner</p>
              <p>✓ Exklusive Großkunden-Leads</p>
            </div>

            <button className="w-full mt-10 py-4 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
