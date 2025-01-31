import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hawk AI - Tier-1 Data for Traders",
  description: "AI-powered on-chain data tools, built from scratch.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-dark min-h-screen flex flex-col overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

