import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brajesh - Web Designer & Photographer",
  description: "Freelance web designer and photographer based in Paris, France",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}

