import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'CleanLead - Aufträge für Reinigungsfirmen',
  description: 'Deutschlands erste Reinigungs-Auftragsbörse. Finde täglich neue Reinigungsaufträge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
