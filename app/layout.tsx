import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Echo + PostgreSQL with Keploy',
  description:
    'A hands-on guide to recording and replaying an Echo + PostgreSQL application with Keploy.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
