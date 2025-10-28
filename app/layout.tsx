import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Agency | Разработка сайтов, Telegram Mini Apps и ботов",
  description:
    "Профессиональная разработка веб-сайтов, мини-приложений для Telegram и ботов. Современные технологии и инновационные решения для вашего бизнеса.",
  keywords: "разработка сайтов, telegram боты, mini apps, веб-разработка, создание сайтов",
  authors: [{ name: "Digital Agency" }],
  openGraph: {
    title: "Digital Agency | Разработка сайтов и Telegram приложений",
    description: "Профессиональная разработка веб-сайтов, мини-приложений для Telegram и ботов",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
