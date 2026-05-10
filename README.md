# CleanLead - Reinigungs-Auftragsbörse

Deutschlands erste Plattform für Reinigungsaufträge. Auftraggeber stellen Aufträge ein, Reinigungsfirmen kaufen interessante Leads.

## Features

- 🏢 Auftragsverwaltung für Kunden
- 🔍 Auftragssuche für Reinigungsfirmen
- 💳 Sichere Zahlungsabwicklung mit Stripe
- 🔐 Benutzerauthentifizierung mit NextAuth
- 📊 Dashboard für beide Rollen
- 🗺️ Regionale Filter

## Tech-Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Datenbank**: PostgreSQL mit Prisma ORM
- **Auth**: NextAuth.js
- **Zahlungen**: Stripe
- **Sprache**: TypeScript

## Quick Start

### 1. Dependencies installieren
```bash
npm install
```

### 2. Datenbank Setup
```bash
# .env.local erstellen und DATABASE_URL setzen
cp .env.example .env.local

# Prisma Setup
npm run prisma:migrate
npm run prisma:generate
```

### 3. Environment Variablen
Aktualisiere `.env.local`:
```
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="generate-a-random-string"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

### 4. Development starten
```bash
npm run dev
```

Öffne http://localhost:3000

## Lizenz

MIT
